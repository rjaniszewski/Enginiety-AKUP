const expectChai = require('chai').expect

describe('E-commerce Application', async()=>       
{
    it ('E2E Test',async()=>
    {
        const products = ['iphone X', 'Blackberry']
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await browser.maximizeWindow()
        await $("#username").setValue("rahulshettyacademy") 
        const password = $("//input[@type='password']")
        await password.setValue("learning")
        await $("#signInBtn").click()
        const link = await $("*=Checkout")
        await link.waitForExist() //link text ('<a' - is always a link)
        const cards = await $$("div[class='card h-100']")
        for (let i = 0; i < await cards.length; i++)
        {
            const card = await cards[i].$("div h4 a")
            //console.log(await card.getText())
            if(products.includes(await card.getText()))
            {
                await cards[i].$(".card-footer button").click()
            }
        }
        await link.click()
        const productPrices = await $$("//tr/td[4]/strong")
        //string -> integer
        const sumOfProducts = (await Promise.all(await productPrices.map(async (productPrices)=> parseInt((await productPrices.getText()).split(".")[1].trim())))) //mapowanie -> zamiana stringa na integer, split (odzzielenie dwóch części - prawa część wyrażenia to [1], trim(pozbycie się niepotrzebnych spacji))
        .reduce((acc,price)=>acc+price,0)
        console.log(sumOfProducts)
        const total = await $("td h3 strong").getText()
        const totalValue = parseInt(total.split(".")[1].trim())
        await expectChai(sumOfProducts).to.equal(totalValue)
        await $(".btn-success").click()
        await $("#country").setValue("ind")
        await $(".lds-elipsis").waitForExist({reverse:true})
        await $("=India").click()
        await $("input[type='submit']").click()
        await expect($(".alert")).toHaveTextContaining("Your order will be delivered in next few weeks :-).")

    })

})
