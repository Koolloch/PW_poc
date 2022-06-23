const {test,expect} = require('@playwright/test');

test('Floating menu test', async ({page})=>{
    await page.goto('https://the-internet.herokuapp.com/');
    await page.locator('text=Floating Menu').click();
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/floating_menu');
    await page.mouse.wheel(0,2000);
    //const menuSize = await page.locator('#menu').boundingBox();
    await expect(page.locator('#menu')).toHaveAttribute('style', `top: ${2000-37.4}px;`);

});