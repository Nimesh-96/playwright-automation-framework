import { chromium, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { users } from '../test-data/users';


async function globalSetup() {

    const browser =
        await chromium.launch();


    const page =
        await browser.newPage();


    const loginPage =
        new LoginPage(page);


    await loginPage.goto();

    console.log(
        users.validUser.username,
        users.validUser.password
    );

    await loginPage.login(
        users.validUser.username,
        users.validUser.password
    );
    await expect(
        page.getByText('Products')
    ).toBeVisible();


    await page.context()
        .storageState({
            path: 'auth.json'
        });


    await browser.close();

}


export default globalSetup;