const {test,expect} = require('@playwright/test');

test('Horizontal slider', async ({page})=>{
    await page.goto('https://the-internet.herokuapp.com/');
    await page.locator('text=Horizontal Slider').click();
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/horizontal_slider');
    await page.locator('input').focus();
    // loop for random i
    await page.keyboard.press('ArrowRight');
    await expect(page.locator('.sliderContainer span')).toContainText('0.5');
});