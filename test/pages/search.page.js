const Page = require ('./page');
     
class SearchPage extends Page{
 
    //page locators:
    get searchResultBtn() { return $('//div[@class="gs-title"]//b[contains(text(),"Google Cloud Platform Pricing Calculator")]') };
 
    //page actions
    async searchResult () {
        await this.searchResultBtn.waitForDisplayed({ timeout : 5000 });
        await this.searchResultBtn.click();
    };
}
 
module.exports = new SearchPage();