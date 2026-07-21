interface BrowserConfig {
    browser: string;
    headless: boolean;
    timeout: number;
    baseUrl: string;
}

interface TestUser {
    username: string;
    password: string;
    role: string;
}

interface TestExecution {
    browserConfig: BrowserConfig;
    testUser: TestUser;
    environment: string;
}

const config: TestExecution = {
    browserConfig: {
        browser: "chromium",
        headless: true,
        timeout: 3000,
        baseUrl: "https://demo.com"
    },

    testUser: {
        username: "admin",
        password: "pass",
        role: "Admin"
    },

    environment: "QA"
};
displayConfiguration(config);
function displayConfiguration(config: TestExecution): void {

    console.log("==================================");
    console.log("Playwright Configuration");
    console.log("==================================");

    console.log(`Browser     : ${config.browserConfig.browser}`);
    console.log(`Headless    : ${config.browserConfig.headless}`);
    console.log(`Timeout     : ${config.browserConfig.timeout}`);

    console.log("");

    console.log(`Base URL    : ${config.browserConfig.baseUrl}`);

    console.log("");

    console.log(`Username    : ${config.testUser.username}`);
    console.log(`Role        : ${config.testUser.role}`);

    console.log("");

    console.log(`Environment : ${config.environment}`);

}