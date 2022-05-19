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

function isInList(item, list){
    for (i in list){
        let tempItem = list[i];

        if(tempItem.item == item){
            return true;
        }
    }

    return false;
}

function addToCart(item){
    if(isInList(item, listOfProducts)){
        if(!isInList(item, cartItem)){
            console.log("test 1");
            let tempItem = {
                item: item,
                quantity: 1
            }

            cartItem.push(tempItem);
        }
        else{
            console.log("test 2");
            for (i in cartItem){
                if(cartItem[i].item = item){
                    cartItem[i].quantity += 1;
                }
            }
        }
        
        console.log(item + " - added into cart.");
    }

    else{
        console.log(item + " is not available in stock!");
    }
}

function checkout(){

}

function placeOrder() {
    console.log("Your order is successfully placed.");
    console.log("= = = = = = Order Summary = = = = = =");
    // for the time being displaying products info in the cart
    // for (i in cartItem){
    //     let tempItem = cartItem[i];
    //     for (j in Object.keys(tempItem)){
    //         console.log(Object.keys(tempItem)[j] + ": " + Object.values(tempItem)[j]);
    //     }
    //     console.log("------------------------");
    // }
    console.log(cartItem);
    console.log("= = = = = = = = = = = = = = = = = = =");
}

addProductInStock("A", 50, true, 3, 130);
addProductInStock("B", 30, true, 2, 45);
addProductInStock("C", 20, false);
addProductInStock("D", 15, false);

addToCart("A");
addToCart("E");
addToCart("A");

placeOrder();
