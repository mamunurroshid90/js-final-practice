const products = [
    {name: 'laptop', price: '32000', brand: 'lenovo', color: 'silver'},
    {name: 'phone', price: '7000', brand: 'iphone', color: 'golden'},
    {name: 'watch', price: '3000', brand: 'casio', color: 'yellow'},
    {name: 'sunglass', price: '400', brand: 'ribon', color: 'black'},
    {name: 'camera', price: '12000', brand: 'canon', color: 'gray'}
];


// 1. map mathod. 
const brands = products.map(product => product.name);   // ** variable decleare must to map mathods.
// console.log(brands);
const price = products.map(product => product.price);
// console.log(price);


// 2. forEach mathod
products.forEach(product => console.log(product));  // ** variable not decleare  to forEach mathods.
products.forEach(product => console.log(product.color));

// ** multiple forEach mathod 
products.forEach(product => {

});

//  ***** if function return the value so then must be decleare variable ,, either don't need to decleare varible to function 



// 3. filter mathod
const cheap = products.filter(product => product.price <= 5000); // there is filter price condition
// console.log(cheap);
const specificName = products.filter(product => product.name.includes('t'));  // there is filter match letter of object . 
// console.log(specificName);
// *** filter: filter return an array , and all matched element return as an array


// 4. find mahtod 
const special = products.find(product => product.name.includes('o'));
console.log(special);
// *** find: find return just a object, and find return the first matched element as a object. 
