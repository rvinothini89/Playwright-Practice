import {expect, test} from '@playwright/test'
import exp from 'constants';

test ('radio button case',async({page}) => {
await page.goto("https://demo.automationtesting.in/Register.html");
//xpath = //input[@value="Male"]
const maleRadioButton = page.locator('input[value="Male"]');
const femaleRadioButton = page.locator('input[value="FeMale"]');
await maleRadioButton.check();
//way 1
expect(await maleRadioButton.isChecked()).toBeTruthy();
expect(await femaleRadioButton.isChecked()).toBeFalsy();

//way 2
await femaleRadioButton.check();
await expect(maleRadioButton).not.toBeChecked();
expect(femaleRadioButton).toBeChecked();
});