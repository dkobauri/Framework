const Page = require ('./page');
     
class CalculatorPage extends Page{
 
    //page locators:
    get calculatorFrame() { return $('//iframe[@allow="clipboard-write https://cloud-dot-devsite-v2-prod.appspot.com"]') };
    get calculatorSubFrame() { return $('#myFrame') };  
    get calculatorIcon() { return $('md-tab-item.md-tab.ng-scope.ng-isolate-scope.md-ink-ripple.md-active') };
    get instanceInput() { return $('#input_92') };
    get instanceDescription() { return $('#input_93') };
    get operatingSoftwareField() { return $('#select_105') };
    get operatingSoftwareOption() { return $('#select_option_94') };
    get provisioningModelField() { return $('#select_109') };
    get provisioningModelOption() { return $('#select_option_107') };
    get seriesField() { return $('#select_117') };
    get seriesOption() { return $('//div[contains(text(), "N1")]') };
    get machineTypeField() { return $('#select_119') };
    get machineTypeOption() { return $('//div[contains(text(), "n1-standard-8 (vCPUs: 8, RAM: 30GB)")]') };
    get addGPUCheckBox() { return $('//md-checkbox[@ng-model="listingCtrl.computeServer.addGPUs"]') };
    get gpuTypeField() { return $('//md-select[@placeholder="GPU type"]') };
    get gpuTypeOption() { return $('//div[contains(text(), "NVIDIA Tesla V100")]') };
    get numberOfGPUField() { return $('//md-select[@placeholder="Number of GPUs"]') };
    get numberOfGPUOption() { return $('#select_option_479') };
    get localSSDField() { return $('#select_425') };
    get localSSDOption() { return $('//div[ contains(text(), "2x375 GB")]') };
    get datacenterLocationField() { return $('#select_125') };
    get datacenterLocationOption() { return $('#select_option_230') };
    get commitedUsageField() { return $('#select_132') };
    get commitedUsageOption() { return $('#select_option_130') };
    get submitBtn() { return $('//button[@ng-click="listingCtrl.addComputeServer(ComputeEngineForm);"]') };
    get estimateVMClassResult() { return $('//div[contains(text(), "Provisioning model:")]') };    
    get estimateInstanceTypeResult() { return $('//div[contains(text(), "Instance type:")]') };
    get estimateRegionResult() { return $('//div[contains(text(), "Region:")]') };
    get estimateLocalSSDResult() { return $('//div[contains(text(), "Local SSD:")]') };
    get estimateCommitmentTermResult() { return $('//div[contains(text(), "Commitment term:")]') };
    get estimateCostResult() { return $('//b[contains(text(), "Total Estimated Cost")]') };
    get emailEstimateBtn() { return $('//button[@title="Email Estimate"]') };
    get emailInputText() { return $('#input_546') };
    get sendEmailBtn() { return $('//button[contains(text(), "Send Email")]') };

    //page actions
    //Frame
    async switchToCalculatorFrame() {
        let calculatorFrame = await this.calculatorFrame;                          
        await browser.switchToFrame(calculatorFrame);
        let calculatorSubFrame = await this.calculatorSubFrame;                          
        await browser.switchToFrame(calculatorSubFrame);            
    }; 
        
    //Header Button
    async computeEngineBtn () {
        await this.calculatorIcon.waitForDisplayed({ timeout : 5000 });
        await this.calculatorIcon.click();
    };

    //Field #1
    async numberOfInstances (num) {
        await this.instanceInput.setValue(num);
    };

    //Field #2
    async whatAreTheseInstancesFor (txt) {
        await this.instanceDescription.setValue(txt);
    };

    //Field #3
    async operatingSystem () {
        await this.operatingSoftwareField.click();
        await this.operatingSoftwareOption.waitForDisplayed({ timeout : 5000 });
        await this.operatingSoftwareOption.click();
    };

    //Field #4
    async provisioningModel () {
        await this.provisioningModelField.click();
        await this.provisioningModelOption.waitForDisplayed({ timeout : 5000 });
        await this.provisioningModelOption.click();
    };

