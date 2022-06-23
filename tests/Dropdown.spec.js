const {test,expect} = require('@playwright/test');

test('Select from dropdown', async ({page})=>{
    await page.goto('https://the-internet.herokuapp.com/');
    await page.locator('text=Dropdown').click();
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/dropdown');
    await page.locator('#dropdown').selectOption('1');
    await expect(page.locator("#dropdown option[value='1']")).toHaveAttribute('selected', 'selected');
    
})