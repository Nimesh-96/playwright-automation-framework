export class InventoryPage {


    constructor(page){

        this.page = page;


        this.productsTitle =
            page.getByText('Products');


        this.cartBadge =
            page.locator(
            '[data-test="shopping-cart-badge"]'
            );

        this.addBackpackButton =
            page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');

    }

    async addBackpack(){

        await this.addBackpackButton.click();

    }

    async openCart(){

        await this.page
        .locator('[data-test="shopping-cart-link"]')
        .click();

    }

    async sortProducts(value){

        await this.page
        .locator(
        '[data-test="product-sort-container"]'
        )
        .selectOption(value);

    }

}