function launchBrowser() {
    return new Promise((resolve, reject) => {
        console.log("launching Browser....");
        setTimeout(() => {
            const browserLaunched = true;
            if (browserLaunched) {
                resolve("Browser Launched Successfully");
            } else {
                reject("Browser Launch Failed")
            }
        }, 2000)

    });
}
async function startBrowser() {

    try {

        const result = await launchBrowser();

        console.log(result);

    } catch (error) {

        console.log(error);

    }

}

startBrowser();

