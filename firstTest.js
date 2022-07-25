describe('E-commerce Application', async()=>        //function() is the same as ()=>
{
    xit ('Login Fail Page',async()=>
    {
    //webdriver.io Async in JS
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        //promise: resolved, pending, rejected
        console.log(await browser.getTitle())
        await expect(browser).toHaveTitleContaining("Rahul Shetty Academy")
        //css, xpath 
        await $("#username").setValue("rahulshettyacademy") 
        const password = $("//input[@type='password']")
        await password.setValue("learnings")
        await $("#signInBtn").click()
        await console.log(await $(".alert-danger").getText())
        browser.waitUntil(async()=> await $("#signInBtn").getAttribute('value') === 'Sign In',
        {
            timeout: 5000,
            timeoutMsg: 'Error message is not showing up'
        })
        await console.log(await $(".alert-danger").getText())
        await expect($('p')).toHaveTextContaining('username is rahulshettyacademy and Password is learning')
    })

    it ('Login Succes Page',async()=>
    {
    await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
    await $("#username").setValue("rahulshettyacademy") 
    const password = $("//input[@type='password']")
    await password.setValue("learning")
    await $("#signInBtn").click()
    await $('.btn-primary').waitForExist()
    await expect(browser).toHaveUrlContaining('shop')
    await expect(browser).toHaveTitle('ProtoCommerce')

    })
})