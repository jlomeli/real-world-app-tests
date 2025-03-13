import { expect } from '@playwright/test';
import { test } from '../fixtures/page-fixtures';

test.describe('Home Tests', () => {
    test('Home page is loaded', async ({ homePage }) => {
        await expect(homePage.header).toBeVisible();
    });
});
