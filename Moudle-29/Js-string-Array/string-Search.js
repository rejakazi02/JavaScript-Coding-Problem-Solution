const products = [

    'Dell Laptop',
    'iphone phone',
    'lenovo laptop',
    'LG laptop',
    'HTC Phone',
    'HP Laptop',
    'voda Phone',
]


const searchString = 'laptop';
const output = [];

for (const product of products) {

    if (product.toLowerCase().indexOf(searchString) != -1){
output.push(product);
        
    }
    
}
console.log(output);



 