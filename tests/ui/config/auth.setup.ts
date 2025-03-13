import { test as setup } from '../fixtures/page-fixtures';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '.env') });

const standardUserFile = path.join(__dirname, '../../../.auth/standard_user.json');

setup('authenticate standard user', async ({ page }) => {
    const userPassword = process.env.USER_PASSWORD;
    if (!userPassword) {
        throw new Error('USER_PASSWORD is not defined in the environment variables');
    }

    await page.goto('https://www.saucedemo.com/');
    await page.getByTestId('username').fill('standard_user');
    await page.getByTestId('password').fill(userPassword);
    await page.getByTestId('login-button').click();

    await page.waitForURL('https://www.saucedemo.com/inventory.html');

    await page.context().storageState({ path: standardUserFile });
});

const errorUserFile = path.join(__dirname, '../../../.auth/error_user.json');

setup('authenticate error user', async ({ page }) => {
    const userPassword = process.env.USER_PASSWORD;
    if (!userPassword) {
        throw new Error('USER_PASSWORD is not defined in the environment variables');
    }

    await page.goto('https://www.saucedemo.com/');
    await page.getByTestId('username').fill('error_user');
    await page.getByTestId('password').fill(userPassword);
    await page.getByTestId('login-button').click();

    await page.waitForURL('https://www.saucedemo.com/inventory.html');

    await page.context().storageState({ path: errorUserFile });
});

const problemUserFile = path.join(__dirname, '../../../.auth/problem_user.json');

setup('authenticate problem user', async ({ page }) => {
    const userPassword = process.env.USER_PASSWORD;
    if (!userPassword) {
        throw new Error('USER_PASSWORD is not defined in the environment variables');
    }

    await page.goto('https://www.saucedemo.com/');
    await page.getByTestId('username').fill('error_user');
    await page.getByTestId('password').fill(userPassword);
    await page.getByTestId('login-button').click();

    await page.waitForURL('https://www.saucedemo.com/inventory.html');

    await page.context().storageState({ path: problemUserFile });
});
