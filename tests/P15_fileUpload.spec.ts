import{test,expect} from '@playwright/test';
test('file Upload test', async({page}) => {
    await page.goto('https://demoqa.com/upload-download');

    const uploadButton=page.locator('#uploadFile');

    await uploadButton.setInputFiles('C:\\Users\\Ercan\\Desktop\\uploadfiles\\upload.txt');

    expect(await(page.locator('#uploadedFilePath').textContent())).toContain('upload.txt')
    
});