const loginPage = require("../pageObjects/loginPage")

describe('E-commerce Application', async()=>        //function() is the same as ()=>
{
    it ('Login Fail Page',async()=>
    {
    //webdriver.io Async in JS
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        //promise: resolved, pending, rejected
        console.log(await browser.getTitle())
        await expect(browser).toHaveTitleContaining("Rahul Shetty Academy")
        //css, xpath 
        await loginPage.Login("rahulshettyacademy","learnig")
        await console.log(await loginPage.alert.getText())
        browser.waitUntil(async()=> await loginPage.signIn.getAttribute('value') === 'Sign In',
        {
            timeout: 5000,
            timeoutMsg: "Error message is not showing up"
        })
        await console.log(await loginPage.alert.getText())
        await expect(await loginPage.textInfo).toHaveTextContaining("username is rahulshettyacademy and Password is learning")
    })

 
})