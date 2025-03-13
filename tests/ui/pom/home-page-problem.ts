import { Locator, Page } from "@playwright/test";

export class HomePageProblem {
    readonly page: Page;
    readonly header: Locator;
    readonly menuButton: Locator;
    readonly allItemsLink: Locator;
    readonly aboutLink: Locator;
    readonly logoutLink: Locator;
    readonly resetAppStateButton: Locator;
    readonly cartButton: Locator;
    readonly pageTitle: Locator;
    readonly sortButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.header = page.getByTestId('primary-header');
        this.menuButton = page.getByRole('button', { name: 'Open Menu' });
        this.allItemsLink = page.getByTestId('inventory-sidebar-link')
        this.aboutLink = page.getByTestId('about-sidebar-link');
        this.logoutLink = page.getByTestId('logout-sidebar-link');
        this.resetAppStateButton = page.getByTestId('reset-sidebar-link');
        this.cartButton = page.getByTestId('shopping-cart-link');
        this.pageTitle = page.getByTestId('title');
        this.sortButton = page.getByTestId('product-sort-container');
    }

    async visit() {
        await this.page.goto('/inventory.html');
    }

    async getURL() {
        return this.page.url();
    }

    async openMenu() {
        await this.menuButton.click();
    }

    async clickAllItems() {
        await this.allItemsLink.click();
    }

    async clickAbout() {
        await this.aboutLink.click();
    }

    async clickLogout() {
        await this.logoutLink.click();
    }

    async clickResetAppState() {
        await this.resetAppStateButton.click();
    }

    async getPageTitle() {
        return await this.pageTitle.textContent();
    }

    async clickCart() {
        await this.cartButton.click();
    }
}
