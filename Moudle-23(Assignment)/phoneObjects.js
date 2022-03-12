const phones = [
    { name: 'samsung s5', price: 45000, camera: 10, storage: 32},
    { name: 'Walton m32', price: 15000, camera: 8, storage: 8},
    { name: 'Shaomi m3', price: 12000, camera: 8, storage: 16},
    { name: 'Oppo a2', price: 17000, camera: 8, storage: 32},
    { name: 'Nokia n95', price: 8000, camera: 8, storage: 4},
    { name: 'Htc h81', price: 2500, camera: 8, storage: 16},
];

let cheapest = phones[0];
for (const phone of phones) {
    if (phone.price < cheapest.price) {

        cheapest = phone;
    }
}
 

console.log(cheapest);