/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { PostHog } from '../../../posthog-core'
import { FlagsResponse } from '../../../types'
import { ExceptionObserver } from '../../../extensions/exception-autocapture'
import { assignableWindow, window } from '../../../utils/globals'
import { createPosthogInstance } from '../../helpers/posthog-instance'
import { uuidv7 } from '../../../uuidv7'

import posthogErrorWrappingFunctions from '../../../entrypoints/exception-autocapture'
import { afterEach } from '@jest/globals'

/** help out jsdom */
export type PromiseRejectionEventTypes = 'rejectionhandled' | 'unhandledrejection'

export type PromiseRejectionEventInit = {
    promise: Promise<any>
    reason: any
}

export class PromiseRejectionEvent extends Event {
    public readonly promise: Promise<any>
    public readonly reason: any

    public constructor(type: PromiseRejectionEventTypes, options: PromiseRejectionEventInit) {
        super(type)

        this.promise = options.promise
        this.reason = options.reason
    }
}

/* finished helping js-dom */

describe('Exception Observer', () => {
    let exceptionObserver: ExceptionObserver
    let posthog: PostHog
    let sendRequestSpy: jest.SpyInstance
    const beforeSendMock = jest.fn().mockImplementation((e) => e)
    const loadScriptMock = jest.fn()

    const addErrorWrappingFlagToWindow = () => {
        // assignableWindow.onerror = jest.fn()
        // assignableWindow.onerror__POSTHOG_INSTRUMENTED__ = true

        assignableWindow.__PosthogExtensions__.errorWrappingFunctions = posthogErrorWrappingFunctions
    }

    const expectNoHandlers = () => {
        expect((window?.console?.error as any)?.__POSTHOG_INSTRUMENTED__).toBeUndefined()
        expect((window?.onerror as any)?.__POSTHOG_INSTRUMENTED__).toBeUndefined()
        expect((window?.onunhandledrejection as any)?.__POSTHOG_INSTRUMENTED__).toBeUndefined()
    }

    beforeEach(async () => {
        loadScriptMock.mockImplementation((_ph, _path, callback) => {
            addErrorWrappingFlagToWindow()
            callback()
        })

        posthog = await createPosthogInstance(uuidv7(), { before_send: beforeSendMock })
        assignableWindow.__PosthogExtensions__ = {
            loadExternalDependency: loadScriptMock,
        }

        sendRequestSpy = jest.spyOn(posthog, '_send_request')

        exceptionObserver = new ExceptionObserver(posthog)
    })

    afterEach(() => {
        exceptionObserver['_stopCapturing']()
    })

    describe('when enabled remotely', () => {
        beforeEach(() => {
            exceptionObserver.onRemoteConfig({ autocaptureExceptions: true } as FlagsResponse)
        })

        it('should instrument enabled handlers only when started', () => {
            expect(exceptionObserver.isEnabled).toBe(true)

            expect((window?.console?.error as any).__POSTHOG_INSTRUMENTED__).toBeUndefined()
            expect((window?.onerror as any).__POSTHOG_INSTRUMENTED__).toBe(true)
            expect((window?.onunhandledrejection as any).__POSTHOG_INSTRUMENTED__).toBe(true)
        })

        it('should remove instrument handlers when stopped', () => {
            exceptionObserver['_stopCapturing']()
            expectNoHandlers()
        })

        it('captures an event when an error is thrown', () => {
            const error = new Error('test error')
            window!.onerror?.call(window, 'message', 'source', 0, 0, error)

            const captureCalls = beforeSendMock.mock.calls
            expect(captureCalls.length).toBe(1)
            const singleCall = captureCalls[0]
            expect(singleCall[0]).toMatchObject({
                event: '$exception',
                properties: {
                    $exception_personURL: expect.any(String),
                    $exception_list: [
                        {
                            type: 'Error',
                            value: 'test error',
                            stacktrace: { frames: expect.any(Array) },
                            mechanism: { synthetic: false, handled: true },
                        },
                    ],
                },
            })
        })

        it('captures an event when an unhandled rejection occurs', () => {
            const error = new Error('test error')
            const promiseRejectionEvent = new PromiseRejectionEvent('unhandledrejection', {
                // this is a test not a browser, so we don't care there's no Promise in IE11
                // eslint-disable-next-line compat/compat
                promise: Promise.resolve(),
                reason: error,
            })
            window!.onunhandledrejection?.call(window!, promiseRejectionEvent)

            const captureCalls = beforeSendMock.mock.calls
            expect(captureCalls.length).toBe(1)
            const singleCall = captureCalls[0]
            expect(singleCall[0]).toMatchObject({
                event: '$exception',
                properties: {
                    $exception_personURL: expect.any(String),
                    $exception_list: [
                        {
                            type: 'UnhandledRejection',
                            value: 'test error',
                            stacktrace: { frames: expect.any(Array) },
                            mechanism: { synthetic: false, handled: false },
                        },
                    ],
                },
            })
        })

        it('sends captured events to the right URL', () => {
            const error = new Error('test error')
            window!.onerror?.call(window, 'message', 'source', 0, 0, error)

            expect(sendRequestSpy).toHaveBeenCalled()
            const request = sendRequestSpy.mock.calls[0][0]
            expect(request.url).toBe('http://localhost/e/?ip=0')
            expect(request.data).toMatchObject({
                event: '$exception',
                properties: {
                    $exception_personURL: expect.any(String),
                    $exception_list: [
                        {
                            type: 'Error',
                            value: 'test error',
                            stacktrace: { frames: expect.any(Array) },
                            mechanism: { synthetic: false, handled: true },
                        },
                    ],
                },
            })
            expect(request.batchKey).toBe('exceptionEvent')
        })

        it('does not start if disabled locally', () => {
            posthog.config.capture_exceptions = false
            exceptionObserver = new ExceptionObserver(posthog)
            expect(exceptionObserver.isEnabled).toBe(false)
        })
    })

    describe('when there are handlers already present', () => {
        const originalOnError = jest.fn()
        const originalOnUnhandledRejection = jest.fn()

        beforeEach(() => {
            jest.clearAllMocks()
            window!.onerror = originalOnError
            window!.onunhandledrejection = originalOnUnhandledRejection

            exceptionObserver.onRemoteConfig({ autocaptureExceptions: true } as FlagsResponse)
        })

        it('should wrap original onerror handler if one was present when wrapped', () => {
            expect(window!.onerror).toBeDefined()
            expect(window!.onerror).not.toBe(originalOnError)
        })

        it('should wrap original onunhandledrejection handler if one was present when wrapped', () => {
            expect(window!.onunhandledrejection).toBeDefined()
            expect(window!.onunhandledrejection).not.toBe(originalOnUnhandledRejection)
        })

        it('should call original onerror handler if one was present when wrapped', () => {
            // throw an error so that it will be caught by window.onerror
            const error = new Error('test error')
            window!.onerror?.call(window, 'message', 'source', 0, 0, error)

            expect(originalOnError).toHaveBeenCalledWith('message', 'source', 0, 0, error)
        })

        it('should call original onunhandledrejection handler if one was present when wrapped', () => {
            // throw an error so that it will be caught by window.onunhandledrejection
            const error = new Error('test error')
            const promiseRejectionEvent = new PromiseRejectionEvent('unhandledrejection', {
                // this is a test not a browser, so we don't care there's no Promise in IE11
                // eslint-disable-next-line compat/compat
                promise: Promise.resolve(),
                reason: error,
            })
            window!.onunhandledrejection?.call(window!, promiseRejectionEvent)

            expect(originalOnUnhandledRejection).toHaveBeenCalledWith(promiseRejectionEvent)
        })

        it('should reinstate original onerror handler if one was present when wrapped', () => {
            exceptionObserver['_stopCapturing']()

            expect(window!.onerror).toBe(originalOnError)
        })

        it('should reinstate original onunhandledrejection handler if one was present when wrapped', () => {
            exceptionObserver['_stopCapturing']()

            expect(window!.onunhandledrejection).toBe(originalOnUnhandledRejection)
        })
    })

    describe('when no flags response', () => {
        it('cannot be started', () => {
            expect(exceptionObserver.isEnabled).toBe(false)
            expectNoHandlers()
            exceptionObserver['_startCapturing']()
            expectNoHandlers()
        })
    })

    describe('when disabled', () => {
        beforeEach(() => {
            exceptionObserver.onRemoteConfig({ autocaptureExceptions: false } as FlagsResponse)
        })

        it('cannot be started', () => {
            expect(exceptionObserver.isEnabled).toBe(false)
            expectNoHandlers()
            exceptionObserver['_startCapturing']()
            expectNoHandlers()
        })
    })
})
