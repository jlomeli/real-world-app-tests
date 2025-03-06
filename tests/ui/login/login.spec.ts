import { test, expect } from '@playwright/test';

test.describe('Login Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Sign in page is loaded', async ({ page }) => {  
    // Expect a title "to contain" a Sign in.
    await expect(page.getByText('Swag Labs')).toBeVisible();
  });
});
