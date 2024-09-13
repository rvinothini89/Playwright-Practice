import {test,expect} from '@playwright/test'

test('visible/hidden', async({page}) =>{
await page.goto("https://www.letskodeit.com/practice");
await expect(page.locator('#displayed-text')).toBeVisible();
await page.locator('#hide-textbox').click();
await expect(page.locator('#displayed-text')).toBeHidden();
await page.locator('#show-textbox').click();
await page.locator('#displayed-text').fill("my playwright test");
await page.pause();
});

test('Present/NotPresent', async ({page}) => {
await page.goto("https://the-internet.herokuapp.com/add_remove_elements/");
await expect (page.locator('button[onclick="deleteElement()"]')).not.toHaveCount(1);
await page.locator('text=Add Element').click();
await expect (page.locator('button[onclick="deleteElement()"]')).toHaveCount(1);
await page.locator('text=Add Element').click();
await expect (page.locator('button[onclick="deleteElement()"]')).toHaveCount(2);
// const count = (page.locator('button[onclick="deleteElement()"]')).count --> this is not returning the count, check it later 
//console.log(count)
await page.pause();
});

test ('Enabled/disabled', async({page}) => {
await page.goto("https://letcode.in/buttons");
await expect(page.locator('#home')).toBeEnabled();
console.log("Goto home is pressed");
const state = await page.locator('#home').isEnabled();
console.log(state);
await expect(page.locator('button[title="Disabled button"]')).toBeDisabled();
});

test ('assertion using text', async({page}) => {
await page.goto("https://letcode.in/buttons");
await page.pause();
const button_text = await page.locator('#home').textContent();
console.log(button_text)
await expect(page.locator('#home')).toHaveText("Goto Home");
});

test ('Element attributes', async ({page}) => {

});

test('url and title', async({page}) => {
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
await expect(await page.url()).toEqual('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
await expect (await page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
//Partial Text assertion
await expect(await page).toHaveURL(/.*orangehrm.*/);
});

test.only('Screenshot assert',async({page}) => {
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
await expect(page.locator('input[name="username"]')).toBeVisible();
await expect(await page).toHaveScreenshot();
});

