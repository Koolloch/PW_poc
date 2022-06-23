const { test, expect } = require('@playwright/test');


test('Add/Remove Elements', async ({page})=>{
    await page.goto('https://the-internet.herokuapp.com/');
    await page.locator('text=Add/Remove Elements').click();
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/add_remove_elements/');
    await page.locator('text=Add Element').click();
    const list = page.locator('[class=added-manually]');
    await expect(list).toHaveCount(1);
    await page.locator('text=Add Element').click();
    await expect(list).toHaveCount(2);
    await page.locator('[class=added-manually]').first().click();
    await expect(list).toHaveCount(1);
    await page.locator('[class=added-manually]').first().click();
    await expect(list).toHaveCount(0);
});