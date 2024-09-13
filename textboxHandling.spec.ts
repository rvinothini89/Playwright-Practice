import {test} from '@playwright/test'

test('fill method',async({page})=> {
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
await page.locator('input[name="username"]').fill('Admin');
await page.locator('input[name="password"]').fill("admin123",{force:true});
});

test('Press - sequentially method', async({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('input[name="username"]').pressSequentially('Admin');
    await page.locator('input[name="password"]').pressSequentially("admin123");
    await page.locator('input[name="password"]').press('Enter');

});

test('Press - sequentially method with delay', async({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('input[name="username"]').pressSequentially('Admin',{delay:500});
    await page.locator('input[name="password"]').pressSequentially("admin123",{delay:1000});
    await page.locator('input[name="password"]').press('Enter');
});