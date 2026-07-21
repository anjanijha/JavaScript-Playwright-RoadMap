function  launchBrowser(browser: string = "chromium",headless: boolean = true):void{
    console.log("=========================");
    console.log("Browser Information");
    console.log("=========================");
    console.log(`Browser : ${browser}`);
    console.log(`headless : ${headless}`);
}
launchBrowser();
function runTests(callback: () => void): void {

    console.log("Running Tests ....");

    callback();

}
runTests(() => {

    console.log("Tests Completed Successfully");

});