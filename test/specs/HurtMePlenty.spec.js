// [Hurt Me Plenty]

//  When performing the task, you need to use the capabilities of Selenium WebDriver, the unit testing framework and the Page Object concept. Automate the following script:

const HomePage = require ('../pages/home.page');
const SearchPage = require ('../pages/search.page');
const CalculatorPage = require("../pages/calculator.page");

describe('Hurt Me Plenty', () => {

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

    it('8.1. Check: VM Class', async () => {
        await CalculatorPage.checkProvisioningModelValue();
    });

    it('8.2. Check: Instance type', async () => {
        await CalculatorPage.checkMachineTypeValue();
    });

    it('8.3. Check: Region', async () => {
        await CalculatorPage.checkDatacenterLocationValue();
    });

    it('8.4. Check: local SSD', async () => {
        await CalculatorPage.checkLocalSSDValue();
    });

    it('8.5. Check: commitment term', async () => {
        await CalculatorPage.checkCommitedUsageValue();
    });

    it('9. Check that the rental amount per month matches the amount received when passing the test manually.', async () => {
        await CalculatorPage.estimatedCost();
    });
});
