module.exports = class Page {
       
    //to go to a URL 
    open (url) {
        return browser.url(url);
    };
}