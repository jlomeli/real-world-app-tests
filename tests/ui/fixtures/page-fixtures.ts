import { test as base } from '@playwright/test';
import { LoginPage } from '../pom/login-page';
import { HomePage } from '../pom/home-page';

interface MyFixtures {
    loginPage: LoginPage;
    homePage: HomePage;
}

export const test = base.extend<MyFixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
});
