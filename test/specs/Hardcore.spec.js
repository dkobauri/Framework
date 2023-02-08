// [Hardcore]

// When performing the task, you need to use the capabilities of Selenium WebDriver, the unit testing framework and the Page Object concept. Automate the following script:

const HomePage = require ('../pages/home.page');
const SearchPage = require ('../pages/search.page');
const CalculatorPage = require("../pages/calculator.page");
const EmailPage = require("../pages/email.page");

describe('Hardcore', () => {

    it('1. Open https://cloud.google.com/', async () => {
        await HomePage.open("https://cloud.google.com/")
    });

    it('2. By clicking the search button on the portal at the top of the page, enter in the search field "Google Cloud Platform Pricing Calculator"', async () => {
        await HomePage.searchInput('Google Cloud Platform Pricing Calculator');
    });

    it('3. Start the search by clicking the search button.', async () => {
        await browser.keys('Enter');
    });

    it('4. In the search results, click "Google Cloud Platform Pricing Calculator" and go to the calculator page.', async () => {
        await SearchPage.searchResult();
    });

    it('5. Activate the COMPUTE ENGINE section at the top of the page', async () => {
        await CalculatorPage.switchToCalculatorFrame();
    });

    it('6.1. Fill in the form - Number of instances: 4', async () => {
        await CalculatorPage.numberOfInstances("4");
    });

    it('6.2. Fill in the form - What are these instances for ?: leave blank', async () => {
        await CalculatorPage.whatAreTheseInstancesFor("leave blank");
    });

    it('6.3. Fill in the form - Operating System / Software: Free: Debian, CentOS, CoreOS, Ubuntu, or other User Provided OS', async () => {
        await CalculatorPage.operatingSystem();
    });

    it('6.4. Fill in the form - VM Class: Regular', async () => {
        await CalculatorPage.provisioningModel();
    });

    it('6.5. Fill in the form - series: N1', async () => {
        await CalculatorPage.series();
    });

    it('6.6. Fill in the form - Instance type: n1-standard-8 (vCPUs: 8, RAM: 30 GB)', async () => {
        await CalculatorPage.machineType();
    });

    it('6.7. Fill in the form - Select Add GPUs', async () => {
        await CalculatorPage.addGPU();
    });

    it('6.7.1. Fill in the form - GPU type: NVIDIA Tesla V100', async () => {
        await CalculatorPage.gpuType();
    });

    it('6.7.2. Fill in the form - Number of GPUs: 1', async () => {
        await CalculatorPage.numberOfGPUs();
    });

    it('6.8. Fill in the form - Local SSD: 2x375 Gb', async () => {
        await CalculatorPage.localSSD();
    });

    it('6.9. Fill in the form - Datacenter location: Frankfurt (europe-west3)', async () => {
        await CalculatorPage.datacenterLocation();
    });

    it('6.10. Fill in the form - Commited usage: 1 Year', async () => {
        await CalculatorPage.commitedUsage();
    });

    it('7. Click Add to Estimate', async () => {
        await CalculatorPage.submit();
    });

    it('8. Select EMAIL ESTIMATE', async () => {
        await CalculatorPage.emailEstimate();
    });

    it('9. In a new tab, open https://10minutemail.com or a similar service for generating temporary emails', async () => {
        await browser.newWindow("https://yopmail.com/en/");
    });

    it('10. Copy the mailing address generated in 10minutemail', async () => {
        await EmailPage.copyEmail();
    });

    it('11. Return to the calculator, in the Email field enter the address from the previous paragraph', async () => {
        await browser.switchWindow('cloud.google.com');
        await CalculatorPage.switchToCalculatorFrame();
        await CalculatorPage.emailInput();
    });

    it('12. Press SEND EMAIL', async () => {
        await CalculatorPage.sendEmail();
    });

    it('13. Wait for the letter with the cost calculation and check that the Total Estimated Monthly Cost in the letter matches what is displayed in the calculator', async () => {
        await browser.switchWindow('yopmail.com');
        await EmailPage.newMail();
        await EmailPage.switchToMailFrame();
        await EmailPage.monthlyCost();
    });
});
