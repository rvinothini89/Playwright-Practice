import {expect, test} from '@playwright/test'
import * as fs from 'fs'
test('Task9_GuviPractice using playwright',async ({page}) => {
await page.goto("https://www.saucedemo.com/");
await page.locator('#user-name').fill("standard_user");
await page.locator('#password').fill("secret_sauce");
await page.locator('#login-button').click();
expect(await page.title()).toEqual("Swag Labs");
const tc = await page.textContent('#inventory_container')
fs.writeFileSync("webpage_task_11.txt",tc || "No content found");
});