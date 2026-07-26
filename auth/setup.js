async function globalSetup() {

    const browser = await chromium.launch();

    const page = await browser.newPage();

    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await loginPage.login(
        users.validUser.username,
        users.validUser.password
    );


    console.log('Current URL:', page.url());

    console.log(
        'Page title:',
        await page.title()
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