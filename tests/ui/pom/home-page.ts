import { Locator, Page } from "@playwright/test";

export class HomePage{
    readonly page: Page;
    readonly header: Locator;

    constructor(page: Page) {
        this.page = page;
        this.header = page.getByTestId('primary-header');
    }

    async visit() {
        await this.page.goto('/inventory.html');
    }
}
