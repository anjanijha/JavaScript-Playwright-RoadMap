import { expect, test } from "@playwright/test";

test("Search product", async ({ page }) => {
    await page.goto("https://www.amazon.com/");
    const searchBox = page.locator("#twotabsearchtextbox");
    const searchButton = page.locator("#nav-search-submit-button");
    await searchBox.fill("iPhone");
    await searchButton.click();
    const products = page.locator("div[data-component-type='s-search-result'] h2 span");
    await expect(products.first()).toBeVisible(); // Always use if collecting the list
    const count = await products.count();
    console.log(`Total Products = ${count}`);
    for (let i = 0; i < count; i++) {
        const productName = await products.nth(i).textContent();
        console.log(`${i + 1}. ${productName}`);
    }
});