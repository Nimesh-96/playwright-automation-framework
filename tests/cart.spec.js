import { test, expect } from '../fixtures/test-fixture';


test('@regression Verify cart item',
async ({ inventoryPage, cartPage }) => {


    await inventoryPage.addBackpack();


    await inventoryPage.openCart();


    await cartPage.verifyProduct();


});