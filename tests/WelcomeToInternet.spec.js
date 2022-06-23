const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
});

test('Add/Remove Elements', async ({page})=>{
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

//nie działa, zabawa ze statusem response
test('Broken Images', async ({page})=>{
    await page.locator('text=Broken Images').click();
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/broken_images');
    for(let i=0;i<3;i++){
        const foto = await page.locator('[class=example] img').nth(i).getAttribute('src');
        const url = await page.goto(`https://the-internet.herokuapp.com/${foto}`).response.status();
        console.log(url);
    }
});

test('Checkbox', async ({page})=>{
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

test('Context menu', async({page})=>{
    await page.locator('text=Context menu').click();
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/context_menu');
    await page.locator('#hot-spot').click(10,10,options => options({button:'right'}));
});
