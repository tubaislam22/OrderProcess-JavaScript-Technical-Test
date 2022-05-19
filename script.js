console.log("I'm In!!!");

let listOfProducts = [
    {
        item: "A",
        unitPrice: 50,
        multiBuyOffer: true,
        minQtForSpecialPrice: 3,
        specialPrice: 130
    },

    {
        item: "B",
        unitPrice: 30,
        multiBuyOffer: true,
        minQtForSpecialPrice: 2,
        specialPrice: 45
    },

    {
        item: "C",
        unitPrice: 20,
        multiBuyOffer: false
    },

    {
        item: "D",
        unitPrice: 15,
        multiBuyOffer: false
    },
];

function addToCart(item){

}

function checkout(){

}

function placeOrder() {
    console.log("Your order is successfully placed.");
    console.log("= = = = = = Order Summary = = = = = =");
    for (i in listOfProducts){

        // console.log(Object.keys(listOfProducts[i]));
        let tempItem = listOfProducts[i];
        for (j in Object.keys(tempItem)){
            console.log(Object.keys(tempItem)[j] + ": " + Object.values(tempItem)[j]);
        }
    }
    console.log("= = = = = = = = = = = = = = = = = = =");
}

placeOrder();