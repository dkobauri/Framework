
const Page = require ('./page');
     
class EmailPage extends Page{

    //page locators:
    get generateNewEmail() { return $('//a[@title="Disposable Email Address Generator creates a new fake email for you in one click! Freely use this anounymous email on Internet"]') };
    get copyEmailBtn() { return $('#cprnd') };
    get checkInboxBtn() { return $('//i[contains(text(), "")]') };
    get refreshBtn() { return $('#refresh') };
    get monthlyCostValue() { return $('//h2[contains(text(), "Estimated Monthly Cost:")]') };
    get mailFrame() { return $('#ifmail') };

    //page actions:  
    //Copy
    async copyEmail () {
        await this.generateNewEmail.click();
        await this.copyEmailBtn.click();
    };

    //Mail
    async newMail () {
        await this.checkInboxBtn.click();
        await browser.pause(5000);
        await this.refreshBtn.click();
    };

    //Frame
    async switchToMailFrame() {
        let mailFrame = await this.mailFrame;                          
        await browser.switchToFrame(mailFrame);
    };
    //check
    async monthlyCost () {
        await browser.pause(5000);
        await expect(this.monthlyCostValue).toHaveTextContaining('USD 1,081.20');
    };
}

module.exports = new EmailPage();