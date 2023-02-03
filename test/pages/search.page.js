const Page = require ('./page');
     
class SearchPage extends Page{
 
    //page locators:
        get searchResultBtn() { return $('//div[7]/div/div/div/a') }
 
    //page actions
        async searchResult () {
            await this.searchResultBtn.waitForDisplayed({ timeout : 5000 });
            await this.searchResultBtn.click();
        }
    }
 
module.exports = new SearchPage();