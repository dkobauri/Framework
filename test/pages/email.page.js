
const Page = require ('./page');
     
class EmailPage extends Page{

    //page locators:
        get generateNewEmail() { return $('//a[@title="Disposable Email Address Generator creates a new fake email for you in one click! Freely use this anounymous email on Internet"]') };
        get copyEmailBtn() { return $('//div[@class="nw"]/div') };
        get checkInboxBtn() { return $('//div[@class="nw"]/button[2]') };
        get refreshBtn() { return $('button[id="refresh"]') };
        get monthlyCostValue() { return $('//div[@id="mail"]/div/div/table/tbody/tr[2]/td/table/tbody/tr[2]/td[2]/h3') };
        get mailFrame() { return $('//iframe[@id="ifmail"]') };

    //page actions:  

        //Copy
        async copyEmail () {
            await this.generateNewEmail.click();
            await this.copyEmailBtn.click();
        }

        //Mail
        async newMail () {
            await this.checkInboxBtn.click();
            await browser.pause(5000);
            await this.refreshBtn.click();
        }

        //Frame
        async switchToMailFrame() {
            let mailFrame = await this.mailFrame;                          
            await browser.switchToFrame(mailFrame);
        }; 

        //check
        async monthlyCost () {
            await browser.pause(10000);
            expect(await this.monthlyCostValue.getText()).toEqual('USD 782.69');
        }
}

module.exports = new EmailPage();