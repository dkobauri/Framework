const Page = require ('./page');
     
class CalculatorPage extends Page{
 
    //page locators:

        // get calculatorFrame() { return $('//iframe[@allow="clipboard-write https://cloud-dot-devsite-v2-prod.appspot.com"]') };
        // get calculatorSubFrame() { return $('//iframe[@id="myFrame"]') };  
        get calculatorIcon() { return $('//md-pagination-wrapper/md-tab-item[1]') };
        get instanceInput() { return $('//input[@name="quantity"]') };
        get instanceDescription() { return $('//input[@id="input_93"]') };
        get operatingSoftwareChoice() { return $('//md-select[@id="select_105"]') };
        get operatingSoftwareOption() { return $('//md-option[@id="select_option_94"]') };
        get provisioningModelChoice() { return $('//md-select[@id="select_109"]') };
        get provisioningModelOption() { return $('//md-option[@id="select_option_107"]') };
        get machineTypeChoice() { return $('//md-select[@id="select_119"]') };
        get machineTypeOption() { return $('//md-option[@id="select_option_270"]') };
        get addGPUCheckBox() { return $('//div/div[2]/form/div[4]/div/md-input-container/md-checkbox') };
        get gpuTypeChoice() { return $('//md-select[@id="select_424"]') };
        get gpuTypeOption() { return $('//md-option[@id="select_option_430"]') };
        get numberOfGPUChoice() { return $('//md-select[@id="select_426"]') };
        get numberOfGPUOption() { return $('//md-option[@id="select_option_437"]') };
        get localSSDChoice() { return $('//md-select[@id="select_152"]') };
        get localSSDOption() { return $('//md-option[@id="select_option_151"]') };
        get datacenterLocationChoice() { return $('//md-select[@id="select_155"]') };
        get datacenterLocationOption() { return $('//md-option[@id="select_option_295"]') };
        get commitedUsageChoice() { return $('//md-select[@id="select_160"]') };
        get commitedUsageOption() { return $('//md-option[@id="select_option_158"]') };
        get submitBtn() { return $('//div/div[1]/form/div[19]/button') };
        get estimateResult() { return $('//md-content[@id="compute"]/md-list/md-list-item[4]/div[2]') };
        get emailEstimateBtn() { return $('//button[@id="Email Estimate"]') };
        get emailInputText() { return $('//input[@id="input_470"]') };
        get sendEmailBtn() { return $('//button[@aria-label="Send Email"]') };

    //page actions
 
        //Frame
        // async switchToCalculatorFrame() {
        //     let calculatorFrame = await this.calculatorFrame;                          
        //     await browser.switchToFrame(calculatorFrame);
        //     let calculatorSubFrame = await this.calculatorSubFrame;                          
        //     await browser.switchToFrame(calculatorSubFrame);            
        // }; 
        
        //URL
        open(){
            return super.open('https://cloudpricingcalculator.appspot.com/');
        } 

        //Header Button
        async computeEngineBtn () {
            await this.calculatorIcon.waitForDisplayed({ timeout : 5000 });
            await this.calculatorIcon.click();
        }

        //Field #1
        async numberOfInstances (num) {
            await this.instanceInput.setValue(num);
        }

        //Field #2
        async whatAreTheseInstancesFor (txt) {
            await this.instanceDescription.setValue(txt);
        }

        //Field #3
        async operatingSystem () {
            await this.operatingSoftwareChoice.click();
            await this.operatingSoftwareOption.waitForDisplayed({ timeout : 5000 });
            await this.operatingSoftwareOption.click();
        } 

        //Field #4
        async provisioningModel () {
            await this.provisioningModelChoice.click();
            await this.provisioningModelOption.waitForDisplayed({ timeout : 5000 });
            await this.provisioningModelOption.click();
        } 

        //Field #5
        async machineType () {
            await this.machineTypeChoice.click();
            await this.machineTypeOption.waitForDisplayed({ timeout : 5000 });
            await this.machineTypeOption.click();
        } 

        //Field #6
        async addGPU () {
            await this.addGPUCheckBox.click();
        } 
        //Field #7
        async gpuType () {
            await this.gpuTypeChoice.waitForDisplayed({ timeout : 5000 });
            await this.gpuTypeChoice.click();
            await this.gpuTypeOption.waitForDisplayed({ timeout : 5000 });
            await this.gpuTypeOption.click();
        } 

        //Field #8
        async numberOfGPUs () {
            await this.numberOfGPUChoice.waitForDisplayed({ timeout : 5000 });
            await this.numberOfGPUChoice.click();
            await this.numberOfGPUOption.waitForDisplayed({ timeout : 5000 });
            await this.numberOfGPUOption.click();
        } 

        //Field #9
        async localSSD () {
            await this.localSSDChoice.click();
            await this.localSSDOption.waitForDisplayed({ timeout : 5000 });
            await this.localSSDOption.click();
        } 

        //Field #10
        async datacenterLocation () {
            await this.datacenterLocationChoice.click();
            await this.datacenterLocationOption.waitForDisplayed({ timeout : 5000 });
            await this.datacenterLocationOption.click();
        } 

        //Field #11
        async commitedUsage () {
            await this.commitedUsageChoice.click();
            await this.commitedUsageOption.waitForDisplayed({ timeout : 5000 });
            await this.commitedUsageOption.click();
        } 

        //Submit
        async submit () {
            //await browser.switchToParentFrame();
            await this.submitBtn.click();
        } 

        //Check
        async checkFieldValues () {
            expect(await this.provisioningModelChoice.getText()).toEqual('Regular');
            expect(await this.machineTypeChoice.getText()).toEqual('n1-standard-8 (vCPUs: 8, RAM: 30 GB)');
            expect(await this.localSSDChoice.getText()).toEqual('2x375 Gb');
            expect(await this.datacenterLocationChoice.getText()).toEqual('Frankfurt (europe-west3)');
            expect(await this.commitedUsageChoice.getText()).toEqual('1 Year');
        } 

        //Result
        async estimetedCost () {
            expect(await this.estimateResult.getText()).toEqual('USD 782.69');
        } 

        //Email
        async emailEstimate () {
            await this.emailEstimateBtn.click();
        } 

        //Field #12
        async emailInput () {
            await this.emailInputText.waitForDisplayed({ timeout : 5000 });
            await this.emailInputText.click();
            await browser.keys(["\uE051" + 'v']);
        }

        //Send
        async sendEmail () {
            await browser.pause(5000);
            await this.sendEmailBtn.click();
        } 
    }
 
module.exports = new CalculatorPage();