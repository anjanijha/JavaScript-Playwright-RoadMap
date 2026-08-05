/*
1️⃣ What is Playwright?

Playwright is an end-to-end automation framework developed by Microsoft.

It automates modern web browsers like:

Chromium (Chrome, Edge)
Firefox
WebKit (Safari)

It allows us to automate:

UI Testing
API Testing
Mobile Emulation
Network Interception
File Upload/Download
Authentication
Performance-related scenarios

Why Playwright over Selenium?
| Selenium                        | Playwright                                |
| ------------------------------- | ----------------------------------------- |
| Uses WebDriver                  | Uses browser automation protocol directly |
| Slower                          | Faster                                    |
| External drivers required       | No browser driver management              |
| More flaky tests                | Auto-waiting reduces flakiness            |
| Limited modern browser features | Rich support for modern web apps          |

*/
//============================================================================================================

/*
2️⃣ Playwright Architecture

This is one of the most frequently asked senior interview questions.
Your Test
     │
     ▼
Playwright Test Runner
     │
     ▼
Browser
     │
     ▼
BrowserContext
     │
     ▼
Page
     │
     ▼
Website
*/

/*
3️⃣ Browser : A Browser represents an actual browser instance.
*/