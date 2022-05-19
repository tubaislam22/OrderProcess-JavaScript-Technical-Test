let listOfProducts = [
    {
        item: "test",
        unitPrice: 0,
        multiBuyOffer: true,
        minQtForSpecialPrice: 0,
        specialPrice: 0
    }
];

let cartItem = [];

function addProductInStock(item, unitPrice, multiBuyOffer, minQtForSpecialPrice, specialPrice){
    var tempItem = {};
    tempItem.item = item;
    tempItem.unitPrice = unitPrice;
    tempItem.unitPrice = unitPrice;
    tempItem.multiBuyOffer = multiBuyOffer;
    if(multiBuyOffer){
        tempItem.minQtForSpecialPrice = minQtForSpecialPrice;
        tempItem.specialPrice = specialPrice;
    }

    listOfProducts.push(tempItem);
}

function addToCart(item){

}

function checkout(){

}

function placeOrder() {
    console.log("Your order is successfully placed.");
    console.log("= = = = = = Order Summary = = = = = =");
    // for the time being displaying all products info
    for (i in listOfProducts){

        // Displaying Product Info
        let tempItem = listOfProducts[i];
        for (j in Object.keys(tempItem)){
            console.log(Object.keys(tempItem)[j] + ": " + Object.values(tempItem)[j]);
        }
        console.log("------------------------");
    }
    console.log("= = = = = = = = = = = = = = = = = = =");
}

addProductInStock("A", 50, true, 3, 130);
addProductInStock("B", 30, true, 2, 45);
addProductInStock("C", 20, false);
addProductInStock("D", 15, false);
addProductInStock("E", 10, true, 5, 40);

placeOrder();
