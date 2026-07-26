import { test as base, expect } from '@playwright/test';

import { InventoryPage } from '../pages/InventoryPage';

import { CartPage }from '../pages/CartPage';

export const test = base.extend({

    inventoryPage: async ({ page }, use) => {


        await page.goto('https://www.saucedemo.com/inventory.html');
        const inventoryPage =
            new InventoryPage(page);
        

        await use(inventoryPage);

    },

    cartPage: async ({ page }, use) => {


        const cartPage =
            new CartPage(page);


        await use(cartPage);

    }
});


export { expect };