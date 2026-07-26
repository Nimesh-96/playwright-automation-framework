export class CartPage {


    constructor(page){

        this.page = page;


        this.cartItem =
            page.getByText(
                'Sauce Labs Backpack'
            );


        this.checkoutButton =
            page.getByRole('button',{name:'Checkout'});

    }


    async verifyProduct(){

        await this.cartItem
            .isVisible();

    }


    async clickCheckout(){

        await this.checkoutButton
            .click();

    }


}