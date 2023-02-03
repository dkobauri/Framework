
const Page = require ('./page');
     
class EmailPage extends Page{

 
    //page locators:
        get copyEmailInput() { return $('input[id="mail_address"]') };
        get newMailbtn() { return $('div[id="copy_address"]') };
        get monthlyCostValue() { return $('//table/tbody/tr[2]/td/table/tbody/tr[2]/td[2]/h3') };

    //page actions:  

        //Copy
        async copyEmail () {
            await this.copyEmailInput.waitForDisplayed({ timeout : 5000 });
            await browser.pause(3000)
            await this.copyEmailInput.click();
            await browser.keys('\uE051' + 'a');
            await browser.keys('\uE051' + 'c');
        }

        //Mail
        async newMail () {
            await this.newMailbtn.click();
        }

        //check
        async monthlyCost () {
            expect(await this.monthlyCostValue.getText()).toEqual('USD 782.69');
        }
}

module.exports = new EmailPage();