const products = [

    {
        name: "Laptop",
        price: 60000
    },

    {
        name: "Phone",
        price: 25000
    },

    {
        name: "Watch",
        price: 5000
    }

];

//Ex 1: Print only product names.
const productNames= products.map(product=>product.name);
console.log(`Product Names : ${productNames}`);

//Ex 2: Products above 20000.

const premiumProducts = products.filter( product => product.price > 20000)
                                        .map(product=>product.name);
console.log(`Preminium Product Names : ${premiumProducts}`);

//Ex 3: Find Laptop.

const productFound= products.find(product=>product.name==="Laptop");
console.log("Product Found");
console.log(`Name  : ${productFound.name}`);
console.log(`Price : ${productFound.price}`);

//Ex 4 : Check whether any product cost more than 50000

const is_product= products.some(product=>product.price>50000);
console.log(`Is some Product price >50000  : ${is_product}`);


//Ex 5 : Check whether All Prices Positive

const isPositive= products.every(product=>product.price>0);
console.log(`All Prices Positive : ${isPositive}`);

//Ex 6: Calculate total inventory value.

const totalInventoryValue= products.reduce((total,product)=>total+product.price,0);
console.log(`total inventory value : ${totalInventoryValue}`);
