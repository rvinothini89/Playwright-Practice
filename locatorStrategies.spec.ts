//syntax for css --> tagname[attribute = 'value']
//syntax for xpath --> //tagname[@attribute='value']
// syntax for id attribute in css --> #value
// syntax for class attribute in css -> .value 
// css_value = input[name='username'] 
//xpath = //input[@name = 'username']

import {test,expect} from '@playwright/test'


test('Locator Strategy', async ({page, context})=> {

await page.goto("https://www.saucedemo.com/");
await page.locator('#user-name').fill("standard_user");
await page.locator('#password').fill("secret_sauce");
await page.locator('#login-button').click();
await page.pause();
expect(await page.title()).toEqual('Swag Labs');  
//console.log(page.title())
});
