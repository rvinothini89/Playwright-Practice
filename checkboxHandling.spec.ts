import {expect, test} from '@playwright/test'

test('Checkbox Handling-way1',async({page}) => {
await page.goto("https://demo.automationtesting.in/Register.html");
const cricketCheckbox = page.locator('#checkbox1');
const moviesCheckbox = page.locator('#checkbox2');
const hockeyCheckbox = page.locator('#checkbox3');
await cricketCheckbox.check();
await moviesCheckbox.check();
await expect(cricketCheckbox).toBeChecked();
await expect(moviesCheckbox).toBeChecked();
await expect(hockeyCheckbox).not.toBeChecked();
});

test('Checkbox Handling-way2',async({page}) => {
    await page.goto("https://demo.automationtesting.in/Register.html");
    const cricketCheckbox = page.locator('#checkbox1');
    const moviesCheckbox = page.locator('#checkbox2');
    const hockeyCheckbox = page.locator('#checkbox3');
    await cricketCheckbox.check();
    await moviesCheckbox.check();
    expect(await cricketCheckbox.isChecked()).toBeTruthy();
    expect(await moviesCheckbox.isChecked()).toBeTruthy();
    expect(await hockeyCheckbox.isChecked()).toBeFalsy();
    });