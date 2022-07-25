const expectChai = require('chai').expect

describe('Functional Testing on Application', async()=>       
{

    xit ('Scrolling and Mouse Hover',async()=>
    {
        await browser.url('https://rahulshettyacademy.com/AutomationPractice/')
        await $("#mousehover").scrollIntoView()
        await $("#mousehover").moveTo()
        await $("=Top").click()
        await browser.url("http://only-testing-blog.blogspot.com/2014/09/selectable.html")
        await $("button").doubleClick()
        console.log(await browser.isAlertOpen())
        expectChai(await browser.isAlertOpen()).to.be.true
        expectChai(await browser.getAlertText()).to.equal("You double clicked me.. Thank You..")
        await browser.acceptAlert()
    })

    xit ('Web Tables Validation',async()=>
    {
        await browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers")
        await $("tr th:nth-child(1)").click()
        //retrieve list of vegie names into array A
        //sort the array A -> Array B
        //compare Array A and Array B
        const veggiesLocators = await $$("tr td:nth-child(1)")
        const OriginalVeggiesName = await Promise.all(veggiesLocators.map(veggie => veggie.getText()))
        console.log(OriginalVeggiesName)
        veggies = OriginalVeggiesName.slice()
        sortedVeggies = veggies.sort()
        console.log(sortedVeggies)
        expectChai(OriginalVeggiesName).to.eql(sortedVeggies)



    })

    it ('Web Tables Filter Validation',async()=>
    {
        await browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers")
        await $("#search-field").setValue("tomato")
        const veggieLocators = await $$("tr td:nth-child(1)")
        await expect(veggieLocators).toBeElementsArrayOfSize({eq:1})
        console.log(await veggieLocators[0].getText())
        await expect(await veggieLocators[0]).toHaveTextContaining("Tomato")

    })
})