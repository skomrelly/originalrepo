import { test,expect } from '@playwright/test'
test.use({ storageState: './.auth/standarduser.json' }); // Example

test('Admin can access panel', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/inventory.html');
  await expect(page.locator("//div[text()='Swag Labs']")).toBeVisible()
});