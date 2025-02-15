import{test,expect} from '@playwright/test';

test.beforeEach(async({page})=>{
    await page.goto('https://testotomasyonu.com/');
    //her testten önce çalıştırılacak testi yazdım
})

test.describe('Test Otomasyonu Üye Kaydı',()=>{
    
test('Site Girişi',async({page})=>{
    
    await expect(page).toHaveTitle('Test Otomasyonu - Test Otomasyonu')
});

test('Üye Kayıt İşlemi', async({page})=>{
    await page.click("//*[text()='Sign Up Now']") //Xpath
    //await page.locator("//*[text()='Sign Up Now']").click();

    await page.fill('#firstName','murat');//CSS
    await page.fill("[id='lastName']",'Yigit')

    // await page.locator("[id='lastName']").fill('Yiğit)
    
    await page.fill('#signupemail',"mb@babayigit.net")
    await page.fill('#signuppassword','Mb97167&')
    await page.fill('#comfirmPassword','Mb97167&')
    //await page.click('#btn-submit-form') // id ile alırken #
}



)


});