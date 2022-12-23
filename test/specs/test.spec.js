// Install  WebdriverIO  and do the following task:

// (I Can Win) When performing the task, you must use the capabilities of Selenium WebDriver, the unit testing framework and the Page Object concept. Automate the following script:

describe("Test Suite", () => {
    it("First Test", async () =>{

        // 1. Open https://pastebin.com or a similar service in any browser
        await browser.url("https://pastebin.com");
    
        // 2. Create a New Paste with the following details:

        // * Code: "Hello from WebDriver"
        await $('textarea[id="postform-text"]').setValue("Hello from WebDriver");

        // * Paste Expiration: "10 Minutes"
        await $('div[class="form-group field-postform-expiration"]').scrollIntoView();
        await $('div[class="form-group field-postform-expiration"]').click();       
        browser.keys(['Down arrow', 'Down arrow', 'Enter']);

        // * Paste Name / Title: "helloweb"
        await $('input[id="postform-name"]').setValue("helloweb");
        
        // Submit Paste
        await $('button[class="btn -big"]').click();
    })
})


// (Bring It On) When performing the task, you need to use the capabilities of Selenium WebDriver, the unit testing framework and the Page Object concept. Automate the following script:

describe("Test Suite", () => {
    it("Second Test", async () =>{

        // 1. Open https://pastebin.com or a similar service in any browser
        await browser.url("https://pastebin.com");
    
        // 2. Create a New Paste with the following details:

        // * Code:
        // git config --global user.name "New Sheriff in Town"
        // git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")
        // git push origin master --force
        await $('textarea[id="postform-text"]').setValue('git config --global user.name "New Sheriff in Town"\ngit reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")\ngit push origin master --force"');

        // * Syntax Highlighting: "Bash"
        await $('div[class="form-group field-postform-format"]').click();
        await $('input[class="select2-search__field"]').setValue("Bash");
        browser.keys('Enter');

        // * Paste Expiration: "10 Minutes"
        await $('div[class="form-group field-postform-expiration"]').scrollIntoView();
        await $('div[class="form-group field-postform-expiration"]').click();       
        browser.keys(['Down arrow', 'Down arrow', 'Enter']);

        // * Paste Name / Title: "how to gain dominance among developers"
        await $('input[id="postform-name"]').setValue("how to gain dominance among developers");

        // Submit Paste -> uncomment at the end
        await $('button[class="btn -big"]').click();

        // 3. Save paste and check the following:

        // * Browser page title matches Paste Name / Title
        const pageTitle = browser.getTitle();
        expect(await pageTitle).toEqual('how to gain dominance among developers - Pastebin.com');

        // * Syntax is suspended for bash
        const syntaxHighlighting = await $('//a[text()="Bash"]');
        expect(await syntaxHighlighting.getText()).toEqual('Bash');

        // * Check that the code matches the one entered in paragraph 2
        const pasteCode = await $('<ol>');
        expect(await pasteCode.getText()).toEqual('git config --global user.name "New Sheriff in Town"\ngit reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")\ngit push origin master --force"');
    })
})