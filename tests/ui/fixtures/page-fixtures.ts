import { test as base } from '@playwright/test';
import { LoginPage } from '../pom/login-page';
import { HomePage } from '../pom/home-page';
import { HomePageError } from '../pom/home-page-error';
import { HomePageProblem } from '../pom/home-page-problem';

interface MyFixtures {
    loginPage: LoginPage;
    homePage: HomePage;
    homePageError: HomePageError;
    homePageProblem: HomePageProblem;
}

export const test = base.extend<MyFixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    homePage: async ({ browser }, use) => {
        const context = await browser.newContext({ storageState: '.auth/standard_user.json' });
        const homePage = new HomePage(await context.newPage());
        await use(homePage);
        await context.close();
    },
    homePageError: async ({ browser }, use) => {
        const context = await browser.newContext({ storageState: '.auth/error_user.json' });
        const homePageError = new HomePageError(await context.newPage());
        await use(homePageError);
        await context.close();
    },
    homePageProblem: async ({ browser }, use) => {
        const context = await browser.newContext({ storageState: '.auth/error_user.json' });
        const homePageProblem = new HomePageProblem(await context.newPage());
        await use(homePageProblem);
        await context.close();
    }
});
