import { expect, test } from "playwright/test";


test("Login to facebook", async ({ page }) => {
    await page.goto("https://www.facebook.com/");
    const emailTextbox = page.locator('input[name="email"]');
    const passwordTextbox = page.locator('input[name="pass"]');
    const loginButton = page.getByLabel("Log in");
    await emailTextbox.fill("anjanipremnitrr@gmail.com");
    await passwordTextbox.fill("@4Anjani4@");
    await loginButton.click();
});