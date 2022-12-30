---
layout: layouts/base.html
title: Web testing tools
description: List of web testing tools
---

# Welcome to webtesting.tools  
---

<h1 class="section-header" id="frontend">Frontend</h1>

## HTML testing tools

- [HTML validator](https://validator.w3.org/)
- [Accessibility Developer Guide](https://www.accessibility-developer-guide.com/)
---

## CSS testing tools
### Functional
- Assert computed styles
    - [Quixote](https://github.com/jamesshore/quixote/blob/master/README.md)
- Screenshot comparisson
    - [Wraith](https://github.com/bbc/wraith)
    - Cypress, wdio or playwright + [Applitools](https://applitools.com/)
    - Cypress, wdio or playwright + [Percy.io](https://percy.io/)
    - Cypress + [Happo](https://happo.io/)
    - wdio + [Saucelabs visual testing](https://saucelabs.com/platform/visual-testing)
    - [Playwright visual testing](https://playwright.dev/docs/test-snapshots)
    - [CSS critic](https://github.com/cburgmer/csscritic)

### Performance
- [Stress-css](https://github.com/andyedinborough/stress-css)

### Security
- [OWASP Securing Cascading Style Sheets Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Securing_Cascading_Style_Sheets_Cheat_Sheet.html)

### Accessibility
- [Writing CSS with Accessibility in Mind](https://medium.com/@matuzo/writing-css-with-accessibility-in-mind-8514a0007939)
- [Accessibility developer tools](https://github.com/GoogleChrome/accessibility-developer-tools)
- [Color Contrast Analyser for Sketch](https://github.com/getflourish/Sketch-Color-Contrast-Analyser)

---
<h1 class="section-header" id="backend">Backend</h1>

## API
### Functional
- [Postman](https://www.postman.com/)
- [Insomnia](https://insomnia.rest/)
- [REST-assured](https://rest-assured.io/)

### Contract
- [Pact](https://pact.io/)

### Load
- [K6](https://k6.io/)
- [Locust](https://locust.io/)

### Documentation 
- [Swagger](https://swagger.io/)

---

<h1 class="section-header" id="other">Other</h1>

## Useful links
- [Gov.uk frontend repository](https://github.com/alphagov/govuk-frontend)
- [Spotify Engineering](https://engineering.atspotify.com/)
- [HTML specification](https://html.spec.whatwg.org/)
- [Life of a pixel](https://www.youtube.com/watch?v=K2QHdgAKP-s)
- [W3C](https://www.w3.org/)
- [Devtools protocol documentation](https://chromedevtools.github.io/devtools-protocol/)
- [Chrome WebDriver Status](https://chromium.googlesource.com/chromium/src/+/refs/heads/main/docs/chromedriver_status.md)
- [W3C WebDriver specification](https://w3c.github.io/webdriver/)
---

## Preventing, best practises

### Design system
- [Gov.uk](https://design-system.service.gov.uk/)
- [Atlassian](https://atlassian.design/)
- [Nord](https://nordhealth.design/)

### Accessibility checklists
- [Deque](https://dequeuniversity.com/checklists/)

---
## Detecting, asserting, using
### Accessibility tools
- Voice over (Mac)
- NVDA
- JAWS
- Lighthouse
- Axe
- [Pa11y](https://pa11y.org/)

### Crossbrowser testing
- Selenium
- Playwright
- Webdriver.io

### Cloud browser providers
- saucelabs
- browserstack

### Mocking
- [Tweak](https://chrome.google.com/webstore/detail/tweak-mock-and-modify-htt/feahianecghpnipmhphmfgmpdodhcapi)

### Security
- OWASP
- Snyk

### Static analysis
- Sonar
- Eslint
- Resharper
- Checkmarx

### Monitoring
- Grafana
- Eggplant
- Pagerduty
- Prometheus
- Cloudwatch
- Splunk
- Datadog
- Sentry
- Glassbox
- Sessioncam
- [Web Vitals](https://github.com/GoogleChrome/web-vitals/)

---
### Approaches
- BDD
    - [Cucumber](https://cucumber.io/)
    - [Specflow](https://specflow.org/)
- KDT
    - [Robot Framework](https://robotframework.org/)
---

## IDE
- Webstorm
- Visual Studio Code
- [Aqua](https://www.jetbrains.com/aqua/)

---
## Component libraries and their testing tools 
- [Storybook](https://storybook.js.org/)
    - [Chromatic](https://www.chromatic.com/)
- [Bit](https://bit.dev/)

## Web Components
- [Open Web Components](https://open-wc.org/docs/testing/testing-package/)

## Deployments and versioning
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
- Continuous integration and delivery tools
    - Gitlab CI
    - Github Actions
    - Jenkins
    - Teamcity
    - Gocd
    - Azure DevOps
