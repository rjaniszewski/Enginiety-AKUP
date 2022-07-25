const expectChai = require('chai').expect

describe('UI Controls Test Suite', async()=>        //function() is the same as ()=>
{

    xit ('UI Controls',async()=>
    {
    await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
    await $("#username").setValue("rahulshettyacademy") 
    const password = $("//input[@type='password']")
    await password.setValue("learning")
    //what if multiple elements
    const radioButtons = await $$('.customradio')
    const userDropdown = radioButtons[1]
    await userDropdown.$('span').click()
    const modal = await $('.modal-body')
    await modal.waitForDisplayed()
    await $('#cancelBtn').click()
    console.log(await $$('.customradio')[0].$('span').isSelected())
    await userDropdown.$('span').click()
    await modal.waitForDisplayed()
    await $('#okayBtn').click()
    //valdate pop up not show up when 
    await $$('.customradio')[0].$('span').click()
    await expect(modal).not.toBeDisplayed()
    const dropdown = await $('select.form-control')
    await dropdown.selectByAttribute('value','teach')
    await dropdown.selectByVisibleText('Consultant')
    await dropdown.selectByIndex(0)
    await browser.pause(3000)
    console.log(await dropdown.getValue())
    expectChai(await dropdown.getValue()).to.equal('stud')
    //chai assertions

    })

    xit ('Dynamic Dropdown Controls',async()=>

    {
        await browser.url('https://rahulshettyacademy.com/AutomationPractice/')
        await $('#autocomplete').setValue('ind')
        await browser.pause(3000)
        let items = await $$("[class='ui-menu-item'] div")
        for(var i = 0; i< await items.length; i++)
        {
            //console.log(await items[i].getText())
            if (await items[i].getText() === "India")
            {
                await items[i].click()
            }
        }

    })

    it ('Dynamic Dropdown Controls',async()=>

    {
        await browser.url('https://rahulshettyacademy.com/AutomationPractice/')
        const element = await $$("input[type='checkbox']")
        await element[1].click()
        console.log(await element[1].isSelected())
        console.log(await element[2].isSelected())
        await browser.saveScreenshot("screenshot.png")
    })
})