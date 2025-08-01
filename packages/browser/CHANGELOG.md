# posthog-js

## 1.258.4

### Patch Changes

- [#2172](https://github.com/PostHog/posthog-js/pull/2172) [`ac254d9`](https://github.com/PostHog/posthog-js/commit/ac254d945be598314c365310ed7c13047edc9ead) Thanks [@lucasheriques](https://github.com/lucasheriques)! - Adds a new config, `advanced_enable_surveys`, to always enable surveys funcionality in the SDK

## 1.258.3

### Patch Changes

- [#2171](https://github.com/PostHog/posthog-js/pull/2171) [`14adc01`](https://github.com/PostHog/posthog-js/commit/14adc01875c87f6be10e70204307003d9d0f941c) Thanks [@lucasheriques](https://github.com/lucasheriques)! - Fix early access features accumulation in persistence

- [#2170](https://github.com/PostHog/posthog-js/pull/2170) [`262cc5c`](https://github.com/PostHog/posthog-js/commit/262cc5cc9364605e31788e5370b0663507e4c832) Thanks [@lucasheriques](https://github.com/lucasheriques)! - Removes the `_renderExternalSurvey` method which is not needed anymore

## 1.258.2

### Patch Changes

- [#2111](https://github.com/PostHog/posthog-js/pull/2111) [`7114593`](https://github.com/PostHog/posthog-js/commit/711459317bf807fa1d21be2f7067182952ea2a5e) Thanks [@pauldambra](https://github.com/pauldambra)! - checks for session activity in other windows when timing out in any particular window, avoids a race condition when proactively marking a session as idle

## 1.258.1

### Patch Changes

- [#2120](https://github.com/PostHog/posthog-js/pull/2120) [`c7b03cd`](https://github.com/PostHog/posthog-js/commit/c7b03cddb621988323238b22acdf8faefd93742e) Thanks [@lucasheriques](https://github.com/lucasheriques)! - Updates the renderSurvey and getActiveMatchingSurveys methods to not take any external surveys into consideration

## 1.258.0

### Minor Changes

- [#2089](https://github.com/PostHog/posthog-js/pull/2089) [`0a19df2`](https://github.com/PostHog/posthog-js/commit/0a19df28d6a62b97949f0e99bfadf33b7aadcb45) Thanks [@daibhin](https://github.com/daibhin)! - feat: exclude exceptions autocaptured by extensions

## 1.257.2 - 2025-07-22

- chore: Safer iteration of experimental `__add_tracing_headers` (#2100)

## 1.257.1 - 2025-07-21

- return capture results from captureException (#2081)
- update posthog-js at workspace level (#2096)
- chore(tests): use playwright for integration tests (#2093)
- fix: Sync consent with persistence immediately (#2082)
- Use posthog consent in next playground (#2083)

## 1.257.0 - 2025-07-08

- one for flags and flags for all (#2079)
- Fix comment (#2078)
- feat: Enhance AssignableWindow type with additional properties for better SDK integration (#2077)
- reset flags internal state when posthog.reset is called (#2066)

## 1.256.2 - 2025-07-04

- fix: Fix backwards compatibility (#2074)
- feat: Sdk spec gen (#2029)
- Fix CHANGELOG.md (#2068)

## 1.256.1 - 2025-07-02

- fix survey input color on dark backgrounds (#2071)

## 1.256.0 - 2025-06-30

- feat: push replay and person data to intercom and crisp chat (#2039)

## 1.255.3 - 2025-06-30

- fix: init surveys manager if surveys is disabled in the project settings (#2056)

## 1.255.2 - 2025-06-30

- fix: word break on open ended choices (#2065)
- chore: make it easier to run locally (#2061)
- chore: deprecate ip config (#2053)
- Fix dev on nextjs playground (#2051)
- feat: add vscode extension playground (#2041)
- chore: add a top-level changelog (#2040)
- chore: improve eslint rule (#2038)
- chore: Make nextjs playground work with regular install (#2035)

## 1.255.1 - 2025-06-20

- chore: new survey config (#2031)
- split configuration and fix react linting (#2028)

## 1.255.0 - 2025-06-18

- feat: enhance campaign parameter retrieval from cookies and URL (#2027)

## 1.254.0 - 2025-06-17

- feat: add distinct id tracing header (#2026)
- Add flags project board workflow (#2014)

## 1.253.4 - 2025-06-16

- fix: some style problems in multiple/single-choice questions (#2016)

## 1.253.3 - 2025-06-16

- fix: don't call ff events for surveys (#2022)
- chore: move readme to root (#2023)

## 1.253.2 - 2025-06-16

- Revert "Revert "remove custom eslint rules (#2019)" (#2020)" (#2021)

## 1.253.1 - 2025-06-16

## 1.253.0 - 2025-06-16

- chore: update readme instructions (#2017)
- chore: workspace migration (#1991)

## 1.252.1 - 2025-06-15

- Fix crash when config has circular references (#2015)

## 1.252.0 - 2025-06-12

## 1.251.1 - 2025-06-12

- fix: Add warning for when the user tries to identify using the cookieless sentinel distinct ID (#2013)

## 1.251.0 - 2025-06-12

- feat: improve surveys accessibility (#1999)

## 1.250.2 - 2025-06-10

- fix: stop feedback surveys to re-render every second (#2006)

## 1.250.1 - 2025-06-10

## 1.250.0 - 2025-06-09

## 1.249.5 - 2025-06-05

- feat: exception rate limiter by type (#1994)

## 1.249.4 - 2025-06-05

- fix: use correct key for exception values in suppression rules (#2002)

## 1.249.3 - 2025-06-04

- fix: set survey properties before sending the event (#1997)
- chore: more playground scenarios (#1985)

## 1.249.2 - 2025-06-03

- fix: hide feedback tab if survey is not recurring (#1988)
- chore: apply survey seen attributes on posthog capture (#1987)

## 1.249.1 - 2025-06-02

- Fix: Block Leikibot (#1984)

## 1.249.0 - 2025-05-30

- feat(flags): add `advanced_only_evaluate_survey_feature_flags` config to explicitly only evaluate survey flags on the frontend (#1986)

## 1.248.1 - 2025-05-28

- chore: sync with main repo (#1982)

## 1.248.0 - 2025-05-27

- feat: Add "defaults" to config (#1978)

## 1.247.0 - 2025-05-27

- fix: getSurveySeen and waitPeriod checks (#1979)

## 1.246.0 - 2025-05-22

- fix: Block newer google bots (#1974)

## 1.245.2 - 2025-05-22

- fix: linked flag any variant match (#1972)
- fix: modernise domain spelunking cookie setting code (#1973)
- chore: fix changelog (#1971)

## 1.245.1 - 2025-05-21

- chore: update some dependencies (#1969)
- fix: don't call receivedFeatureFlags if flags were disabled (#1964)
- fix: csp trailing slash (#1967)

## 1.245.0 - 2025-05-19

- feat: add new options for survey positions (#1965)

## 1.244.0 - 2025-05-19

- automation let us down here, and this is identical to 1.243.1

## 1.243.1 - 2025-05-19

- feat: suppression matching (#1937)
- fix: survey should reappear after url is matching again (#1962)
- feat: sample violations for easier testing (#1966)
- feat: allow answer question when clicking on the choice (#1958)

## 1.242.3 - 2025-05-19

- fix: add new relic to payload host denylist (#1952)
- chore: remove unused function from survey extensions (#1960)

## 1.242.2 - 2025-05-15

- fix: center positioning for surveys (#1959)
- chore: escape quotation marks on elements string handling (#1943)

## 1.242.1 - 2025-05-14

- fix: retrieve survey shadow should include posthog ref (#1955)

## 1.242.0 - 2025-05-13

- feat: use css files for survey styles (#1950)

## 1.241.1 - 2025-05-13

- fix: Remove initial person info from event payload (#1953)

## 1.241.0 - 2025-05-13

- feat: Add calculateEventProperties to public API (#1951)

## 1.240.6 - 2025-05-09

- feat: use css files for survey widget styles (#1948)

## 1.240.5 - 2025-05-08

- fix: padding on cancel button (#1946)
- chore: make rollup able to bundle CSS files (#1945)

## 1.240.4 - 2025-05-07

- chore: include response within the survey_quesiton property (#1942)

## 1.240.3 - 2025-05-07

- fix: false flag should not trigger linked flags (#1944)

## 1.240.2 - 2025-05-07

- fix: conflict between event based vs feedback button surveys (#1941)

## 1.240.1 - 2025-05-07

- fix: getRenderSurvey behavior (#1939)
- chore: make internal vars private (#1938)

## 1.240.0 - 2025-05-06

- feat: submit partial responses for survey answers (#1888)

## 1.239.1 - 2025-05-02

- fix: dont mangle some surveys properties (#1934)
- docs: use history_change option on SPA playgrounds (#1929)

## 1.239.0 - 2025-05-01

- feat: Avoid tracking pageview from prerenders (#1910)

## 1.238.0 - 2025-05-01

- feat: allow ANY or ALL matches for triggers (#1875)

## 1.237.1 - 2025-04-30

- chore: use getConstratingColor and add question-container (#1926)

## 1.237.0 - 2025-04-29

- fix: prevent survey events to affect multiple surveys (#1924)
- chore: Add homepage fields and copy LICENSE to posthog-js-react (#1928)
- feat: Allow mangling of storage function names (#1927)

## 1.236.8 - 2025-04-29

- feat: Reduce bundle size with property mangling (#1902)
- Make the flags demo runnable (#1919)
- chore(err): add nuxtjs example (#1917)

## 1.236.7 - 2025-04-25

- chore: survey 10kb win (#1921)

## 1.236.6 - 2025-04-24

- fix: refactor canRenderSurvey and move logic to SurveyManager (#1897)
- chore: do not organize imports using VS Code functionality (#1914)
- fix: make feedback tab survey display responsive (#1704)

## 1.236.5 - 2025-04-22

- fix: dont propagate events in surveys (#1911)

## 1.236.4 - 2025-04-21

- fix: prevent multiple stylesheet creation for feedback survey (#1912)

## 1.236.3 - 2025-04-21

- fix: timezone offset property not being sent (#1908)
- fix(err): add support for error causes (#1909)

## 1.236.2 - 2025-04-17

- fix response based branching for open choice questions (#1907)

## 1.236.1 - 2025-04-15

- chore: refactor survey loadIfEnabled (#1903)
- feat: Enforce that private members of classes start with an underscore (#1901)
- chore: Remove giant Info object (#1900)

## 1.236.0 - 2025-04-14

- chore: add canRenderSurveyAsync (#1891)
- feat: capture pinterest, snapchat, and quora click ids (#1872)
- chore: Generate bundle size viz (#1899)
- Make react router playground handle pageviews on route change (#1895)

## 1.235.6 - 2025-04-11

- feat: Improve how PostHogProvider works with SSR (#1893)
- feat(err): add react error boundary (#1884)

## 1.235.5 - 2025-04-10

- fix: survey feedback button not showing after url change (#1892)
- chore: better license attribution (#1883)

## 1.235.4 - 2025-04-10

- Fix web vitals running when capture_performance: false is set (#1890)

## 1.235.3 - 2025-04-10

- chore: rename survey extension utils and fix logging (#1889)

## 1.235.2 - 2025-04-10

- fix: new survey position for feedback button (#1885)

## 1.235.1 - 2025-04-10

- chore: even more replay debug signal (#1887)

## 1.235.0 - 2025-04-08

- fix: make survey widget with selector work with SPAs (#1877)
- chore: add react router vite react playground (#1876)

## 1.234.11 - 2025-04-08

- chore: allow all surveys to be repeated if schedule is always (#1866)

## 1.234.10 - 2025-04-07

- feat: Only capture vitals on http and https (#1873)
- feat: Playwright tests should run over http rather than file (#1874)

## 1.234.9 - 2025-04-04

- fix: survey feedback button anchoring to trigger (#1865)

## 1.234.8 - 2025-04-04

- chore: deduplicate all $set calls done from setPersonProperties (#1813)

## 1.234.7 - 2025-04-03

- fix: clean styles to prevent <br> tags (#1863)
- docs: Keep nuxt examples in sync with nuxt playground (#1867)
- Add autocapture playground page (#1864)

## 1.234.6 - 2025-04-01

## 1.234.5 - 2025-04-01

- fix: focus open input field on choice click (#1856)

## 1.234.4 - 2025-03-31

## 1.234.3 - 2025-03-31

## 1.234.2 - 2025-03-28

- fix: do not always wrap console.error (#1853)
- fix(err): message must always be a string (#1852)

## 1.234.1 - 2025-03-27

## 1.234.0 - 2025-03-27

- feat: always include stack trace parsing (#1850)

## 1.233.1 - 2025-03-26

- Send timezone to flags v2 (#1849)

## 1.233.0 - 2025-03-26

- feat: capture console errors (#1771)
- chore(flags): use the new `/flags` endpoint to manage flag evaluation for team 2 (#1841)

## 1.232.7 - 2025-03-25

- chore: add onSurveysLoaded listener (#1834)

## 1.232.6 - 2025-03-24

## 1.232.5 - 2025-03-24

- fix: Switch from regex to trim (#1847)

## 1.232.4 - 2025-03-21

- Revert "Revert "feat: Enjoy the benefits of `/decide?v=4` (#1838)" (#1842)" (#1843)

## 1.232.3 - 2025-03-21

- Revert "feat: Enjoy the benefits of `/decide?v=4` (#1838)" (#1842)

## 1.232.2 - 2025-03-20

- feat: Enjoy the benefits of `/decide?v=4` (#1838)

## 1.232.1 - 2025-03-20

- feat: Screen dimensions and UA as person property (#1840)

## 1.232.0 - 2025-03-20

- feat: do not start recorder active-active (#1839)
- chore(dev): add config to make debugging with vs code and the orta jest extension… (#1836)
- feat(flags): Support `/decide?v=4` and include version info flag called events (#1837)

## 1.231.3 - 2025-03-19

- fix: do not allow non string `$current_url` to be provided (#1835)

## 1.231.2 - 2025-03-18

- fix: check surveys timeout in the survey manager level (#1832)

## 1.231.1 - 2025-03-18

- chore: update posthog rrweb (#1831)
- chore: add a regression example for toolbar z-index highlighting (#1827)

## 1.231.0 - 2025-03-14

- feat: no recording blob urls (#1768)
- chore: update changelog (#1824)
- feat: remote image masking (#1826)

## 1.230.4 - 2025-03-13

- chore: allow push to main in GH actions (#1825)
- chore: add new question index to id map (#1812)

## 1.230.3 - 2025-03-13

- fix: session recording class type and typo (#1815)
- chore: update web vitals (#1820)
- fix: default mask all inputs must be defined (#1819)
- fix(err): fix hosts, linting and documentation (#1818)

## 1.230.2 - 2025-03-11

- fix: simple loader race protection (#1804)
- chore(err): add next template (typescript + app router) (#1807)

## 1.230.1 - 2025-03-10

- fix: handle non Error objects being passed to captureException (#1806)

## 1.230.0 - 2025-03-10

- feat: allow early access feature stage specification (#1805)

## 1.229.5 - 2025-03-07

- fix: Stop logging error when client is uninitialized (#1803)

## 1.229.4 - 2025-03-07

- chore: use quesiton ID instead of question index if it's available (#1764)

## 1.229.3 - 2025-03-07

- Reverse error message (#1795)

## 1.229.2 - 2025-03-06

- fix: make survey preview behave like the actual (#1799)
- chore(err): add playground for error tracking (#1796)
- chore: sourcemap sample app (#1782)
- chore: refactor playwright helper for clarity (#1774)

## 1.229.1 - 2025-03-06

- fix: stop setting platform on sentry event (#1790)

## 1.229.0 - 2025-03-06

- feat: add chunk_id to stack frames (#1794)

## 1.228.2 - 2025-03-06

- chore(flags): support handling optional `requestId`s in `/decide` responses (#1793)

## 1.228.1 - 2025-03-05

- fix(flags): do not reset $anon_distinct_id after first decide call if advanced_disable_feature_flags_on_first_load is true (#1786)

## 1.228.0 - 2025-03-05

- fix: Fix site app loading (#1792)

## 1.227.2 - 2025-03-05

- feat: Block yet another semrush crawler/bot (#1791)

## 1.227.1 - 2025-03-05

- feat: posthog feature component should report variant too (#1783)
- chore: image blocking example (#1789)
- chore(): set all github actions to run on ubuntu-22.04 (#1784)
- fix(flags): Make sure flags are loaded when identify is called (#1785)
- fix(flags): pass along $initial\_ person properties in decide requests automatically (#1781)
- chore: Mark peerDependencies as optional (#1777)
- feat: Make `getQueryParams` more resilient (#1778)

## 1.227.0 - 2025-03-04

- feat: support loading masking remotely (#1734)

## 1.226.0 - 2025-03-04

- feat(web-analytics): Add $session property with an object of props on session_id lifecycle (#1780)
- feat: Block more bots (#1776)

## 1.225.1 - 2025-03-03

- fix: add semrush audit bot (#1775)
- chore: add posthog built rrweb (#1770)

## 1.225.0 - 2025-03-02

- feat: better positioning for survey selectors (#1772)

## 1.224.1 - 2025-02-27

- fix: dont require double click to show feedback surveys (#1767)

## 1.224.0 - 2025-02-27

- feat(feature-flags): support quota limiting for feature flags (#1758)

## 1.223.5 - 2025-02-26

- fix: nonce missing style script (#1765)

## 1.223.4 - 2025-02-25

- fix: support inherit font family on surveys (#1763)

## 1.223.3 - 2025-02-23

- fix: dont show survey on url change, only hide it (#1761)

## 1.223.2 - 2025-02-22

- fix: improve survey bundle size (#1759)

## 1.223.1 - 2025-02-22

## 1.223.0 - 2025-02-22

- feat: Add new `prepare_external_dependency_stylesheet` config option (#1757)

## 1.222.0 - 2025-02-20

- chore: Make `@rrweb/types` a peer dependency (#1749)

## 1.221.1 - 2025-02-20

- fix: check url matching on URL change for widget-type surveys (#1755)

## 1.221.0 - 2025-02-20

- feat: allow widget surveys to be repeated indefinitely (#1752)

## 1.220.0 - 2025-02-20

- feat(llm-observability): metric and feedback methods (#1709)

## 1.219.6 - 2025-02-19

- fix: Remove circular dependency (#1750)

## 1.219.5 - 2025-02-19

- Block Chrome-Lighthouse UA (used by ahrefs) (#1751)

## 1.219.4 - 2025-02-18

- fix: Fix types for `onFeatureFlags` callback (#1748)

## 1.219.3 - 2025-02-18

- fix(devex): update frontend/package.json when pushing to main repo (#1746)

## 1.219.2 - 2025-02-18

- fix: last seen survey date logic (#1745)

## 1.219.1 - 2025-02-17

- feat: add more debug signals (#1743)

## 1.219.0 - 2025-02-17

- feat(web-analytics): Handle set_once latest props in a cross-subdomain way (#1739)

## 1.218.2 - 2025-02-15

- chore: limit height of multiple choice question (#1740)

## 1.218.1 - 2025-02-14

## 1.218.0 - 2025-02-14

- feat(flags): Add remote config feature flag method that bypasses cached values (#1729)

## 1.217.7 - 2025-02-14

- fix: skip device type check if no devices set (#1737)

## 1.217.6 - 2025-02-14

- fix: heatmaps unload listener (#1736)

## 1.217.5 - 2025-02-14

- fix: check url match before trigger showSurvey (#1732)

## 1.217.4 - 2025-02-13

- fix: unexpected undefined should be expected (#1731)

## 1.217.3 - 2025-02-13

- Revert "fix: check url match twice because of potential race condition (#1722)" (#1733)

## 1.217.2 - 2025-02-12

- fix(no-code experiments): refactor (6) (#1728)

## 1.217.1 - 2025-02-11

- fix: canvas quality value (#1727)

## 1.217.0 - 2025-02-11

- feat: override exception capture clientside (#1726)

## 1.216.1 - 2025-02-10

- fix: capture when argument is not a string (#1724)
- feat: Add e-commerce test page to nextjs playground (#1725)

## 1.216.0 - 2025-02-10

- chore: Drop CI support for Node 16 (EOL), use pnpm 9 internally (#1723)

## 1.215.7 - 2025-02-10

## 1.215.6 - 2025-02-06

- fix(flags): set default state values in feature flag hooks (#1719)
- chore: correct type comment (#1721)

## 1.215.5 - 2025-02-06

- chore: small readability refactor to getActiveMatchingSurveys (#1718)

## 1.215.4 - 2025-02-05

- fix(flags): store setOnce properties in locally persisted feature flag props (#1716)
- chore: better reset comment (#1717)

## 1.215.3 - 2025-02-04

- refactor: Simplify `Posthog.init()` signature (#1712)

## 1.215.2 - 2025-02-03

- fix: checking status is too blunt for paused status (#1713)

## 1.215.1 - 2025-01-31

- chore: export some types (#1710)

## 1.215.0 - 2025-01-31

- feat: allow configuring request queue interval (#1708)

## 1.214.1 - 2025-01-31

- fix: never send when not sampled (#1706)
- chore: silence survey logging (#1707)

## 1.214.0 - 2025-01-30

- chore: add device types check (#1698)

## 1.213.0 - 2025-01-30

- feat: deprecate `featureFlags.override` in favor of `featureFlags.overrideFeatureFlags`, a new function that supports overriding flags and flag payloads (#1697)
- chore: snapshot types that we want to not accidentally deprecate or remove (#1705)

## 1.212.1 - 2025-01-29

- docs: Add missing types (#1703)

## 1.212.0 - 2025-01-29

- feat: sampling that can be shared (#1700)

## 1.211.4 - 2025-01-29

- feat: Add new rule to guarantee events are tracked as passive (#1689)

## 1.211.3 - 2025-01-29

- docs: Add documentation to all of our init options (#1681)
- chore: add survey files codeowners (#1696)

## 1.211.2 - 2025-01-28

- fix: survey URL targeting should re-evaluate after the URL changes (#1695)

## 1.211.1 - 2025-01-28

- revert: "chore: upgrade rrweb to alpha.18" (#1659)
- chore: codeowners for recorder file (#1693)

## 1.211.0 - 2025-01-27

- refactor: Remove/deprecate/rename old options (#1694)

## 1.210.2 - 2025-01-24

- fix: rrweb patch fix take 2 (#1691)

## 1.210.1 - 2025-01-24

- fix: bad rrweb patch (#1690)

## 1.210.0 - 2025-01-24

## 1.209.4 - 2025-01-24

- feat: Annotate our `scroll` events as `passive` (#1684)
- fix: Exclude more domains from cross subdomain tracking by default (#1680)

## 1.209.3 - 2025-01-24

- fix: Fix hitting call stack limit when deep comparing circular objects (#1688)

## 1.209.2 - 2025-01-24

- fix: Implement `isDeepEqual` manually (#1686)

## 1.209.1 - 2025-01-24

- fix: angular detection can be less blunt (#1687)
- fix: Fix CI check name (#1673)

## 1.209.0 - 2025-01-23

- feat: Enhance PostHogProvider to prevent double initialization on `React.StrictMode` (#1676)

## 1.208.1 - 2025-01-23

- fix: correctly cache split css (#1682)

## 1.208.0 - 2025-01-23

## 1.207.9 - 2025-01-23

- fix: silence noisy surveys logging (#1679)

## 1.207.8 - 2025-01-22

- fix: missing href on link (#1678)

## 1.207.7 - 2025-01-22

- fix: cache nested loops (#1677)

## 1.207.6 - 2025-01-22

- chore: better logging for surveys loaders (#1663)

## 1.207.5 - 2025-01-22

- fix: set last reset date as event super property (#1671)

## 1.207.4 - 2025-01-22

- fix: sentry integration fields (#1669)

## 1.207.3 - 2025-01-22

- fix: patch for css parsing performance (#1670)

## 1.207.2 - 2025-01-21

- fix(): prevent person processing if /decide fails to fetch remote config (#1658)

## 1.207.1 - 2025-01-21

- fix: expose getNextSurveyStep to use in posthog (#1661)
- chore: upgrade rrweb to alpha.18 (#1592)

## 1.207.0 - 2025-01-16

- chore: deduplicate subsequent identify calls (#1649)
- feat: Add the ability to mask some PII-containing URL parameters (#1654)
- chore: Remove '$web_experiment_applied' event (#1653)
- chore: Update pull_request_template.md (#1651)

## 1.206.1 - 2025-01-14

- fix: survey previews should never have the submit button disabled (#1650)

## 1.206.0 - 2025-01-14

- feat: add irclid and \_kx as campaign parameters (#1648)
- chore: Rename cklsh constants to cookieless (#1647)

## 1.205.1 - 2025-01-13

- feat: custom webfont selection on surveys (#1643)
- chore(ci): final move from cypress to playwright (#1646)
- feat: add Better Uptime string to blocked UA (#1644)

## 1.205.0 - 2025-01-07

- feat: Add a onPreviewSubmit callback to preview surveys (#1641)

## 1.204.0 - 2025-01-06

- feat: Deprecate `sanitize_properties` (#1632)
- test(ci): move more of the browser tests to playwright (#1638)

## 1.203.3 - 2025-01-03

- feat: Add pageview and prev pageview tracking (#1634)
- fix: safer toolbar function (#1637)
- chore: playwright tests (#1631)

## 1.203.2 - 2024-12-27

- Adds option for nonce support (#1630)

## 1.203.1 - 2024-12-20

- fix: recordings that are paused for their whole duration (#1626)
- feat: custom event with remote config (#1628)

## 1.203.0 - 2024-12-20

- chore: add feature name prop to event (#1624)
- fix: payload host deny list (#1627)
- chore: build against lowest and current version of TS (#1625)
- chore: fix changelog after automation error (#1623)

## 1.202.5 - 2024-12-19

- chore: lint a file that needs it (#1622)

## 1.202.4 - 2024-12-19

- fix: do not even send heatmap with no x or y (#1621)
- fix: type error accessing null object and added test case (#1620)
- chore: Small tweaks to make fetch default (#1610)
- chore: remove circular dependencies (#1618)

## 1.202.3 - 2024-12-18

> NB an error meant this version was never published to NPM

## 1.202.2 - 2024-12-17

- fix: specify transport in fewer places to let config control (#1614)
- chore: update rollup, bc y not (#1615)

## 1.202.1 - 2024-12-17

- feat: Use token scoped remote config (#1611)

## 1.202.0 - 2024-12-17

- fix: Change default transport to fetch (#1612)

## 1.201.1 - 2024-12-17

- fix: Load RemoteConfig by default but don't use it (#1607)
- chore: add websockets example to nextjs playground (#1605)

## 1.201.0 - 2024-12-16

- fix: rotate session id proactively (#1512)

## 1.200.2 - 2024-12-16

- feat(web-analytics): Add flag to send server hash instead of distinct id (#1490)

## 1.200.1 - 2024-12-13

- fix: Make legacy property sturdier (#1602)

## 1.200.0 - 2024-12-13

- fix: Refactor decide loading (#1596)

## 1.199.0 - 2024-12-12

- chore(flags): Add new debugging property `$used_bootstrap_value`, `$feature_flag_bootstrapped_response` and `$feature_flag_bootstrapped_payload` to `$feature_flag_called` event (#1567)

## 1.198.0 - 2024-12-12

- feat: Allow users to customize `fetch` behavior (#1599)

## 1.197.0 - 2024-12-12

- feat: send snapshot library (#1587)

## 1.196.1 - 2024-12-12

- feat: Don't create person profile when setting properties for flags (#1586)

## 1.196.0 - 2024-12-12

- feat: include attribution with all web vitals (#1594)

## 1.195.0 - 2024-12-10

- Reduce type (#1590)

## 1.194.6 - 2024-12-09

- feat: Load site functions via RemoteConfig (#1580)

## 1.194.5 - 2024-12-06

- feat: Added better sub logging utils (#1581)

## 1.194.4 - 2024-12-05

- feat: RemoteConfig loader (#1577)

## 1.194.3 - 2024-12-03

- fix: parse Chrome instead of Android as browser (#1575)

## 1.194.2 - 2024-12-02

- fix: use previous site-app variables (#1574)

## 1.194.1 - 2024-11-30

- fix: Don't crash on bigints (#1573)
- feat: Add customization to print events drop them (#1572)

## 1.194.0 - 2024-11-29

- feat: add $recording_status property (#1571)

## 1.193.1 - 2024-11-28

- fix: zone detection (#1570)

## 1.193.0 - 2024-11-28

- feat: allow decide to provide script name for recorder (#1509)

## 1.192.1 - 2024-11-28

## 1.192.0 - 2024-11-28

- feat: Start tracking timezone offset and language prefix (#1568)

## 1.191.0 - 2024-11-28

- feat: different default and max idle period (#1558)

## 1.190.2 - 2024-11-27

- fix: patch to angular detection in rrweb (#1566)
- chore: fix changelog (#1564)

## 1.190.1 - 2024-11-27

- fix: catch errors detecting dialog state when recording (#1562)

## 1.190.0 - 2024-11-27

- feat: Add initial person info to cookie when using localPlusCookieStore (#1559)

## 1.189.1 - 2024-11-27

- feat: hog site functions (#1546)

## 1.189.0 - 2024-11-26

- feat: Add better npm import, and script entrypoint for customizations (#1550)

## 1.188.1 - 2024-11-26

- fix: safari support requires we don't use (#1553)
- fix: endless capturing /s/ (#1551)
- chore: make platform more specific (#1549)

## 1.188.0 - 2024-11-22

- fix(surveys): Process feature_flag_keys on Survey object (#1548)
- chore: sentry integration fixes (#1544)

## 1.187.2 - 2024-11-20

- fix: improve ES6 bundling (#1542)

## 1.187.1 - 2024-11-19

- fix: patch angular wrap detection in rrweb (#1543)

## 1.187.0 - 2024-11-19

- feat: allow config of before_send function to edit or reject events (#1515)
- chore: timeout test cafe jobs (#1540)
- chore: specify an explicit browserslist version (#1539)

## 1.186.4 - 2024-11-19

- chore: always transform exponentiation (#1537)
- chore: very small change to IE11 bundling (#1536)

## 1.186.3 - 2024-11-18

- fix: refactor native mutation observer implementation (#1535)
- chore: update dependency versions (#1534)
- chore: remove custom exceptions endpoint (#1513)

## 1.186.2 - 2024-11-18

- fix: angular change detection mutation observer (#1531)
- chore: Added CSP headers to next app for testing what we document (#1528)

## 1.186.1 - 2024-11-15

- fix: XHR req method capture (#1527)

## 1.186.0 - 2024-11-15

- feat: allow triggering sessions when events occur (#1523)

## 1.185.0 - 2024-11-15

- feat: Add customization to add all person profile properties as setPersonPropertiesForFlags (#1517)

## 1.184.2 - 2024-11-13

- fix(flags): support multiple children prop in PostHogFeature (#1516)
- fix: Don't use session storage in memory mode (#1521)

## 1.184.1 - 2024-11-12

- chore: add type to Sentry exception (#1520)

## 1.184.0 - 2024-11-12

- feat: deadclicks in heatmaps (#1510)

## 1.183.0 - 2024-11-12

- feat: add recording url blocklist (#1500)

## 1.182.0 - 2024-11-11

- chore: upgrade rrweb to alpha.17 (#1489)

## 1.181.0 - 2024-11-05

- chore: add stack type (#1511)

## 1.180.1 - 2024-11-01

- fix: dead click fixes from watching in prod (#1508)

## 1.180.0 - 2024-10-31

- feat: allow mutation rate limiter configuration (#1506)

## 1.179.0 - 2024-10-31

- feat: dead click detection (#1463)
- chore: refactor towards dead clicks autocapture (#1505)

## 1.178.0 - 2024-10-30

- feat: Add timezone to events (#1504)
- chore: update README to include missing steps for running local nextjs playground (#1455)

## 1.177.0 - 2024-10-28

- feat: Only set missing campaign params to null if there is at least one non-null (#1493)

## 1.176.1 - 2024-10-28

- fix: reduce keep alive threshold (#1501)
- fix: empty query param when calling external dependency toolbar.js (#1456)
- fix: careful now (#1497)

## 1.176.0 - 2024-10-24

- fix(surveys): Reset Survey storage after posthog.reset is called (#1494)

## 1.175.1 - 2024-10-24

- chore: set platform on stack frame (#1495)

## 1.175.0 - 2024-10-24

- fix: allow canvas local config (#1496)

## 1.174.4 - 2024-10-24

- fix: expose the last activity timestamp in session id check result (#1491)

## 1.174.3 - 2024-10-22

- chore: upgrade rrweb to alpha.16 (#1276)
- chore: test that autocapture allowlists are unioned (#1476)

## 1.174.2 - 2024-10-18

- fix: no need to swallow import errors (#1486)

## 1.174.1 - 2024-10-18

- fix: do not capture entire elements in web vitals (#1483)

## 1.174.0 - 2024-10-17

- Make entire cancel button area clickable (#1473)
- feat: swap the default to identified_only (#1468)

## 1.173.0 - 2024-10-17

- feat(web-analytics): Store nulls for unset campaign params (#1482)

## 1.172.1 - 2024-10-17

- chore: add crossOrigin='anonymous' to snippet script (#1481)

## 1.172.0 - 2024-10-17

- chore: build an es5 bundle and move main to es6 (#1480)

## 1.171.0 - 2024-10-17

- feat: start session recording on url trigger (#1451)
- chore: babel targets in rollup config (#1479)

## 1.170.1 - 2024-10-16

- feat: add stack to stacktraceless "exceptions" (#1472)

## 1.170.0 - 2024-10-16

- fix: web vitals delayed capture (#1474)

## 1.169.1 - 2024-10-16

- chore: skip if Array.from is missing (#1475)

## 1.169.0 - 2024-10-15

- feat: report reason for recording start (#1452)
- chore: improve exception autocapture (#1466)

## 1.168.0 - 2024-10-15

- fix(errors): Better define schema, align with python (#1460)
- chore: refactor some cypress setup (#1467)

## 1.167.1 - 2024-10-14

- fix: sanitize set_once properties (#1462)

## 1.167.0 - 2024-10-08

- feat(web experiments): Emit web_experiment_applied event and do not render experiments for bots (#1443)

## 1.166.2 - 2024-10-07

- fix: Remove posthog error capture from replay (#1454)

## 1.166.1 - 2024-10-01

- fix: skip addition of `src` attribute for HLS videos (#1446)

## 1.166.0 - 2024-10-01

- feat: default replay partial compression on (#1445)
- chore: Add test for reset() and anonymous users (#1444)

## 1.165.1 - 2024-09-30

- fix: no custom events when idle (#1438)
- chore: downgrade jest types (#1442)

## 1.165.0 - 2024-09-25

- feat: compress replay data (#1436)

## 1.164.3 - 2024-09-24

- fix: it's just rude to assign to date now (#1435)

## 1.164.2 - 2024-09-24

- fix: get computed style error (#1433)
- fix: changelog (#1431)

## 1.164.1 - 2024-09-23

- chore: build when publishing (#1430)
- feat: Bundle option without any external scripts (#1413)

## 1.163.1 - 2024-09-23

- fix: session idle timestamp correction (#1428)

## 1.163.0 - 2024-09-20

- feat: type safe posthog extensions (#1407)

## 1.162.0 - 2024-09-19

- fix(surveys): 7-point likert scale didn't work with branching logic (#1424)

## 1.161.6 - 2024-09-18

- fix: when capturing without performance entry we can capture manual initiator type (#1422)
- chore: auto publish alpha versions (#1414)
- chore: move test file into **tests** (#1418)

## 1.161.5 - 2024-09-16

- fix: teardown and restart recording on session id change (#1411)

## 1.161.4 - 2024-09-16

- fix: no keep alive for large payloads (#1416)
- feat(experiments): Apply no-code experiments to the webpage. (#1409)

## 1.161.3 - 2024-09-10

- fix: manage capture pageview hook lifecycle (#1408)

## 1.161.2 - 2024-09-09

- fix: some clients need web vitals directly on window (#1406)

## 1.161.1 - 2024-09-09

- fix: warn on unavailable lazy load not throw (#1400)

## 1.161.0 - 2024-09-09

- feat: web vitals 3000 (#1401)

## 1.160.3 - 2024-09-03

- fix: captured network requests must always have name property (#1398)

## 1.160.2 - 2024-09-03

- fix: report requests even without timing (#1386)

## 1.160.1 - 2024-09-02

- fix: flushing the buffer for debug signal while idle extends session activity (#1396)
- fix: network capture tests should fail if we exhaust the body (#1395)
- chore: clarify that tests are exercising our fetch wrapper (#1393)

## 1.160.0 - 2024-08-29

- feat: manually capture errors (#1374)

## 1.159.0 - 2024-08-29

- fix: capture a $pageview event on opting in (#1372)

## 1.158.3 - 2024-08-28

- fix(errors): Build endpoint for sentry integration & exception observer correctly (#1390)

## 1.158.2 - 2024-08-27

- chore: skip rate limiting of snapshot events (#1383)
- chore: Remove retries for testcafe tests but increase timeout. Wait for lag in parallel (#1380)
- feat: default api host to new ingestion domain (#1370)

## 1.158.1 - 2024-08-26

- fix: event listeners should obey start and stop (#1379)

## 1.158.0 - 2024-08-26

- fix(segment): Posthog can identify after segment identifies a user, not just during bootstrap. (#1373)
- fix: Revert cypress back to 13.6.3 (#1384)

## 1.157.2 - 2024-08-20

- feat: Use NavigatorUAData and navigator.webdriver to improve bot detection (#1359)
- chore: Move chrome tests off of browserstack, add firefox (#1369)

## 1.157.1 - 2024-08-20

- Revert "fix: pass original fetch args along (#1351)" (#1371)

## 1.157.0 - 2024-08-19

- feat: allow overriding linked flag (#1368)

## 1.156.1 - 2024-08-19

- fix: Move @types/web to dev dependencies (#1367)

## 1.156.0 - 2024-08-19

- fix: pass original fetch args along (#1351)

## 1.155.6 - 2024-08-19

- fix: only add to window when it exists (#1362)

## 1.155.5 - 2024-08-19

- fix: endpoint for is already called inside loadscript (#1365)
- chore: Run ts on test files (#1358)

## 1.155.4 - 2024-08-14

- fix: Expose version (#1357)

## 1.155.3 - 2024-08-14

- feat: default to gzip compression instead of base64 (#1355)

## 1.155.2 - 2024-08-13

- remove x-posthog-token header (#1354)

## 1.155.1 - 2024-08-13

- feat: Added token to headers (#1347)

## 1.155.0 - 2024-08-09

- feat: Add prev pageview duration (#1348)

## 1.154.6 - 2024-08-09

- chore: make password capture more explicit (#1345)

## 1.154.5 - 2024-08-06

- fix(surveys): style the link button with black text (#1343)

## 1.154.4 - 2024-08-05

- feat: Remove storage logging and add reset logging (#1342)

## 1.154.3 - 2024-08-05

- feat(surveys): added a customizable submit button text color (#1339)
- fix(surveys): textarea border box was being set in the preview but not in the surveys rendered on user websites (#1340)

## 1.154.2 - 2024-08-02

- Add instructions for cross subdomain development (#1336)

## 1.154.1 - 2024-08-01

- fix(surveys): fix textarea, and make it easier to query the survey question description in the DOM (#1337)
- feat: Add debug logging for the initial props that posthog was started with (#1335)

## 1.154.0 - 2024-07-31

- feat(flags): give users the ability to suppress override warning logs, if desired (#1328)

## 1.153.0 - 2024-07-31

- chore: mask password by default (#1334)

## 1.152.1 - 2024-07-31

- feat: Add debug messages around storage (#1333)

## 1.152.0 - 2024-07-31

- feat: add renderSurvey option (#1324)

## 1.151.2 - 2024-07-31

- feat: Add debug logic for set_config (#1330)

## 1.151.1 - 2024-07-31

- fix(surveys): Center the X (#1329)

## 1.151.0 - 2024-07-30

- Accept eventPayload in onEvent handler (#1331)

## 1.150.1 - 2024-07-29

- fix: Array.from override (#1322)
- chore: finally remove given (#1321)

## 1.150.0 - 2024-07-25

- feat(surveys): add support for a 7 point likert scale (#1319)

## 1.149.2 - 2024-07-24

- feat: add debug startup log message (#1318)

## 1.149.1 - 2024-07-24

- fix: web vitals ignored error on init (#1317)
- chore: fix the rollup bundle visualiser output (#1315)

## 1.149.0 - 2024-07-23

- fix: Fix the referrer changing mid-session (#1314)

## 1.148.2 - 2024-07-22

- fix: don't load preact until you have to (#1311)
- chore: one less posthog mock and two fewer given tests (#1312)

## 1.148.1 - 2024-07-22

- fix: ignore ridonculously large web vitals values (#1309)
- chore: move test file (#1306)

## 1.148.0 - 2024-07-16

- feat: split large replay buffers before sending (#1305)

## 1.147.0 - 2024-07-12

- feat: add url_ignorelist for autocapture config (#1302)

## 1.146.3 - 2024-07-12

- feat: add new google crawler (#1300)
- chore: add a test (#1299)

## 1.146.2 - 2024-07-11

- fix: warn when on xhr error used (#1298)

## 1.146.1 - 2024-07-11

- fix: add web vitals to array full (#1297)
- feat(Surveys): Activate surveys based on actions (#1295)
- feat(Surveys): Add ActionMatcher to match CaptureResult to any known actions (#1294)

## 1.146.0 - 2024-07-10

- feat: move heatmaps to their own event (#1287)

## 1.145.1 - 2024-07-10

- fix: capture network recording type (#1296)
- feat(surveys): added close button text customization feature (#1288)
- chore: fix error tests listener registration (#1291)

## 1.145.0 - 2024-07-08

- feat: send errors one way (#1289)
- chore: missing changelog entry (#1290)

## 1.144.2 - 2024-07-05

- fix(surveys): polishing the popup survey UI (#1279)
- add rdt_cid as a campaign parameter (#1286)

## 1.144.1 - 2024-07-04

- fix: only take scheduled full snapshots (#1285)

## 1.144.0 - 2024-07-03

- feat: add payload host denylist (#1282)

## 1.143.0 - 2024-07-02

- feat(survey): Allow events to repeatedly activate surveys (#1273)

## 1.142.1 - 2024-06-28

- feat: warn when distinct id invalid for replay (#1277)

## 1.142.0 - 2024-06-28

- feat: Improved various bundles (#1265)

## 1.141.4 - 2024-06-26

- fix: use includes over contains (#1275)
- chore: add browsertack build name (#1271)

## 1.141.3 - 2024-06-25

- fix: dropped styles on route transition (#1272)

## 1.141.2 - 2024-06-25

- feat: add lazily loaded web vitals collection (#1203)

## 1.141.1 - 2024-06-25

- fix: exception autocapture (#1261)

## 1.141.0 - 2024-06-24

- feat(surveys): add configurable delay to popup surveys (#1228)
- chore: update pnpm action setup worfklow version (#1268)

## 1.140.1 - 2024-06-21

- fix: unwind recent changes things seem less stable (#1267)

## 1.140.0 - 2024-06-21

- feat(web-analytics): Add property for autocapture link click (#1259)
- chore: add sanitization test to heatmaps tests (#1256)

## 1.139.8 - 2024-06-21

- fix(surveys branching): rename confirmation_message -> end (#1257)

## 1.139.7 - 2024-06-21

- fix(surveys): fix missing confirmation message state (#1263)

## 1.139.6 - 2024-06-20

- fix(surveys): handle missing getNextSurveyStep (#1260)

## 1.139.5 - 2024-06-20

- fix: Allow no capture of $opt_in event (#1250)

## 1.139.4 - 2024-06-20

- fix: no scheduled snapshots while idle (#1254)
- feat: Allow bootstrapping session id (#1251)

## 1.139.3 - 2024-06-18

- feat(surveys): add branching logic (#1247)

## 1.139.2 - 2024-06-14

- fix: only wrap once when patching (#1245)
- chore: add clarifying test (#1246)
- feat: allow not operators in survey url targeting (#1219)

## 1.139.1 - 2024-06-12

- fix: less strict idle event dropping (#1241)
- chore: add inlineStylesheet prop (#1237)

## 1.139.0 - 2024-06-10

- feat(personless-events): set_once more initial properties accurately when a person is created (#1236)

## 1.138.3 - 2024-06-10

- fix: circular refs shouldn't explode capture (#1230)

## 1.138.2 - 2024-06-10

- feat: Updated v8 sentry integration (#1224)

## 1.138.1 - 2024-06-07

- feat: wrap fetch and add tracing headers (#1186)
- feat(survey): Support identifying iterations of a repeatable survey (#1200)

## 1.138.0 - 2024-06-06

- feat(surveys): `posthog-js` changes to support valid HTML question rendering (#1206)

## 1.137.0 - 2024-06-05

- chore: Bump version to 1.137.0 (#1227)
- feat(survey): Event based survey: Show survey popup based on custom event (#1213)

## 1.137.0 - 2024-06-05

- feat(survey): Event based survey: Show survey popup based on custom event #1213

## 1.136.8 - 2024-06-05

- fix: flush on idle (#1225)

## 1.136.7 - 2024-06-04

- fix: no full snapshot while idle (#1222)

## 1.136.6 - 2024-06-04

- chore(surveys): refactor survey popup (vol. 1) (#1214)

## 1.136.5 - 2024-06-03

- feat: add an explicit in-memory buffer (#1217)

## 1.136.4 - 2024-06-03

- fix: do not start recording buffer without id (#1215)

## 1.136.3 - 2024-06-03

- fix: heatmaps with segment integration (#1218)

## 1.136.2 - 2024-05-30

- fix: reference canvas not client (#1212)
- fix: Add auto approver for JS prs (#1209)

## 1.136.1 - 2024-05-29

- fix: fallback size when resizing (#1208)

## 1.136.0 - 2024-05-28

- feat: Refactor GDPR stuff into a more readable consent class (#1176)

## 1.135.2 - 2024-05-24

- feat: Add tests and fix regex for some obscure android browsers (#1196)

## 1.135.1 - 2024-05-24

- fix: Add missing retry info and test (#1202)
- fix: Pass `retriesPerformedSoFar` to keep count of retries (#1201)

## 1.135.0 - 2024-05-23

## 1.134.0 - 2024-05-23

- fix(survey): Retain question index if questions are shuffled (#1198)

## 1.133.0 - 2024-05-22

## 1.132.3 - 2024-05-22

- feat(survey): support internal_targeting_flag to show/hide survey popup (#1181)

## 1.132.2 - 2024-05-22

- feat(web-analytics): Add function for explictly enabling person processing (#1191)

## 1.132.1 - 2024-05-22

- fix: redact not hide headers (#1190)

## 1.132.0 - 2024-05-13

- chore: Bump release to 1.131.5 (#1183)
- fix issue with shuffling questions on every render (#1182)
- feat(survey): Randomize questions & choices in surveys (#1177)

## 1.131.5 - 2024-05-10

- feat: Support shuffling questions within a survey and options within a question (#1177)

## 1.131.4 - 2024-05-10

- fix: Update ui_host if using old app one (#1179)

## 1.131.3 - 2024-05-08

- feat: Added global state check for toolbar (#1173)
- fix: Retriable queued requests (#1171)

## 1.131.2 - 2024-05-08

- fix: remove transport method that doesn't work (#1167)

## 1.131.1 - 2024-05-08

- feat: Refactor request to make sure we only use available transports (#1166)
- fix: don't modify history state when loading toolbar (#1162)
- feat(surveys): add Vite devserver (#1164)

## 1.131.0 - 2024-05-07

- feat: Allow sending automatic pageleave with manual pageview (#1165)
- chore: Add script to deprecate old versions (#1161)

## 1.130.2 - 2024-05-02

- feat: Add rate limit info to events (#1160)
- chore: logging on start (#1158)

## 1.130.1 - 2024-04-29

- fix(surveys): use correct render method (#1157)

## 1.130.0 - 2024-04-26

- feat: Move heatmaps out of preview (#1156)

## 1.129.0 - 2024-04-24

- feat: Remotely enable heatmaps via decide (#1154)

## 1.128.5 - 2024-04-24

- chore: Fix duplicate string (#1153)
- chore: Update nextjs project to have more realistic controls (#1151)

## 1.128.4 - 2024-04-24

- fix: Don't track heatmaps of toolbar (#1152)

## 1.128.3 - 2024-04-22

- chore: upgrade rrweb to alpha-13 (#1149)

## 1.128.2 - 2024-04-22

- feat: add deepscan agent (#1145)

## 1.128.1 - 2024-04-18

- fix: Remove underscores from all functions (#1140)

## 1.128.0 - 2024-04-18

- feat: Heatmaps instrumentation (#1131)

## 1.127.0 - 2024-04-18

- feat: Added client side capture rate limiting (#1051)
- chore: add a test (#1144)

## 1.126.0 - 2024-04-17

- fix: Reacting to config changes (#1138)

## 1.125.0 - 2024-04-16

- Rename $process_person to $process_person_profile (#1143)

## 1.124.0 - 2024-04-16

- Update docs on versioning (#1142)
- feat: Update support for segment analytics (#1119)

## 1.123.1 - 2024-04-16

- feat: Update support for segment analytics (#1119)

## 1.123.0 - 2024-04-16

- feat: Rename process_person config option to person_profiles (#1141)
- feat: readonly event emitter (#1136)
- fix: Allow capturing `aria-label` attribute on sensitive elements (#1118)
- chore: Autocapture refactor (#1126)
- chore: patch to fix broken worker (#1134)
- fix: continue recording after reset (#1135)
- fix: sampling typescript error (#1129)
- chore: no only tests are allowed (#1128)

## 1.122.0 - 2024-04-15

- feat: readonly event emitter (#1136)
- fix: Allow capturing `aria-label` attribute on sensitive elements (#1118)

## 1.121.4 - 2024-04-15

- chore: Autocapture refactor (#1126)

## 1.121.3 - 2024-04-15

- chore: patch to fix broken worker (#1134)

## 1.121.2 - 2024-04-12

- fix: continue recording after reset (#1135)

## 1.121.1 - 2024-04-10

- fix: sampling typescript error (#1129)
- chore: no only tests are allowed (#1128)

## 1.121.0 - 2024-04-10

- feat(surveys): Add disable config option (#1123)
- feat: Person Processing 3: Handle $initial props across sessions, send $initial props with all person processing events, remove \_\_preview (#1127)

## 1.120.5 - 2024-04-10

- fix: missing parentNode protection (#1125)

## 1.120.4 - 2024-04-09

- feat: Person processing 2 - handle group and setPersonProperties (#1124)

## 1.120.3 - 2024-04-09

- fix: typing of maskTextFn (#1122)

## 1.120.2 - 2024-04-08

- Fix to include project in urls (#1098)

## 1.120.1 - 2024-04-08

- chore: Add workflow to update the posthog.com repo with new posthog-js versions (#1120)

## 1.120.0 - 2024-04-08

- feat: Add person processing mode preview (#1109)

## 1.119.2 - 2024-04-08

- chore: upgrade rrweb to 2.0.0-alpha.12 (#1115)

## 1.119.1 - 2024-04-08

- fix: Default api host to us.i.posthog.com (#1087)

## 1.119.0 - 2024-04-08

- feat: allow override sampling (#1105)

## 1.118.1 - 2024-04-05

- Fix nextjs playground version of posthog-js (#1117)
- Fix $is_identified (#1116)

## 1.118.0 - 2024-04-04

- feat: capture more sentry levels (#1104)

## 1.117.2 - 2024-04-03

- feat: measure identified events (#1114)

## 1.117.1 - 2024-04-03

- fix: block bytespider bot (#1113)
- fix: remove alpha comments from groups (#1111)

## 1.117.0 - 2024-04-03

- feat: Add \_\_posthog_debug query string (#1108)

## 1.116.7 - 2024-04-03

- fix(decide): Respect disable_compression for flags (#1102)

## 1.116.6 - 2024-03-25

- fix: Reloading toolbar after closing (#1095)

## 1.116.5 - 2024-03-23

- fix: posthog init should reject invalid config in TypeScript (#1097)

## 1.116.4 - 2024-03-22

- fix: custom event on sampling decision (#1094)
- feat: signal we have wrapped fetch (#1083)

## 1.116.3 - 2024-03-20

- fix: Return this if already loaded (#1092)

## 1.116.2 - 2024-03-18

- feat: add property so we can check if a client is using a proxy (#1084)

## 1.116.1 - 2024-03-18

- chore: Remove v2 rrweb checks (#1080)

## 1.116.0 - 2024-03-15

- fix: allow payload scrubbing override (#1085)

## 1.115.2 - 2024-03-15

- fix: canvas recording patches (#1082)
- chore: remove cypress log noise (#1086)

## 1.115.1 - 2024-03-15

- chore: remove v1 rrweb loading (#1078)

## 1.115.0 - 2024-03-14

- feat: track recording URL without pageview capture (#1076)
- fix: return typing of global functions (#1081)

## 1.114.2 - 2024-03-12

- fix: patch rrweb zero width canvas bug (#1075)

## 1.114.1 - 2024-03-12

- fix: Disabled compression and application json (#1074)

## 1.114.0 - 2024-03-12

- feat: report browser visibility state in replay (#1071)
- fix: typo in deny list (#1073)
- fix(posthog-js): manually bump patch (#1072)

## 1.113.4 - 2024-03-12

- fix(posthog-js): manually bump patch (#1072)
- fix: no empty requests (#1063)

## 1.113.2 - 2024-03-11

- fix: Send beacon request encoding (#1068)

## 1.113.1 - 2024-03-11

- fix: clarify redaction message (#1069)

## 1.113.0 - 2024-03-11

- feat: scrub payloads with forbidden words (#1059)
- chore: remove unused path (#1066)

## 1.112.1 - 2024-03-11

- Fix compression (#1062)

## 1.112.0 - 2024-03-08

- feat: Refactor request logic (#1055)
- feat: Add more ad ids (#1057)

## 1.111.3 - 2024-03-07

- chore: Rework SDK initialisation (#1023)

## 1.111.2 - 2024-03-06

- feat: Ensure ingestion domains follow the same logic. (#1049)

## 1.111.1 - 2024-03-06

- chore: Removed jsc callbacks (#1052)
- fix: posthog path to ignore (#1054)
- chore: add some privacy examples to the copy autocapture demo (#1053)

## 1.111.0 - 2024-03-05

- feat: copy and cut autocapture (#1047)
- fix: timezones are fun (#1050)

## 1.110.0 - 2024-02-28

- feat: allow linked flag variants to control recording (#1040)
- feat: reecord when timestamp is overriden by caller (#1033)
- chore: deprecate property_blacklist in favor of property_denylist (#1044)

## 1.109.0 - 2024-02-27

- feat: improve user agent detection (#1038)

## 1.108.4 - 2024-02-26

- Fix (#1042)

## 1.108.3 - 2024-02-23

- feat: Rollout new ingestion endpoints (#1032)

## 1.108.2 - 2024-02-22

- fix: Path for site apps (#1037)

## 1.108.1 - 2024-02-22

- fix(surveys): fix emoji scale (#1036)

## 1.108.0 - 2024-02-20

- fix(surveys): Render feedback preview (#1030)

## 1.107.0 - 2024-02-20

- feat: Allow changing persistence (#1025)

## 1.106.3 - 2024-02-19

- fix(surveys): survey popover improvements (#1029)

## 1.106.2 - 2024-02-19

- fix: protect against parent is not element (#1027)

## 1.106.1 - 2024-02-19

- fix: body capture handling (#1026)
- ci: Use GITHUB_OUTPUT envvar instead of set-output command (#958)

## 1.106.0 - 2024-02-15

- feat(surveys): preact surveys components (#964)

## 1.105.9 - 2024-02-14

- fix: empty token should be invalid (#1022)

## 1.105.8 - 2024-02-13

- feat: Simplify to just -api and -assets (#1018)
- fix: for want of a v the war was lost (#1017)

## 1.105.7 - 2024-02-11

- fix: allow custom events when idle (#1013)
- chore: no need to account for performance raw (#1012)
- chore: add test case for ahrefs bot (#1011)
- chore: really really write changelog to release (#1008)

## 1.105.6 - 2024-02-08

- feat: save posthog config at start of session recording (#1005)
- chore: test stopping and starting (#1009)

## 1.105.5 - 2024-02-08

- feat: account for persistence for canvas recording (#1006)
- chore: improve template to account for backwards compatibility (#1007)

## 1.105.4 - 2024-02-07

- feat: Add dynamic routing of ingestion endpoints (#986)
- Update CHANGELOG.md (#1004)

## 1.105.3 - 2024-02-07

identical to 1.105.1 - bug in CI scripts

## 1.105.2 - 2024-02-07

identical to 1.105.1 - bug in CI scripts

## 1.105.1 - 2024-02-07

- fix: autocapture allowlist should consider the tree (#1000)
- chore: move posthog test instance helper (#999)
- chore: nit pick log message (#997)
- chore: copy most recent changelog entry when creating a release (#995)

## 1.105.0 - 2024-02-06

- fix: Add warning and conversion for number distinct_id (#993)
- fix: Remove `baseUrl` from TypeScript compiler options (#996)

## 1.104.4 - 2024-02-02

- fix: very defensive body redaction (#988)
- fix: less eager timeout (#989)

## 1.104.3 - 2024-02-01

- feat: Fetch without window (#985)

## 1.104.2 - 2024-01-31

- fix: no throwing when reading the body (#984)

## 1.104.1 - 2024-01-31

- chore: make rate limiter error less scary (#983)

## 1.104.0 - 2024-01-31

- feat: Fetch support (#898)
- chore: Swap to main (#979)

## 1.103.2 - 2024-01-31

- fix: safer body processing (#980)

## 1.103.1 - 2024-01-28

- feat: safer rrweb events and regular full snapshots (#973)
- chore: update rollup (#974)
- chore: re-enable bundle checker now main and branches both use pnpm (#972)

## 1.103.0 - 2024-01-26

- feat: pnpm patch rrweb (#971)
- chore: convert to pnpm (#970)

## 1.102.1 - 2024-01-25

- chore: add debug logging for session id/recording (#969)

## 1.102.0 - 2024-01-24

- feat: send custom event when network status changes (#965)
- fix: integration test opting out (#959)

## 1.101.0 - 2024-01-22

- feat: canvas recording support (#946)
- refactor(surveys): Use Preact instead of vanilla JS (#963)

## 1.100.0 - 2024-01-15

- Enable scroll stats by default (#962)

## 1.99.0 - 2024-01-15

- feat: Support custom scroll selector (#961)

## 1.98.2 - 2024-01-11

- fix: Don't allow us.posthog.com to be used (#957)

## 1.98.1 - 2024-01-11

- fix: set the session id as soon as it changes (#956)
- fix: simplify test setup (#955)

## 1.98.0 - 2024-01-10

- feat: capture session options in a custom event (#954)

## 1.97.1 - 2024-01-09

- fix(surveys): fix feedback widget bugs (#953)

## 1.97.0 - 2024-01-09

- fix: add a comment explaining browser type prop (#952)
- feat: add opt_out_useragent_filter and $browser_type (#949)
- chore(surveys): add basic survey e2e tests (#948)
- Tidying and removing of old value (#941)

## 1.96.1 - 2023-12-15

- Add gas_source to campaign params (#934)
- feat: simplify payload config compared to rrweb proposal (#939)
- feat: remove given from another test file (#940)

## 1.96.0 - 2023-12-14

- make link survey link optional (#938)
- fix: import nuxt composables from #imports (#879)

## 1.95.1 - 2023-12-13

- Remove debug code from survey-utils (#937)

## 1.95.0 - 2023-12-12

- feat(surveys): custom and tab widget (#933)

## 1.94.4 - 2023-12-12

- Add a few more blocked uas (#936)

## 1.94.3 - 2023-12-12

- fix: class string separator (#935)

## 1.94.2 - 2023-12-11

- fix: cache subdomain discovery (#928)
- chore: corrects the changelog (#931)

## 1.94.1 - 2023-12-09

- fix: incorrect localhost handling (#930)

## 1.94.0 - 2023-12-08

- feat: Swap to localstorage+cookie as default (#927)
- fix: sanitize class string more (#925)
- chore: redirect users to the supportModal when implementation errors occur (#921)
- chore: Add comment to remind about updating the plugin-server (#924)
- add wbraid and gbraid to campaignParams (#923)

## 1.93.6 - 2023-12-05

- fix: Sanitize given api_host urls to not have a trailing slash (#920)

## 1.93.5 - 2023-12-05

- fix: handle newlines in classnames (#919)

## 1.93.4 - 2023-12-05

- feat: Show warning if identifying with "distinct_id" (#918)

## 1.93.3 - 2023-11-28

- fix: safer custom event on return from idle (#913)
- Add deprecation notice for disable_cookie (#912)

## 1.93.2 - 2023-11-23

- fix(flags): Make sure we don't override flags when decide is disabled (#911)

## 1.93.1 - 2023-11-23

- feat: send idle markers in session (#909)

## 1.93.0 - 2023-11-22

- feat(surveys): Add open-ended choices for multiple and single choice surveys (#910)

## 1.92.1 - 2023-11-21

- feat: payload capture - move timing into copied plugin (#902)

## 1.92.0 - 2023-11-20

- feat: Create elements chain string as we store it (#823)
- Move blocked UAs to own file (#905)
- chore: deflake a test (#904)
- chore: convert more tests to TS (#903)
- latest cypress action version (#900)

## 1.91.1 - 2023-11-15

- fix(surveys): button text field fix (#899)

## 1.91.0 - 2023-11-15

- fix: Window or document access across the code (#894)

## 1.90.2 - 2023-11-15

- chore: uniquify differently (#897)
- correct CHANGELOG.md (#896)

## 1.90.1 - 2023-11-15

- fix: seek subdomain correctly (#888)
- fix: merge server permissions for payload capture (#892)

## 1.90.0 - 2023-11-15

- fix(surveys): prioritize question button text field and thank you countdown is not automatic (#893)

## 1.89.2 - 2023-11-14

- fix: a little session buffering logic (#890)
- fix: make header comparison case insensitive (#891)
- fix: extend header denylist (#889)

## 1.89.1 - 2023-11-13

- fix(surveys): fix emoji rating scale bug (#887)
- feat: capture network payloads (internal alpha) (#886)
- fix: meaningful recordings integration tests (#885)
- fix(surveys): Send responded property with every type of survey (#883)
- Bump playground next yarn version (#874)
- chore: convert 2 more test files to remove given and switch to TS (#882)
- fix(surveys): whitelabel, input radio grouping, and auto text color bugs (#881)
- fix: session id should start null (#878)
- chore(deps): bump @babel/traverse from 7.11.0 to 7.23.2 (#835)
- chore(deps): bump @babel/traverse from 7.12.12 to 7.23.2 in /react (#836)
- chore(deps): bump next from 13.1.6 to 13.5.0 in /playground/nextjs (#855)

## 1.89.0 - 2023-11-13

- feat: capture network payloads (internal alpha) (#886)
- fix: meaningful recordings integration tests (#885)

## 1.88.4 - 2023-11-09

- fix(surveys): Send responded property with every type of survey (#883)
- Bump playground next yarn version (#874)
- chore: convert 2 more test files to remove given and switch to TS (#882)

## 1.88.3 - 2023-11-08

- fix(surveys): whitelabel, input radio grouping, and auto text color bugs (#881)

## 1.88.2 - 2023-11-08

- fix: session id should start null (#878)
- chore(deps): bump @babel/traverse from 7.11.0 to 7.23.2 (#835)
- chore(deps): bump @babel/traverse from 7.12.12 to 7.23.2 in /react (#836)

## 1.88.1 - 2023-11-02

- chore(deps): bump next from 13.1.6 to 13.5.0 in /playground/nextjs (#855)
- Tweak session prop names (#873)

## 1.88.0 - 2023-11-02

- feat(web-analytics): Add client-side session params (#869)

## 1.87.6 - 2023-10-31

- fix: add tests for browser and browser version detection (#870)

## 1.87.5 - 2023-10-30

- fix: include raw user agent in event properties (#868)

## 1.87.4 - 2023-10-30

- fix: logging pointless error when offline (#866)

## 1.87.3 - 2023-10-30

- feat: retry count in url (#864)

## 1.87.2 - 2023-10-27

- fix(surveys): Publish types in module (#863)

## 1.87.1 - 2023-10-26

- fix(surveys): clearer user property names (#861)

## 1.87.0 - 2023-10-26

- feat(surveys): Make selector targeting work, add user props (#858)

## 1.86.0 - 2023-10-26

- feat: allow backend to specify a custom analytics endpoint (#831)

## 1.85.4 - 2023-10-26

- fix: checkout every X minutes (#860)
- feat: lazily load exception autocapture (#856)

## 1.85.3 - 2023-10-25

- feat: Toolbar loading from state faster (#849)

## 1.85.2 - 2023-10-24

- fix(surveys): cancel listener should be on all questions (#854)
- Fix changelog.md (#853)
- fix: eslint does not fail build (#852)

## 1.85.1 - 2023-10-24

- fix: Disable the string reduction code until we can battle test it more. (#851)

## 1.85.0 - 2023-10-24

- feat: allow sampling based on decide response (#839)

## 1.84.4 - 2023-10-24

- log when browser offline (#850)
- chore: type checking in one place makes bundle smaller (#843)

## 1.84.3 - 2023-10-23

- fix: full snapshot every 10 minutes (#847)
- fix: really fix subdomain check to satisfy codeql (#845)

## 1.84.2 - 2023-10-23

- fix: heroku subdomain check (#842)

## 1.84.1 - 2023-10-19

- fix(surveys): fix multiple choice input unique ID bug (#841)

## 1.84.0 - 2023-10-18

- Fix bot user agent detection (#840)

## 1.83.3 - 2023-10-17

- fix(surveys): add listener to 0th element (#837)

## 1.83.2 - 2023-10-17

- chore: Make ratings start at 0 (#834)

## 1.83.1 - 2023-10-11

- feat: Move all logs everything over to logger (#830)
- Update DOMAIN_MATCH_REGEX (#787)

## 1.83.0 - 2023-10-10

- feat(surveys): Optional survey questions (#826)

## 1.82.3 - 2023-10-06

- fix: Typescript compilation of survey types (#827)

## 1.82.2 - 2023-10-05

- fix(surveys): open text value bug (#825)

## 1.82.1 - 2023-10-04

- fix(surveys): multiple choice survey submit button bug (#822)

## 1.82.0 - 2023-10-04

- feat: allow regex patterns and wildcards in survey url (#821)

## 1.81.4 - 2023-10-04

- fix(capture): Always update stored person props from $set (#820)

## 1.81.3 - 2023-10-02

- fix(surveys): Handle filtering on undefined (#810)
- feat(surveys): popup changes and multiple questions support (#819)

## 1.81.2 - 2023-09-28

- Fix config access (#816)
- fix: Remove complex get_config (#812)
- fix: Mask page URLs in session recordings (#811)

## 1.81.1 - 2023-09-26

- fix(types): Relative import to fix typescript compilation (#809)

## 1.81.0 - 2023-09-25

- feat(surveys): Make surveys site app native to posthog-js (#801)

## 1.80.0 - 2023-09-25

- Add root $el_text (#806)

## 1.79.1 - 2023-09-20

- fix: Increase timeout to 60 seconds (#803)
- chore: add tests on impact of empty autocapture config (#802)

## 1.79.0 - 2023-09-15

- feat: add an attribute denylist for autocapture (#800)

## 1.78.6 - 2023-09-15

- fix: toolbar cache busting (#798)

## 1.78.5 - 2023-09-14

- fix(flags): Enqueue follow up requests without dropping (#797)

## 1.78.4 - 2023-09-13

## 1.78.3 - 2023-09-13

- feat: different rate limiting handling (#765)

## 1.78.2 - 2023-09-12

- fix: Update rrweb (#793)

## 1.78.1 - 2023-09-07

- fix(flags): Re-enable reload only when request finishes (#791)

## 1.78.0 - 2023-09-07

- fix: Handle uninitialised helpers better (#767)

## 1.77.3 - 2023-09-05

- feat: test a better list of bots and allow users to configure the bot… (#788)

## 1.77.2 - 2023-08-25

- fix(autocapture): element properties tracked up to 1k bytes (#783)

## 1.77.1 - 2023-08-22

- feat: Add pathname to prev page events (#776)
- fix: Mitigate testcafe flakiness (#779)
- feat: Filter out events from GPTBot (#772)

## 1.77.0 - 2023-08-18

- feat: Add previous page properties to page events (#773)
- style: Tighten eslint rules (#775)
- chore: add media examples to playground (#771)

## 1.76.0 - 2023-08-10

- Fixed up tests to cover all cases (#770)

## 1.75.4 - 2023-08-09

- feat: remove old UUID code (#755)

## 1.75.3 - 2023-08-02

- chore: remove unused capture metrics (#766)

## 1.75.2 - 2023-07-26

## 1.75.1 - 2023-07-26

- fix: obey server side opt out for autocapture (#762)

## 1.75.0 - 2023-07-25

- feat: react to rate limiting responses (#757)

## 1.74.0 - 2023-07-25

- fix: Recording throttling for SVG-like things (#758)
- chore(deps): bump semver from 5.7.1 to 5.7.2 in /react (#732)
- chore(deps): bump semver from 6.3.0 to 6.3.1 in /playground/nextjs (#733)
- chore(deps): bump word-wrap from 1.2.3 to 1.2.4 in /react (#746)
- chore(deps): bump word-wrap from 1.2.3 to 1.2.4 (#747)
- chore(deps): bump word-wrap from 1.2.3 to 1.2.4 in /playground/nextjs (#750)

## 1.73.1 - 2023-07-21

- fix: protect against bundling bugs (#754)

## 1.73.0 - 2023-07-20

- feat: use uuidv7 everywhere (#742)

## 1.72.3 - 2023-07-19

- fix: defensive about unload logging (#751)

## 1.72.2 - 2023-07-19

- fix(flags): Don't return undefined for flags when decide is not hit but flags exist (#748)

## 1.72.1 - 2023-07-18

- fix(flags): Make sure flags are reloaded only once on identify calls (#744)

## 1.72.0 - 2023-07-18

- feat(flags): Allow disabling flags on first load (#740)
- chore: remove some slow tests that have served their purpose (#739)

## 1.71.0 - 2023-07-13

- chore: Removed people.set and mapped it to identify (#584)

## 1.70.2 - 2023-07-11

- feat: allow moving to UUID v7 by config in posthog-js (#731)

## 1.70.1 - 2023-07-10

- fix: UUIDs should not take literally forever to generate (#727)

## 1.70.0 - 2023-07-07

- feat: callback when session id changes (#725)

## 1.69.0 - 2023-07-05

- feat: capture page title with pageview (#721)

## 1.68.5 - 2023-06-28

- fix: invalid module d ts because computers are horrible (#715)
- fix(cd): use package manager field (#704)

## 1.68.4 - 2023-06-22

- feat(components): Give option to not track events on feature component (#708)

## 1.68.3 - 2023-06-22

- fix: PosthogProvider doesn't need to have the client be optional (#705)

## 1.68.2 - 2023-06-20

- feat: Group rrweb events into one capture (#694)

## 1.68.1 - 2023-06-15

## 1.68.0 - 2023-06-14

## 1.67.2 - 2023-06-12

- feat: allow decide response to configure errors to drop by pattern (#692)
- chore: no compatability testing for test files (#690)

## 1.67.1 - 2023-06-09

## 1.67.0 - 2023-06-07

- feat: get surveys api (#677)

## 1.66.1 - 2023-06-07

- Update utils.ts (#686)

## 1.66.0 - 2023-06-06

- chore: manual version bump (#684)
- feat: send event UUIDs (#672)

## 1.66.0 - 2023-06-06

Manual addition of version 1.66.0 because CI failed to automatically bump the version

- feat: send event UUIDs (#672)

## 1.65.0 - 2023-06-06

- feat: backoff with jitter (#678)

## 1.64.0 - 2023-06-06

- feat: Add missing maskTextFn for recordings (#679)

## 1.63.6 - 2023-06-06

## 1.63.5 - 2023-06-06

- add browserlist and eslint checking compatability using it (#673)

## 1.63.4 - 2023-06-05

- feat: default endpoint for session recordings is /s/ (#674)

## 1.63.3 - 2023-06-02

- fix: Typescript import issue with rrweb (#670)

## 1.63.2 - 2023-06-01

- fix: only allow exception capture on remote enabled (#659)

## 1.63.1 - 2023-05-31

- fix: performance observer is not always available (#663)
- chore: correct pnpm version (#662)

## 1.63.0 - 2023-05-31

- feat: remove lz compression (#654)

## 1.62.0 - 2023-05-31

- feat: Exception Autocapture (#649)

## 1.61.0 - 2023-05-30

- feat(react): Flag autocapture component (#622)

## 1.60.0 - 2023-05-30

- feat: Added support for cross origin iframe recording (#655)

## 1.59.0 - 2023-05-30

- feat: remove broken capture using img support (#651)

## 1.58.0 - 2023-05-26

- Add get_session_id and get_session_replay_url functions (#647)

## 1.57.4 - 2023-05-25

- fix: Session timeout overridden on reload (#645)

## 1.57.3 - 2023-05-23

- fix: properties with "length" value (#640)
- docs: Update README around releasing and development (#634)
- chore: add test for $identify events count optimization (#639)
- ci: consolidate library checks into one workflow (#638)
- ci: add prettier and eslint linting stage (#637)
- chore: add pre-commit to run lint staged. (#636)
- chore: add functional tests (#635)

## 1.57.2 - 2023-05-17

## 1.57.1 - 2023-05-17

- fix(decide): Make sure all stored properties are sent on first decide request (#633)
- fix(identify): actually send $set_once on identify calls (#629)

## 1.57.0 - 2023-05-15

- feat: Added OS version to the OS details (#624)
- fix: Don't delete existing flags on decide errors (#621)

## 1.56.0 - 2023-05-09

- feat: Allow custom masking of network events (#620)

## 1.55.2 - 2023-05-09

- feat: Added idle timer to recordings (#626)
- docs: Add Nuxt 3 demo (#623)

## 1.55.1 - 2023-05-03

- fix: Script loading before DOM is ready (#618)
- Expose options to mask text in session recording (#595)

## 1.55.0 - 2023-04-28

- feat(beta-management): Add opt-in and out functions (#616)

## 1.54.0 - 2023-04-26

- release new version (#617)
- feat(flags): Allow adding person and group property overrides for flags (#613)

## 1.53.4 - 2023-04-18

- feat: Allow masking of input by referencing the element (#611)

## 1.53.3 - 2023-04-17

- fix: Usage of sessionStorage even if memory persistence (#609)

## 1.53.2 - 2023-04-14

- fix: Don't enable web perf by default for localhost (#608)

## 1.53.1 - 2023-04-13

- chore: bump version (#607)
- feat: Swap over to storing network events in recordings (#606)

## 1.53.0 - 2023-04-12

- feat: Custom campaign param support (#603)
- chore(deps): Bump http-cache-semantics from 4.1.0 to 4.1.1 (#528)
- fix: change user_id -> $user_id in docstring (#525)
- Remove flag param from useActiveFeatureFlags (#599)

## 1.52.0 - 2023-04-05

- fix: Track referrer/search params per browser session (#496)
  _**Note:** This change improves the accuracy of properties `$referrer` and `$referring_domain` in a major way. Previously, the values of these properties often represented pure backlinks in non-SPAs (non-single-page applications). Now those values will represent the true referrer for the current browser-level session (effectively: for the tab). Due to this, referrer data after this update \_may_ look different. It will be significantly more accurate though.\_
- ci: Point out and close stale issues/PRs (#602)
- docs(testcafe): update docs removing posthog server requirements (#594)

## 1.51.5 - 2023-03-23

- fix(segment): handle race condition on loading segment integration (#586)

## 1.51.4 - 2023-03-20

- fix: fewer moving parts more like safe text (#590)

## 1.51.3 - 2023-03-17

- try/catch the bit that fails so we don't just eject the element (#585)
- fix(persistence): set SameSite=None explicitly (#578)

## 1.51.2 - 2023-03-15

- fix: Catch fullsnapshot error (#583)

## 1.51.1 - 2023-03-14

- fix: debug nested span text, part 3 (#582)

## 1.51.0 - 2023-03-14

- added types for PostHog provider `options` (#581)
- ci(testcafe): run browser tests in parallel (#579)

## 1.50.9 - 2023-03-13

- fix: debug nested span text (part 2) (#577)
- feat: use autocapture setting from decide (#575)

## 1.50.8 - 2023-03-10

- reinstate getNestedSpanText, but with no recursion (#576)

## 1.50.7 - 2023-03-09

- fix: debug return empty string on getNestedSpanText (#573)

## 1.50.6 - 2023-03-09

- fix: Only call capture snapshot if recording (#572)

## 1.50.5 - 2023-03-09

- Update rrweb (#570)
- fix: Race condition error with loading rrweb (#569)
- fix: remove warning of duplicate nextjs import (#566)

## 1.50.4 - 2023-03-06

- chore: Revert canvas recording option (#567)
- tolerate undefined target (#565)

## 1.50.3 - 2023-03-02

- fix: spans inside buttons (#563)

## 1.50.2 - 2023-03-02

- fix(bots): add "hubspot" and "crawler" to blocked user agents (#564)

## 1.50.1 - 2023-03-01

- feat: allow record canvas (#562)
- chore: remove old nextjs utils folder (#559)

## 1.50.0 - 2023-02-28

- feat: react library (#540)

## 1.49.0 - 2023-02-28

- feat: augment autocapture using data attributes (#551)

## 1.48.2 - 2023-02-28

- fix: safari iteration error on web performance server timing (#558)

## 1.48.1 - 2023-02-28

- chore: expose errors (#557)
- try the compressed-size-action GH action (#556)

## 1.48.0 - 2023-02-27

- fix: apply terser plugin to module.js and es.js (#555)

## 1.47.0 - 2023-02-27

- chore: no-op change to allow version bump (#554)
- feat(rrweb): implement rrweb2 dynamic loading on decide (#552)

## 1.46.2 - 2023-02-22

- no-op change to allow version bump (#549)
- more leniency for envs with 'window' undefined (#541)

## 1.46.1 - 2023-02-21

- chore: Remove Sentry types to reduce clashes (#546)
- fix: Removed Sentry types from compiled types (#545)

## 1.46.0 - 2023-02-21

- feat: Add optional loading of rrweb2 (#543)
- feat: Add rrweb2 support (experimental) (#536)
- chore: upgrade @sentry/types (#539)

## 1.45.1 - 2023-02-14

- fix: default persons to anonymous (#534)

## 1.45.0 - 2023-02-14

## 1.43.1 - 2023-02-07

- fix: correctly persist user state across page loads (#531)

## 1.43.0 - 2023-02-07

- feat: reset marks user anonymous (#524)

## 1.42.3 - 2023-01-31

- chore(feature-flag): only return truthy values for onFeatureFlag (#522)

## 1.42.2 - 2023-01-26

## 1.42.1 - 2023-01-26

- Revert status check

## 1.42.0 - 2023-01-26

- N/A

## 1.41.0 - 2023-01-24

- Use decide v3 and return defined JSON payloads with matching flags
- Optimistically save evaluated flags even if server has issues

## 1.40.2 - 2023-01-20

- Revert "chore: move types dependency from dependencies to devdependencies (#504)" (#509)

## 1.40.1 - 2023-01-19

- fix: Sentry URL for recording (#507)

## 1.40.0 - 2023-01-18

- feat: capture clicked elements on rageclicks (#506)

## 1.39.5 - 2023-01-13

- chore: move types dependency from dependencies to devdependencies (#504)

## 1.39.4 - 2023-01-12

- fix: use django cache for toolbar js (#503)

## 1.39.3 - 2023-01-11

- fix(toolbar): Load toolbar only in body for turbolink (#499)
- Install pnpm for usage in PR step (#502)

## 1.39.2 - 2023-01-06

- fix: page view ids didn't work with server side config (#501)
- chore(deps): Bump json5 from 2.1.3 to 2.2.3 in /react (#498)

## 1.39.1 - 2023-01-03

- feat: capture server timings (#497)

## 1.39.0 - 2022-12-23

- feat: Adds performance capture (#488)
- fix(options): Add capture_pageleave option (#491)
- fix(cd): use pnpm to install posthog-js version in main repo (#495)

## 1.38.1 - 2022-12-15

- fix: Reduce cookie modifications to stop infinite loops with CMP tools (#489)

## 1.38.0 - 2022-12-13

- feat: page view ids (#487)

## 1.37.0 - 2022-12-07

- feat: event_allowlist and url_allowlist for autocapture (#481)
- chore(deps): Bump qs from 6.5.2 to 6.5.3 (#484)
- chore(deps): Bump decode-uri-component from 0.2.0 to 0.2.2 (#485)
- chore(deps): Bump decode-uri-component from 0.2.0 to 0.2.2 in /react (#483)
- chore(deps): Bump minimatch from 3.0.4 to 3.1.2 (#469)
- feat(rageclicks): turn on rageclicks by default (#480)

## 1.36.1 - 2022-12-01

- update sentry types (#479)
- fix: support copying non-extensible objects (#478)
- feat(groups): allow resetting only user's groups (#476)

## 1.36.0 - 2022-11-22

- feat(sentry-integration): Add `ui_host` option for reverse-proxying (#475)
- chore(deps): Bump minimatch from 3.0.4 to 3.1.2 in /react (#468)

## 1.35.0 - 2022-11-15

- feat: Proper Segment plugin to enable Recordings and more (#471)

## 1.34.1 - 2022-11-14

- feat: allow disable compression in config (#467)

## 1.34.0 - 2022-10-25

- feat(toolbar): posthog.loadToolbar({ temporaryToken: 'key' }) (#464)
- chore(deps): Bump node-fetch from 2.6.1 to 2.6.7 (#361)
- chore(deps): bump glob-parent from 5.1.1 to 5.1.2 (#462)
- chore(deps): Bump browserslist from 4.16.1 to 4.21.4 (#463)
- chore(deps): Bump moment from 2.29.1 to 2.29.4 (#422)
- chore(deps): Bump tmpl from 1.0.4 to 1.0.5 (#329)
- chore(deps): Bump jsdom from 16.4.0 to 16.7.0 in /react (#415)
- chore(deps): Bump jsdom from 16.2.2 to 16.5.0 (#416)
- chore(deps): bump nanoid from 3.1.20 to 3.3.4 (#442)
- chore(deps): bump ansi-regex from 5.0.0 to 5.0.1 (#436)
- chore(deps): Bump async from 3.2.0 to 3.2.3 (#409)
- chore(deps): Bump minimist from 1.2.5 to 1.2.6 (#380)
- chore(deps): Bump minimist from 1.2.5 to 1.2.6 in /react (#379)
- chore(deps): Bump lodash from 4.17.19 to 4.17.21 (#353)
- Bump path-parse from 1.0.6 to 1.0.7 (#331)

## 1.33.0 - 2022-10-18

- feat(capture): Track `navigator.language` as `$language` (#460)

## 1.32.4 - 2022-10-11

- fix(apps): grab the correct global var (#459)

## 1.32.3 - 2022-10-11

- feat(apps): rename "inject" to "site apps" (#458)

## 1.32.2 - 2022-09-30

- feat(apps): load web apps from external scripts, no eval (#456)

## 1.32.1 - 2022-09-29

- feat(apps): add opt_in_web_app_injection (#454)

## 1.32.0 - 2022-09-29

- feat(apps): inject javascript from decide (#453)

## 1.31.1 - 2022-09-28

- feat(recordings): server side console log setting (#452)

## 1.31.0 - 2022-09-23

- feat: Improve SentryIntegration, include error message, type and tags at top level (#450)
- fix(recordings): unique window id on duplication (#446)

## 1.30.0 - 2022-09-12

- feat(feature-flags): Enable bootstrapping the library (#444)

## 1.29.3 - 2022-08-29

- fix(pageleave): Improve $pageleave reliability (#439)

## 1.29.2 - 2022-08-25

- fix(typing): rrweb types (#441)

## 1.29.1 - 2022-08-23

- fix(toolbar): Use apiURL from state if set (#438)

## 1.29.0 - 2022-08-16

- fix: Use rollup and fix define module issues (#434)

## 1.27.0 - 2022-08-01

- refactor: Dummy commit to trigger release (#431)
- chore(typescript): convert library to typescript (#425)

## 1.26.2 - 2022-07-28

- fix(session-id): reset session_id on reset() call (#430)

## 1.26.1 - 2022-07-28

- fix(storage): Fix cross subdomain cookies for localpluscookie (#429)
- fix: Testcafe using Posthog cloud (#428)

## 1.26.0 - 2022-07-19

- fix: dont set initial referrer (#426)

## 1.25.2 - 2022-07-12

- feat: Add msclkid param to campaign keywords (#424)
- chore(deps): Update @sentry/types for 7.2.0 (#412)

## 1.25.1 - 2022-06-29

- fix: Add facebook crawlers to blocked user agents (#417)

## 1.25.0 - 2022-06-28

- feat(feature-flags): Enable experience continuity (#404)
- chore: Update changelog for 1.24.0 (#411)

## 1.24.0 - 2022-06-01

- feat: Limit session recordings to 24 hours (#405)
    - a new recording is immediately started and no data is lost

## 1.23.0 - 2022-06-01

- feat: Allow overriding device id generation (#401)
- Fix this.get_config undefined error (#397)

## 1.22.0 - 2022-05-31

- feat: add support to `fbclid` campaign parameter (#400)

## 1.21.1 - 2022-05-13

- chore(build): bumping to make release (#396)
- chore(dep): update rrweb to 1.1.3 (#395)

## 1.21.0 - 2022-05-11

- fix(recordings): mask all input fields for recordings (#388)

## 1.20.5 - 2022-05-10

- feat: add recording url to sentry integration (#371)
- fix(config): Case-insensitive persistence (#389)

## 1.20.4 - 2022-04-15

- fix(console-logs): handle undefined and null log (#385)

## 1.20.3 - 2022-04-11

- feat(recordings): add inline stylesheet option (#383)
- fix(config): Handle config undefined (#382)

## 1.20.2 - 2022-03-31

- fix(web-performance): clear resource timings after reading (#377)

## 1.20.1 - 2022-03-29

- feat(tracking): add ahrefsbot to list of ignored bots (#378)

## 1.20.0 - 2022-03-23

- feat: send library version outside of compressed body as a debug signal (#376)

## 1.19.2 - 2022-03-22

- Revert "feat: send library version outside of compressed body as a debug signal (#351)" (#375)

## 1.19.1 - 2022-03-22

- fix: truncate console logs (#372)

## 1.19.0 - 2022-03-22

- feat: send library version outside of compressed body as a debug signal (#351)
- ci: create new PRs in main repo with chore: (#370)

## 1.18.0 - 2022-03-16

- Add console log recording (#367)
- fix(properties): dont modify input properties (#369)

## 1.17.9 - 2022-03-04

- fix(web performance): calculate duration when it isn't present on navigation timing (#368)
- Upgrade jest to remove security vulnerability (#365)

## 1.17.8 - 2022-02-02

- Fix for enabling a disabled session recording (#364)

## 1.17.7 - 2022-02-01

- fix onFeatureFlag (#363)

## 1.17.6 - 2022-01-28

- Remove capture failed request (#362)

## 1.17.5 - 2022-01-27

- Only hit onFeatureFlags callback after decide (#360)

## 1.17.4 - 2022-01-27

- Fix featureflags not working when /decide is down (#359)

## 1.17.3 - 2022-01-20

- Add an allow list to skip truncating strings when capturing events (#355)

## 1.17.2 - 2022-01-20

- remove debug option (#357)

## 1.17.1 - 2022-01-13

- Reduce the size of the APM performance data payload (#354)

## 1.17.0 - 2022-01-10

- Send APM data so that we don't need a plugin (#352)
- Allow APM performance on all $pageview events (#350)
- Include browser performance values on $pageview (#347)
- add more advice to pull request template (#349)
- Update README.md (#348)

## 1.16.8 - 2021-12-21

- add resetSessionId function (#345)

## 1.16.7 - 2021-11-25

- Feature flags groups support & /decide refactor (#341)

## 1.16.6 - 2021-11-18

- Avoid needless double /decide calls (#340)

## 1.16.5 - 2021-11-18

- try sendbeacon (#337)

## 1.16.4 - 2021-11-16

- allow disabling toolbar tracking for self-hosted users (#335)

## 1.16.3 - 2021-11-12

- Bumping the build for a release (#334)
- Filter out \_nghost attributes from autocapture (#332)

## 1.16.2 - 2021-11-07

- update rrweb (#328)

## 1.16.1 - 2021-11-02

- Add window_id and session_id to all events (#326)

## 1.16.0 - 2021-10-28

- Group analytics support (#325)

## 1.15.4 - 2021-10-27

- pass toolbar to posthog (#327)

## 1.15.3 - 2021-10-19

- Add localStorage+cookie as persistence type (#324)

## 1.15.2 - 2021-10-18

- drop data uri filter limit from 20mb to 5mb (#322)

## 1.15.1 - 2021-10-18

- Take a full recording snapshot when session ids update (a fix for missing recordings) (#318)

## 1.15.0 - 2021-10-18

- Revert "Add posthog.people.increment" (#320)

## 1.14.4 - 2021-10-14

- filter data urls out of large payloads (#317)

## 1.14.3 - 2021-10-12

- Expand allowed input types to 'button', 'checkbox', 'submit', 'reset' (#315)

## 1.14.2 - 2021-10-12

- dont mind me, just bumping versions (#316)
- fix: localStorage access denied error being thrown (#312)

## 1.14.1 - 2021-10-06

- Reduce code paths that could encode post data as the string undefined (#300)

## 1.14.0 - 2021-10-05

- Bump build and a readme change (#306)
- Add posthog.people.increment (#254)
- Send initial pageview immediately (#295)
- add a test for init-ing and reading the on xhr error handler (#308)

## 1.13.17 - 2021-10-04

- corrects exported type which got out of sync with core.js file (#307)

## 1.13.16 - 2021-10-04

- Allow injection from config of a function to call when xhr requests fail (#296)
- add instructions for developing with Yalc (#303)
- Revert "Speculative logging for PostHog/posthog#4816 (#293)" (#302)
- Filter out \_ngcontent attributes in autocapture (#298)
- corrects a test where assertion and setup didn't match test name (#299)

## 1.13.15 - 2021-09-29

- Speculative logging for PostHog/posthog#4816 (#293)
- Bump tmpl from 1.0.4 to 1.0.5 in /react (#287)
- Bump ansi-regex from 5.0.0 to 5.0.1 in /react (#294)

## 1.13.14 - 2021-09-28

- Revert "Trigger onFeatureFlags on reset (#263)" (#292)

## 1.13.13 - 2021-09-17

- Trigger onFeatureFlags on reset (#263)
- Do not crash when calling capture() after skipping init(), fixes #281 (#282)

## 1.13.12 - 2021-09-15

- Change UTM tags from first touch to last touch (#286)

## 1.13.11 - 2021-09-14

- Do not load toobar only if autocapture enabled (#285)

## 1.13.9 - 2021-09-10

- Split feature flags into `$feature/*` properties (#278)

## 1.13.8 - 2021-09-09

- Restore feature flag client-side override method (#280)

## 1.13.7 - 2021-09-06

- Revert "Do not load toolbar when disabled (#264)" (#276)

## 1.13.6 - 2021-09-06

- add gclid to campaign params (#277)

## 1.13.5 - 2021-09-02

- fix groupKey (#274)

## 1.13.4 - 2021-09-02

- console.warn to error (#273)

## 1.13.3 - 2021-09-02

- add posthog.group (#270)

## 1.13.2 - 2021-09-02

- fix "undefined is not an object" error (#272)

## 1.13.1 - 2021-09-02

- Deprecate client-side feature flag overrides (#271)

## 1.13.0 - 2021-09-01

- Feature flags API v2 (#268)

## 1.12.7 - 2021-08-29

- Update `rrweb` to 1.0.3 (#269)

## 1.12.6 - 2021-08-20

- Update `@sentry/types` to 6.11 (#267)

## 1.12.5 - 2021-08-17

- Do not load toolbar when disabled (#264)
- Bump path-parse from 1.0.6 to 1.0.7 in /react (#266)

## 1.12.4 - 2021-08-16

- Fix deps containing types not being installed (#265)

## 1.12.3 - 2021-08-04

- Add `rrweb-snapshot` to dev deps (#262)
- Don't retry 500 responses (#260)

## 1.12.2 - 2021-08-02

- Update decide.js (#258)

## 1.12.1 - 2021-07-16

- Allow session recording reload (#253)

## 1.12.0 - 2021-07-15

- Remove deprecated methods and options (#255)

## 1.11.4 - 2021-06-24

- fix invalid cookie (#250)

## 1.11.3 - 2021-06-14

- Capture viewport height and width (#246)
- Add extra local development instructions (#235)
- Update README.md (#243)

## 1.11.2 - 2021-06-07

- Fix overridden request retry data (#241)

## 1.11.1 - 2021-06-04

- Fix: avoid directly accessing localStorage (#239)

## 1.11.0 - 2021-06-02

- Retry Queue (#226)
- Bump hosted-git-info from 2.8.8 to 2.8.9 in /react (#229)
- Bump lodash from 4.17.20 to 4.17.21 in /react (#225)
- Bump ws from 7.4.2 to 7.4.6 in /react (#237)
- Remove duplicates in CHANGELOG (#236)

## 1.10.2 - 2021-05-25

- Reconcile Server and Client side configurations for session recording and autocapture (#233)

## 1.10.1 - 2021-05-25

- Fix sessionRecording bug (#234)
- Update outdated releasing instructions (#224)
- changelog for 1.10.0 (#223)
- 1.10.0 (#222)
- Refactor /decide enpoint & allow recording without autocapture (#212)
- Add missing `disable_session_recording` property in Config interface (#221)
- Update types, add missing reloadFeatureFlags (#219)
- Fix in-progress check for utils/deepCircularCopy (#216)

## 1.10.0 - 2021-05-07

- Refactor /decide endpoint & allow recording without autocapture (#212)
- Fix in-progress check for utils/deepCircularCopy (#216)
- Update types, add missing reloadFeatureFlags (#219)
- Add missing disable_session_recording property in Config interface (#221)

## 1.9.7 - 2021-04-09

- Config Additions: session_recording, mask_all_element_attributes, mask_all_text (#209)

## 1.9.6 - 2021-03-30

- Support rrweb mask all inputs (#207)
- fix: incorrect typing for isFeatureEnabled (#208)

## 1.9.3 - 2021-03-12

- Fix SentryIntegration optional param typing (#203)

## 1.9.2 - 2021-03-12

- Add SentryIntegration TS (#202)
- add SentryIntegration typing (#202)

## 1.9.1 - 2021-03-08

- Add posthog.debug() to types, remove bad docstring (#201)
- Fix ".identify" docstrings (#200)

## 1.9.0 - 2021-03-03

- Device Type (#198)

## 1.8.10 - 2021-03-02

- Add properties_string_max_length = 65535 (#197)
- Remove unused notification code (#191)
- Remove old upgrade code (never used) (#192)
- Support $set_once with identify (#190)

## 1.8.9 - 2021-03-02

- Add Yarn lock resiliency (#196)
- Update README.md (#194)
- Add debug function (#193)
- Fix auto changelog (#188)
- Fix auto new version (#187)

## 1.8.7 - 2021-02-11

- Fix internal metric unpacking error

## 1.8.6 - 2021-02-05

- When logging in as another user, don't link those two identities (#174)
- Testcafe E2E tests, IE11 fixes (#180)

## 1.8.5 - 2021-01-18

- Allow passing custom domain for sentry integration (#176)
- Update typing (#173)

## 1.8.3 - 2021-01-11

- Event names must be strings in `posthog.capture` (#171)

## 1.8.1 - 2021-01-08

- Increase compatibility with IE 11 (#169)

## 1.8.0 - 2020-12-14

- Using gzip-based compression over lzstring using the fflate library: [fflate](https://github.com/101arrowz/fflate). This reduces the amount of data transferred, and makes posthog servers respond faster (requires posthog 1.19.0). https://github.com/PostHog/posthog/issues/2560
- Support last touch $referrer and $referring_domain user properties https://github.com/PostHog/posthog-js/pull/139
- Publish a ES dist file https://github.com/PostHog/posthog-js/pull/157
- Publish a react integration for feature flags https://github.com/PostHog/posthog-js/pull/154

## 1.7.2 - 2020-11-28

- Fix issues with incorrect headers being set on decide

## 1.7.1 - 2020-11-27

- Force session recording to use lz64 compression (https://github.com/PostHog/posthog-js/pull/134)
- Bundle module.js in es5 (https://github.com/PostHog/posthog-js/pull/132)

## 1.7.0 - 2020-11-26

- Send session recording events to posthog in (short) batches, separate from rest of events to make sure we drop fewer events (#126)
- Send session recording events to a separate endpoint for newer versions of posthog (#118)
- Send correct LIB_VERSION to posthog with captures (#119)
- Handle capturing self-referential objects (#123)
- Make the library smaller by dropping unneeded code (#123, #128)
- Update request batching logic (#118, #126)
- Notify rrweb when $pageview events happen (#127)
- Fix 'this.people.delete_user is undefined' (issue #39, #113)
- Update rrweb block class to use `ph-no-capture` and `ph-ignore-input` (#112)
- Deprecate calling posthog.capture with a callback (#129)
- Attempted to re-add support for including posthog-js in server-side rendering. (#131)
- Bugfix: Don't truncate session recording data (#121)
- Bugfix: Kill `posthog.capture_links()` and `posthog.capture_forms()`. They were broken since initial release - you can use autocapture instead. (#128)

## 1.6.0 - 2020-11-05

- Allow updating user properties when calling `posthog.identify('identity, { some: 'value' })` (#105)
- Allow disabling $feature_flag_called event: `posthog.isFeatureEnabled('flag', { send_event: false }) (#100)
- Make cookieless analytics possible by passing `persistence: 'memory'` to posthog.init (#82)
- Avoid sending $pageleave events when `capture_pageview: false` passed to posthog.init (#109)
- Code cleanup, bug fixes, integration test suite and more tech debt work

## 1.5.2 - 2020-10-22

- Autocapture bugfix: Ignore extra spaces in classnames #99
- Improve typing of posthog-js (#103)

## 1.5.1 - 2020-10-22

- Improve typing of posthog.js #97 (thanks @stonesthatwhisper)
- Improve session recording, generate $session_id fields #91 #96
- Fix a bug with session recording events not being saved #95
- Improve test coverage #94

## 1.5.0 - 2020-09-08

- Add beta functionality to do session recording
- Add $feature_flag_called event
- Add beta Sentry integration

## 1.4.5 - 2020-09-08

- Fix clicks in shadowroot for Firefox and Safari

## 1.4.4 - 2020-08-26

- Fix clicks within shadowroot not being captured
- Fix type definition of loaded

## 1.4.3 - 2020-08-11

- Remove "?." to support older browsers

## 1.4.2 - 2020-08-11

- Capture actions even if toolbar is in used

## 1.4.1 - 2020-08-10

- Remove unused parameter for `.reloadFeatureFlags()`

## 1.4.0 - 2020-08-10

- Have `.onFeatureFlags(callback)` register multiple callbacks, which get called when feature flags are loaded or updated
- Update feature flags when `identify` is called.
- Add option `.reloadFeatureFlags()`. Call it to trigger a reload of feature flags. (See [#71](https://github.com/PostHog/posthog-js/pull/71))
- Add config option `sanitize_properties` that accepts a function which sanitizes parameters of events (See [#75](https://github.com/PostHog/posthog-js/issues/75))

## 1.3.8 - 2020-08-07

- Set `secure_cookie` config to `true` if the page is running over https

## 1.3.7 - 2020-07-28

- Store toolbar session in localStorage (instead of sessionStorage) so you don't need to authorize in every tab you have open

## 1.3.6 - 2020-07-27

- Fix a parameter in the type definition

## 1.3.5 - 2020-07-20

- Add flag to respect Do Not Track setting

## 1.3.4 - 2020-07-16

- Capture safe attributes (id, name and class) if the element is an input (#63)

## 1.3.3 - 2020-07-16

- Add payload compression support (with lz-string) (#48)

## 1.3.2 - 2020-07-16

- Fix request batching when loading the library from npm and running `.init()` after DOM load.

## 1.3.1 - 2020-07-13

- Support loading the toolbar with a `__posthog` has param (was: `state`) and `ph_authorize` action.

## 1.3.0 - 2020-07-03

- Add TypeScript defintions

## 1.2.4 - 2020-07-01

- Add support for feature flags (`posthog.isFeatureEnabled('keyword')`)

## 1.2.3 - 2020-07-01

- Send $host and $pathname with $pageview requests (was just with $autocapture)
- Track clicks on elements which have `cursor:pointer`
- Better test suite

## 1.2.2 - 2020-06-15

- Allow setting properties on anonymous users

## 1.2.1 - 2020-06-09

- Simplify passing of API token to editor

## 1.2.0 - 2020-06-08

- Support passing various/dynamic parameters to the toolbar

## 1.1.2 - 2020-06-04

- Fix another error when using a new posthog-js version with an old posthog version

## 1.1.1 - 2020-06-04

- Show a error if calling `posthog.identify` with `null` user (#34 by @rushabhnagda11)

## 1.1.0 - 2020-06-04

- Support loading new PostHog toolbar

## 1.0.6 - 2020-03-09

- Send beacon on $pageleave
- Clean up a bunch of code
- Don't reset device id on reset

## 1.0.4 - 2020-03-04

- Fix Heroku App Cookie Bug
- Batch Event Posts
- Support TurboLinks
- Send Timestamp with events

## 1.0.0 - 2020-02-20

First Release.
