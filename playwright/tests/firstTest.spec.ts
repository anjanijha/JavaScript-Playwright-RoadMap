import { test } from "@playwright/test";

test("Open Google", async ({ page }) => {
    console.log("Browser Launched");

    await page.goto("https://www.google.com");

    console.log("Google Opened");
});