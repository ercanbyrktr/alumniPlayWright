import{test,expect} from '@playwright/test';

test('AE SignUp Test', async({page}) => {
    await page.goto('https://automationexercise.com/')

    await expect.soft(page.getByAltText('Website for automation practice')).toBeVisible();

    await page.getByText(' Signup / Login').click();

    await expect(page.getByText('New User Signup!')).toBeVisible();
    await page.getByPlaceholder('Name').fill('ercan')
    await page.getByPlaceholder('Email Address').nth(1).fill('er35@quart.com');
    await page.locator("//button[@data-qa='signup-button']").press('Enter');

    await page.locator('#id_gender1').check;
    await page.locator(('#password')).fill('123k&');
    await page.locator('#days').selectOption("1");
    await page.locator('#months').selectOption("May");
    await page.locator('#years').selectOption("1999");
    await page.locator('#newsletter').click;

    await page.locator(('#first_name')).fill('Murat')
    await page.locator(('#last_name')).fill('Yiğit')
    await page.locator(('#address1')).fill('Göztepe')
    await page.locator(('#country')).selectOption({index:2});
    await page.locator(('#state')).fill('Non Usa');
    await page.locator(('#city')).fill('İstanbul');
    await page.locator(('#zipcode')).fill('1234');
    await page.locator(('#mobile_number')).fill('9876543');
   
    await page.locator("//*[@type='submit']").nth(0).click();
    await expect.soft(page.getByText('ACCOUNT CREATED!')).toBeVisible();

});