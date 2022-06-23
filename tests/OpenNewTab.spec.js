const { test, expect } = require('@playwright/test');

test("OpenNewTab", async ({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    
    await page.goto("http://the-internet.herokuapp.com/windows");

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        page.locator('text=Click Here').click()
    ]);
    await expect(newPage).toHaveTitle('New Window');
    await expect(newPage.locator('h3')).toContainText('New Window');
});