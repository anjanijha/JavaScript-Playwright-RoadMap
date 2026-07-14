// Browser Configuration
const config = {
    browser: "chromium",
    headless: true
};

console.log("===============================");
console.log("Browser Configuration");
console.log("===============================");

/*
1. Destructure browser and headless
*/
const { browser, headless } = config;

console.log(`Browser  : ${browser}`);
console.log(`Headless : ${headless}`);

/*
2. Merge config with timeout
*/
const updatedConfig = {
    ...config,
    timeout: 30000
};

console.log("\nUpdated Configuration");
console.log(updatedConfig);

/*
3. Create launch(...options)
4. Use default parameter
*/
function launch(browser = "chromium", ...options) {
    console.log("\nLaunching Browser...");
    console.log(`Browser : ${browser}`);
    console.log(`Options : ${options}`);
}

launch();
launch("firefox", "--headless", "--incognito");

/*
5. Use optional chaining
*/
console.log("\nOptional Chaining");
console.log(`Viewport : ${updatedConfig.viewport?.width}`);

/*
6. Use nullish coalescing
*/
const downloadPath = updatedConfig.downloadPath ?? "./downloads";

console.log(`Download Path : ${downloadPath}`);