const { test, expect } = require('@playwright/test');


test('Checkbox', async ({page})=>{
    await page.goto('https://the-internet.herokuapp.com/');
    await page.locator('text=Checkboxes').click();
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/checkboxes');
    const checkbox1 = page.locator('[type=checkbox]').nth(0);
    const checkbox2 = page.locator('[type=checkbox]').nth(1);
    await expect(checkbox1).not.toBeChecked();
    await expect(checkbox2).toBeChecked();
    await checkbox1.click();
    await checkbox2.click();
    await expect(checkbox2).not.toBeChecked();
    await expect(checkbox1).toBeChecked();

});