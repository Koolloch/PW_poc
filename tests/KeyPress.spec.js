const {test,expect} = require('@playwright/test');

test('Key press', async ({page})=>{
    const key = 'Tab';
    await page.goto('https://the-internet.herokuapp.com/');
    await page.locator('text=Key Press').click();
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/key_presses');
    await page.locator('#target').focus();
    await page.keyboard.press(key);
    await expect(page.locator('#result')).toContainText(`You entered: ${key.toUpperCase()}`);
;})