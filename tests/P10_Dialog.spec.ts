import {test,expect} from '@playwright/test';

test.describe('Dialog Test', ()=>{
    test.beforeEach('BeforeEach', async({page})=>{
        await page.goto('https://testautomationpractice.blogspot.com/')
        await page.setViewportSize({width:1920, height:1080});
    })
    test('Simple Alert Function', async({page})=>{

        page.on("dialog",dialog=>{
            expect(dialog.type()).toBe('Simple Alert')
            expect(dialog.message()).toBe('I am an alert box!')
            dialog.accept();
        })
        await page.locator("#Simple Alert").click;

    })

test('Confirmation Alert', async({page})=>{
    page.on('dialog', dialog=>{
        expect(dialog.type()).toBe('Confirmation')
        expect(dialog.message()).toBe('You pressed OK!')
        // dialog.accept();
        dialog.dismiss();
    })
    
     
     await page.evaluate(()=>{window.scrollBy(0,500);});
     //await page.getByText('Confirmation Alert').click()
     await page.click("//*[text()='Confirmation Alert']");
     expect (await page.locator('#demo').textContent()).toBe('You pressed Cancel!')
})
test('Prompt', async({page}) => {
    let promptValue:string;
    promptValue='Murat';

    page.on('dialog',dialog=>{
        dialog.accept(promptValue)
        //dialog.dismiss();
    })

    await page.click("//*[text()='Prompt Alert']")

    expect(await page.locator('#demo').textContent()).toBe(`Hello ${promptValue}! How are you today?`)
})
})