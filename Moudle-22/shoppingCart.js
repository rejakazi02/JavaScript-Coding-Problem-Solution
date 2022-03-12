const ProductsShopping = [
    { name: 'Laptop', price: 4, Quantity: 1},
    {name: 'Shirt', price: 5, Quantity: 4},
    {name: 'Watch', price: 3, Quantity: 1},
    {name: 'pfone', price: 2, Quantity: 1},
];

let ProductPrice = 0;

for (const product of ProductsShopping) {

    const ProductTotal = product.price * product.Quantity
    ProductPrice = ProductPrice + ProductTotal;

}


console.log('Total Price',ProductPrice);