    //Field #5
    async series () {
        await this.seriesField.click();
        await this.seriesOption.waitForDisplayed({ timeout : 5000 });
        await this.seriesOption.click();
    };

    //Field #6
    async machineType () {
        await this.machineTypeField.click();
        await this.machineTypeOption.waitForDisplayed({ timeout : 5000 });
        await this.machineTypeOption.click();
    };

    //Field #7
    async addGPU () {
        const addGPUCheckBoxElement = await this.addGPUCheckBox;
        await addGPUCheckBoxElement.scrollIntoView({ block: 'center', inline: 'center' });
        await this.addGPUCheckBox.click();
    };
    
    //Field #8
    async gpuType () {
        await this.gpuTypeField.waitForDisplayed({ timeout : 5000 });
        await this.gpuTypeField.click();
        await this.gpuTypeOption.waitForDisplayed({ timeout : 5000 });
        await this.gpuTypeOption.click();
    };

    //Field #9
    async numberOfGPUs () {
        await this.numberOfGPUField.waitForDisplayed({ timeout : 5000 });
        await this.numberOfGPUField.click();
        await this.numberOfGPUOption.waitForDisplayed({ timeout : 5000 });
        await this.numberOfGPUOption.click();
    };

    //Field #10
    async localSSD () {
        await this.localSSDField.click();
        await this.localSSDOption.waitForDisplayed({ timeout : 5000 });
        await this.localSSDOption.click();
    }; 

    //Field #11
    async datacenterLocation () {
        const datacenterLocationFieldElement = await this.datacenterLocationField;
        await datacenterLocationFieldElement.scrollIntoView({ block: 'center', inline: 'center' });
        await this.datacenterLocationField.click();
        await this.datacenterLocationOption.waitForDisplayed({ timeout : 5000 });
        await this.datacenterLocationOption.click();
    }; 

    //Field #12
    async commitedUsage () {
        const commitedUsageFieldElement = await this.commitedUsageField;
        await commitedUsageFieldElement.scrollIntoView({ block: 'center', inline: 'center' });
        await this.commitedUsageField.click();
        await this.commitedUsageOption.waitForDisplayed({ timeout : 5000 });
        await this.commitedUsageOption.click();
    };

    //Submit
    async submit () {
        
        await this.submitBtn.click();
    }; 

    //Check 1
    async checkProvisioningModelValue () {
        await expect(this.estimateVMClassResult).toHaveTextContaining('Regular');
    }; 

    //Check 2
    async checkMachineTypeValue () {
        await expect(this.estimateInstanceTypeResult).toHaveTextContaining('n1-standard-8');
    }; 

    //Check 3
    async checkLocalSSDValue () {
        await expect(this.estimateLocalSSDResult).toHaveTextContaining('2x375 GiB');
    }; 

    //Check 4
    async checkDatacenterLocationValue () {
        await expect(this.estimateRegionResult).toHaveTextContaining('Frankfurt');
    }; 

    //Check 5
    async checkCommitedUsageValue () {
        await expect(this.estimateCommitmentTermResult).toHaveTextContaining('1 Year');
    }; 

    //Result
    async estimatedCost () {
        await expect(this.estimateCostResult).toHaveTextContaining('USD 1,081.20');
    }; 

    //Email
    async emailEstimate () {
        const emailEstimateBtnElement = await this.emailEstimateBtn;
        await emailEstimateBtnElement.scrollIntoView({ block: 'center', inline: 'center' });
        await this.emailEstimateBtn.click();

    }; 

    //Field #12
    async emailInput () {
        const ctrlKeyCode = "\uE051";
        await this.emailInputText.waitForDisplayed({ timeout : 5000 });
        await this.emailInputText.click();
        await browser.keys([ctrlKeyCode + 'v']);
    };

    //Send
    async sendEmail () {
        const sendEmailBtnElement = await this.sendEmailBtn;
        await sendEmailBtnElement.scrollIntoView({ block: 'center', inline: 'center' });
        await this.sendEmailBtn.click();
    };
}
 
module.exports = new CalculatorPage();