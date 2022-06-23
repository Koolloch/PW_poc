const {test, expect} = require('@playwright/test');

test('Login E2E', async ({page})=>{
    await page.goto('https://the-internet.herokuapp.com/');
    await page.locator('text=Form Authentication').click();
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/login');
    await page.locator('#username').type('tomsmith');
    await page.locator('#password').type('SuperSecretPassword');
    await page.locator('button').click();
    await expect(page.locator('#flash')).toContainText('invalid');
    await page.locator('#username').type('tomsmith');
    await page.locator('#password').type('SuperSecretPassword!');
    await page.locator('button').click();
    await expect(page.locator('#flash')).toContainText('You logged into a secure area!');
    await page.locator('.button').click();
    await expect(page.locator('#flash')).toContainText('You logged out of the secure area!');
    })