const Page = require ('./page');
     
class CalculatorPage extends Page{
 
    //page locators:
        get calculatorIcon() { return $('//md-pagination-wrapper/md-tab-item[1]') }
        get instanceInput() { return $('//div/div[1]/form/div[1]/div[1]/md-input-container/input') }
        get instanceDescription() { return $('//div/div[1]/form/div[2]/div[1]/md-input-container/input') }
        get operatingSoftwareChoice() { return $('//div/div[1]/form/div[3]/div[1]/md-input-container/md-select') }
        get operatingSoftwareOption() { return $('//body/div[3]/md-select-menu/md-content/md-option[1]') }
        get provisioningModelChoice() { return $('//div/div[1]/form/div[4]/div[1]/md-input-container/md-select') }
        get provisioningModelOption() { return $('//body/div[4]/md-select-menu/md-content/md-option[1]') }
        get machineTypeChoice() { return $('//div/div[1]/form/div[7]/div[1]/md-input-container/md-select') }
        get machineTypeOption() { return $('//body/div[5]/md-select-menu/md-content/md-optgroup[3]/md-option[3]') }
        get addGPUCheckBox() { return $('//div/div[2]/form/div[4]/div/md-input-container/md-checkbox') }
        get gpuTypeChoice() { return $('//div/div[2]/form/div[5]/div/div/div/md-input-container[1]/md-select') }
        get gpuTypeOption() { return $('//body/div[6]/md-select-menu/md-content/md-option[3]') }
        get numberOfGPUChoice() { return $('//div/div[2]/form/div[5]/div/div/div/md-input-container[2]/md-select') }
        get numberOfGPUOption() { return $('//body/div[7]/md-select-menu/md-content/md-option[5]') }
        get localSSDChoice() { return $('//div/div[2]/form/div[9]/div/md-input-container/md-select') }
        get localSSDOption() { return $('//body/div[8]/md-select-menu/md-content/md-option[2]') }
        get datacenterLocationChoice() { return $('//div/div[2]/form/div[11]/div/md-input-container/md-select') }
        get datacenterLocationOption() { return $('//body/div[9]/md-select-menu/md-content/md-optgroup/md-option[12]') }
        get commitedUsageChoice() { return $('//div/div[2]/form/div[12]/div/md-input-container/md-select') }
        get commitedUsageOption() { return $('//body/div[10]/md-select-menu/md-content/md-option[2]') }
        get submitBtn() { return $('//div/div[1]/form/div[19]/button') }
        get estimateResult() { return $('//md-card-content[2]/md-card/md-card-content/div/div/div/md-content/md-list/md-list-item[6]') }

    //page actions
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
            await this.operatingSoftwareOption.click();
        } 

        //Field #4
        async provisioningModel () {
            await this.provisioningModelChoice.click();
            await this.provisioningModelOption.click();
        } 

        //Field #5
        async machineType () {
            await this.machineTypeChoice.click();
            await this.machineTypeOption.click();
        } 

        //Field #6
        async addGPU () {
            await this.addGPUCheckBox.click();
        } 
        //Field #7
        async gpuType () {
            await this.gpuTypeChoice.click();
            await this.gpuTypeOption.click();
        } 

        //Field #8
        async numberOfGPUs () {
            await this.numberOfGPUChoice.click();
            await this.numberOfGPUOption.click();
        } 

        //Field #9
        async localSSD () {
            await this.localSSDChoice.click();
            await this.localSSDOption.click();
        } 

        //Field #10
        async datacenterLocation () {
            await this.datacenterLocationChoice.click();
            await this.datacenterLocationOption.click();
        } 

        //Field #11
        async commitedUsage () {
            await this.commitedUsageChoice.click();
            await this.commitedUsageOption.click();
        } 

        //Submit
        async submit () {
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
            expect(await this.estimateResult.getText()).toEqual('Estimated Component Cost: USD 782.69 per 1 month');
        } 


    }
 
module.exports = new CalculatorPage();