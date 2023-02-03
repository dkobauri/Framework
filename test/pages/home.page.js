const Page = require ('./page');
     
class HomePage extends Page{
 
    //page locators:
        
        get searchIcon() { return $('div[class="devsite-searchbox"]') }
        get searchField() { return $('input[name="q"]') }
 
    //page actions:  

        //URL
        async open (url) {
            await super.open(url)
        }   

        //Search
        async searchInput (searchText) {
            await this.searchIcon.waitForDisplayed({ timeout : 5000 })
            await this.searchIcon.click();
            await this.searchField.setValue(searchText);
        }
    }

module.exports = new HomePage();