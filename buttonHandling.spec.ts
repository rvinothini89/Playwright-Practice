import {expect, test} from '@playwright/test'

test('Regular button single click', async({page}) => {
await page.goto("https://play1.automationcamp.ir/mouse_events.html");
await page.locator('#click_area').click();
await expect(page.locator('#click_type')).toHaveText("Click");
});

test('Double click', async({page}) => {
    await page.goto("https://play1.automationcamp.ir/mouse_events.html");
    await page.locator('#click_area').dblclick()
    await expect(page.locator('#click_type')).toHaveText("Double-Click");
});

test('Right click', async({page}) => {
        await page.goto("https://play1.automationcamp.ir/mouse_events.html");
        await page.locator('#click_area').click({button:"right",clickCount:2});
        await expect(page.locator('#click_type')).toHaveText("Right-Click");
});

