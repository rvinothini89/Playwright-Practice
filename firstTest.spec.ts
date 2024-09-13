import {test,expect} from '@playwright/test'
import exp from 'constants';
import { snapshot } from 'node:test';


test('Google page launch', async ({page, context})=>
    
{
    await context.tracing.start({screenshots:true, snapshots:true});
    await page.goto("https://www.google.com/");
    expect(await page.title()).toEqual('Google');  
    await context.tracing.stop({path:"test_output.zip"})
})