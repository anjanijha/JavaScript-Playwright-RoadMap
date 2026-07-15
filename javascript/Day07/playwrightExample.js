import { test } from "@playwright/test";

test("Google", async ({ page }) => {

    await page.goto("https://google.com");

    console.log(await page.title());

});