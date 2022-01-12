const puppeteer = require("puppeteer");

console.log("Starting browser automation...")

const launchBrowser= puppeteer.launch({
    headless: false,
    slowMo: true,
    defaultViewport: null,
    args:["--start-maximized"]
});
let page;
launchBrowser.then(function(browser){
    console.log("Browser launched");
    const pagesArr= browser.pages();
    return pagesArr;
}).then(function(pages){
    console.log("got all tabs");
    //got current tab
    page= pages[0];
    googlePage=page.goto("https://www.google.com/"); 
    return googlePage;
}).then(function(){
    waitForInputSelector= page.waitForSelector(".gLFyf.gsfi", {visible:true}); 
    return waitForInputSelector;
}).then(function(){
    console.log("google page opened");
    websiteName= page.type(".gLFyf.gsfi", "geeksforgeeks");
    return websiteName;
}).then(function(){
    console.log("website name is typed");
    enterPressed= page.keyboard.press("Enter");
    return enterPressed;
}).then(function(){
    waitForLinkElement= page.waitForSelector(".LC20lb.MBeuO.DKV0Md", { visible: true });
    return waitForLinkElement;
})
.then(function(){
    console.log("enter key pressed");
    clickFirstLink= page.click(".LC20lb.MBeuO.DKV0Md");
    return clickFirstLink;
})
.then(function(){
    console.log("website opened");
})
.catch(function(err){
    console.error(err);
})

console.log("Done");