---
layout: layouts/base.html
title: Web testing tools
description: List of web testing tools
---

<details open>
    <summary>Frontend</summary>


### {{ "Design systems" | section | safe }}
- [Gov.uk](https://design-system.service.gov.uk/)
- [US Gov](https://designsystem.digital.gov/)
- [Atlassian](https://atlassian.design/)
- [Nord](https://nordhealth.design/)
- [Neurodiversity Design System](https://www.neurodiversity.design/)
- [Github Primer](https://primer.style/)


### {{ "Accessibility" | section | safe }}
- [Writing CSS with Accessibility in Mind](https://medium.com/@matuzo/writing-css-with-accessibility-in-mind-8514a0007939)
- [Accessibility developer tools](https://github.com/GoogleChrome/accessibility-developer-tools)
- [Color Contrast Analyser for Sketch](https://github.com/getflourish/Sketch-Color-Contrast-Analyser)
- [HTML test cases](https://russmaxdesign.github.io/accessible-forms/index.html)
- [HTML Semantics and Accessibility Cheat Sheet](https://webaim.org/resources/htmlcheatsheet/)
- [ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/)
- [Deque University ARIA Examples](https://dequeuniversity.com/library/)
- [Deque](https://dequeuniversity.com/checklists/)
- [Accessibility Law](https://accessibility-manual.dwp.gov.uk/accessibility-law)
- [Accessibility Developer Guide](https://www.accessibility-developer-guide.com/)
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/)
- [Axe](https://www.deque.com/axe/)
- [Code sniffer](https://squizlabs.github.io/HTML_CodeSniffer/)
- [Pa11y](https://pa11y.org/)
- [Web Accessibility: A Reference to Creating Inclusive Websites](https://stackdiary.com/web-accessibility/)

### {{ "Guidelines" | section | safe }}
- [Maintainable CSS](https://maintainablecss.com/)
- [CUBE CSS](https://cube.fyi/)
- [BEM](https://getbem.com/)
- [Progressive Enhancement](https://www.gov.uk/service-manual/technology/using-progressive-enhancement)

### {{ "HTML" | section | safe }}
- [HTML validator](https://validator.w3.org/)
- [HTML specification](https://html.spec.whatwg.org/)

### {{ "Assert computed CSS styles" | section | safe }}
- [Quixote](https://github.com/jamesshore/quixote/blob/master/README.md)

### {{ "Visual testing" | section | safe }}
- [Wraith](https://github.com/bbc/wraith)
- Cypress, wdio or playwright + [Applitools](https://applitools.com/)
- Cypress, wdio or playwright + [Percy.io](https://percy.io/)
- Cypress + [Happo](https://happo.io/)
- wdio + [Saucelabs visual testing](https://saucelabs.com/platform/visual-testing)
- [Playwright visual testing](https://playwright.dev/docs/test-snapshots)
- [CSS critic](https://github.com/cburgmer/csscritic)

### {{ "CSS Performance testing" | section | safe }}
- [Stress-css](https://github.com/andyedinborough/stress-css)

### {{ "CSS Security testing" | section | safe }}
- [OWASP Securing Cascading Style Sheets Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Securing_Cascading_Style_Sheets_Cheat_Sheet.html)

### {{ "CSS Preprocessors" | section | safe }}
- [Sass](https://sass-lang.com/)
- [Less](https://lesscss.org/)

### {{ "Crossbrowser testing" | section | safe }}
- [Selenium](https://www.selenium.dev/)
- [Playwright](https://playwright.dev/)
- [Webdriver.io](https://webdriver.io/)
- [Cypress](https://www.cypress.io/)

### {{ "Web Components" | section | safe }}
- [Open Web Components](https://open-wc.org/docs/testing/testing-package/)

### {{ "Screen readers" | section | safe }}
- [Voice over (Mac)](https://www.apple.com/voiceover/info/guide/_1121.html#:~:text=VoiceOver%20is%20a%20built%2Din,VoiceOver%2C%20press%20Command%2DF5.)
- [NVDA](https://www.nvaccess.org/download/)
- [JAWS](https://www.freedomscientific.com/products/software/jaws/)

</details>

<details open>
    <summary>Backend</summary>

### {{ "API functional testing" | section | safe }}
- [Postman](https://www.postman.com/)
- [Insomnia](https://insomnia.rest/)
- [REST-assured](https://rest-assured.io/)

### {{ "Contract testing" | section | safe }}
- [Pact](https://pact.io/)

### {{ "Load testing" | section | safe }}
- [K6](https://k6.io/)
- [Locust](https://locust.io/)
- [Jmeter](https://jmeter.apache.org/)

### {{ "Documentation" | section | safe }}
- [Swagger](https://swagger.io/)

</details>

<details open>
<summary>Testing approaches</summary>

### {{ "BDD" | section | safe }}
- [Cucumber](https://cucumber.io/)
- [Specflow](https://specflow.org/)

### {{ "KDT" | section | safe }}
- [Robot Framework](https://robotframework.org/)

### {{ "Scripting" | section | safe }}
- [Testing library](https://testing-library.com/)
</details>

<details open>
    <summary>Other</summary>

### {{ "Useful links" | section | safe }}
- [Gov.uk frontend repository](https://github.com/alphagov/govuk-frontend)
- [Spotify Engineering](https://engineering.atspotify.com/)
- [Life of a pixel](https://www.youtube.com/watch?v=K2QHdgAKP-s)
- [W3C](https://www.w3.org/)
- [Devtools protocol documentation](https://chromedevtools.github.io/devtools-protocol/)
- [Chrome WebDriver Status](https://chromium.googlesource.com/chromium/src/+/refs/heads/main/docs/chromedriver_status.md)
- [W3C WebDriver specification](https://w3c.github.io/webdriver/)

### {{ "Cloud browser providers" | section | safe }}
- saucelabs
- browserstack

### {{ "Mocking" | section | safe }}
- [Tweak](https://chrome.google.com/webstore/detail/tweak-mock-and-modify-htt/feahianecghpnipmhphmfgmpdodhcapi)

### {{ "Security" | section | safe }}
- OWASP
- Snyk

### {{ "Static analysis" | section | safe }}
- Sonar
- Eslint
- Resharper
- Checkmarx

### {{ "Monitoring" | section | safe }}
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

### {{ "IDE" | section | safe }}
- Webstorm
- Visual Studio Code
- [Aqua](https://www.jetbrains.com/aqua/)

### {{ "Component libraries and their testing tools" | section | safe }}
- [Storybook](https://storybook.js.org/)
    - [Chromatic](https://www.chromatic.com/)
- [Bit](https://bit.dev/)

### {{ "Docs generators" | section | safe }}
- [Eleventy](https://www.11ty.dev/)

### {{ "Deployments and versioning" | section | safe }}
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
- Continuous integration and delivery tools
    - [Gitlab CI](https://docs.gitlab.com/ee/ci/)
    - Github Actions
    - Jenkins
    - Teamcity
    - Gocd
    - Azure DevOps

## {{ "Certifications" | section | safe }}
- [ISTQB](https://www.istqb.org/)
- [WAS](https://www.accessibilityassociation.org/s/wascertification)

### {{ "Preparation" | section | safe }}
- [WAS preparation](https://dequeuniversity.com/curriculum/packages/iaap-certification-prep)
</details>