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

function addToCart(itemName){
    if(isInList(itemName, cartItem)){
        for(i in cartItem){
            if(cartItem[i].item == itemName) 
            cartItem[i].quantity++;
        }
    }
    else{
        if(isInList(itemName, listOfProducts)){
            let tempItem = {
                item: itemName,
                quantity: 1
            }
            cartItem.push(tempItem);
        }
    }
}

function calculateSubtotal(itemName, quantity){
    for (i in listOfProducts){
        let tempItem = listOfProducts[i];
        if(tempItem.item == itemName){
            if(tempItem.multiBuyOffer){
                return (parseInt((quantity/tempItem.minQtForSpecialPrice)) * tempItem.specialPrice) + ((quantity%tempItem.minQtForSpecialPrice) * tempItem.unitPrice);
            }
            else{
                return quantity * tempItem.unitPrice;
            }
        }
    }
}

function makeCart(){
    // for the time being displaying products info in the cart
    console.log("Item \t Qty \t Sub Total");

    for (i in cartItem){
        let tempItem = cartItem[i];
        let subTotal = calculateSubtotal(tempItem.item, tempItem.quantity);
        cartItem[i-1].subTotal = subTotal;

        // Display cart details
        console.log(tempItem.item + " \t \t " + tempItem.quantity + " \t \t " + subTotal);
    }

}

function checkout() {
    console.log("Your Order Is Confirmed");
    console.log("Order Details: ");

    makeCart();

    let total = 0;
    for(i in cartItem){
        total += cartItem[i].subTotal;
    }

    console.log("--------------------------");
    console.log("\t \t Total: " + total);
}

addProductInStock("A", 50, true, 3, 130);
addProductInStock("B", 30, true, 2, 45);
addProductInStock("C", 20, false);
addProductInStock("D", 15, false);

addToCart("D");
addToCart("B");
addToCart("A");
addToCart("A");
addToCart("C");
addToCart("B");
addToCart("X");
addToCart("A");
addToCart("A");
addToCart("B");
addToCart("B");
addToCart("A");
addToCart("B");
addToCart("C");

checkout();
