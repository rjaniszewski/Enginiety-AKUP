const expectChai = require('chai').expect

describe('Windows and Frames Miscellanous', async()=>        
{
    xit('Parent and Child Windows Switch',async()=>

    {
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await $(".blinkingText").click()
        const handles = await browser.getWindowHandles() //2 windows
        await browser.switchToWindow(handles[1]) //when open by application
        console.log(await $("h1").getText())
        console.log(await browser.getTitle())
        await browser.closeWindow()
        await browser.switchToWindow(handles[0])
        console.log(await browser.getTitle())
        await browser.newWindow("https://rahulshettyacademy.com")
        console.log(await browser.getTitle())
        await browser.pause(3000)
        await browser.switchWindow("https://rahulshettyacademy.com/loginpagePractise/") //when open by automation
        await $("#username").setValue("helloiswitchedback")
        await browser.pause(3000)


    })

    it('Frames Switch',async()=>
    {
        await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        await $("#mousehover").scrollIntoView()
        console.log(await $$("a").length) //27
        await browser.switchToFrame(await $("#courses-iframe"))
        console.log(await $("=Courses").getTagName())
        console.log(await $$("a").length) //111
        await browser.switchToFrame(null) //exit the frame and back to normal page
        console.log(await $$("a").length) //27


    })
})