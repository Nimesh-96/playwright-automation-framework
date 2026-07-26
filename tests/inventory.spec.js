import { test, expect } from '../fixtures/test-fixture';

test('@regression Add backpack to cart',
async ({ inventoryPage, page }) => {


    await inventoryPage.addBackpack();


});