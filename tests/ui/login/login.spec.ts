import { expect } from '@playwright/test';
import { test } from '../fixtures/page-fixtures';
import { usersInfo } from '../../../data/usersInfo';

test.describe('Login Tests', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.visit();
  });

  test('Sign in page is loaded', async ({ loginPage }) => {
    // Expect a title "to contain" a Sign in.
    await expect(loginPage.header).toBeVisible();
  });

  test('Login with valid credentials', async ({ loginPage, homePage }) => {
    // Find the standard user in the usersInfo array.
    const standard_user = usersInfo.find((user) => user.username === 'standard_user');

    if (standard_user?.username && standard_user?.password) {
      await loginPage.login(standard_user.username, standard_user.password);
    } else {
      throw new Error('Standard user not found');
    }

    await expect(homePage.header).toBeVisible();
  });

  test('Login with invalid credentials', async ({ loginPage }) => {
    await loginPage.login('invalid_user', 'invalid_password');
    await expect(loginPage.errorMessage).toContainText('Epic sadface: Username and password do not match any user in this service');
  });

  test('Login with locked out user', async ({ loginPage }) => {
    // Find the locked out user in the usersInfo array.
    const locked_out_user = usersInfo.find((user) => user.username === 'locked_out_user');

    if (locked_out_user?.username && locked_out_user?.password) {
      await loginPage.login(locked_out_user.username, locked_out_user.password);
    } else {
      throw new Error('Locked out user not found');
    }

    await expect(loginPage.errorMessage).toContainText('Epic sadface: Sorry, this user has been locked out.');
  });
});
