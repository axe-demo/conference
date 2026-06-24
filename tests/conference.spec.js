const { test, expect } = require('@playwright/test');

test.describe('Conference app', () => {
  test('has correct page title', async ({ page }) => {
    await page.goto('/dist/index.html');
    await expect(page).toHaveTitle('Conference');
  });

  test('shows the navbar brand link', async ({ page }) => {
    await page.goto('/dist/index.html');
    const brand = page.locator('a.brand');
    await expect(brand).toBeVisible();
    await expect(brand).toHaveText('Conference');
  });

  test('shows top-level navigation links', async ({ page }) => {
    await page.goto('/dist/index.html');
    // The navbar contains Home and About links
    const homeLink = page.locator('.level1Nav a[href="#home/schedule"]');
    await expect(homeLink).toBeVisible();
    const aboutLink = page.locator('.level1Nav a[href="#about"]');
    await expect(aboutLink).toBeVisible();
  });

  test('navbar is present on page', async ({ page }) => {
    await page.goto('/dist/index.html');
    const navbar = page.locator('.navbar-inverse');
    await expect(navbar).toBeVisible();
  });
});
