function calculateInvoice (starterPrice, maindishPrice, dessertPrice, beveragePrice) {
    let sum = starterPrice + maindishPrice + dessertPrice + beveragePrice;
     return (`You have to pay ${sum} €`);
}


    var start = 8.5;
    var main = 14.5;
    var dessert = 7.3;
    var beverage = 8.5;
console.log(calculateInvoice(start, main, dessert, beverage));

    start = 4.5;
    main = 16.7;
    dessert = 8.5;
    beverage = 4.3;
console.log(calculateInvoice(start, main, dessert, beverage));

    start = 6.2;
    main = 15.8;
    dessert = 8.2;
    beverage = 4.5;
console.log(calculateInvoice(start, main, dessert, beverage));

function studentInvoice(starterPrice, maindishPrice, dessertPrice, beveragePrice) {
    let sum = starterPrice*0.9 + maindishPrice*0.9 + dessertPrice*0.9 + beveragePrice;
    return (`As a student you have to pay ${Math.round(sum)} €`);
}
    start = 8.5;
    main = 14.5;
    dessert = 7.3;
    beverage = 8.5;
console.log(studentInvoice(start, main, dessert, beverage));


    start = 4.5;
    main = 16.7;
    dessert = 8.5;
    beverage = 4.3;
console.log(studentInvoice(start, main, dessert, beverage));


    start = 6.2;
    main = 15.8;
    dessert = 8.2;
    beverage = 4.5;
console.log(studentInvoice(start, main, dessert, beverage));
