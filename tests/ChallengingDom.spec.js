const{test,expect} = require('@playwright/test');

test('Challenging DOM', async ({page})=>{
    await page.goto('https://the-internet.herokuapp.com/');
    await page.locator('text=Challenging DOM');4
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/challenging_dom');
    
});