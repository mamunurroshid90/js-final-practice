// 1. JSON *stringify  ** parse 

const student = {
    name: 'Shakib khan', 
    age: 35,
    movies: ['Number 1 shakib khan', 'Dhakar Mastan']
};

const studentJSON = JSON.stringify(student);    // ** conver JSON stringify from normal object, there used (JSON.stringify) 
// console.log(studentJSON);
// console.log(student);


const studentObject = JSON.parse(studentJSON);  // ** convert JSON parse from JSON stringify, there used (JSON.parse) 
// console.log(studentObject);


// 2. fetch
// fetch('url')
// .then(res => res.json())
// .then(data => console.log(data));

// Keys, Values 
const keys = Object.keys(student);      // if you want to get the object property name so use (Object.keys) it.
// console.log(keys);
const values = Object.values(student);  // if you want to get the object value so use (Object.values) it.
// console.log(values);

// 3. for
const numbers = [45, 65, 89, 27];
numbers.forEach(num => console.log(num));   // if you don't get return from an array , so use always (forEach) mathods

numbers.map(num => num * 2);    // if you  get return from an array , so use always (map) mathods

// for of on array like object.
// loop on an object using for in.

const products = [
    {name: 'laptop', price: '32000', brand: 'lenovo', color: 'silver'},
    {name: 'phone', price: '7000', brand: 'iphone', color: 'golden'},
    {name: 'watch', price: '3000', brand: 'casio', color: 'yellow'},
    {name: 'sunglass', price: '400', brand: 'ribon', color: 'black'},
    {name: 'camera', price: '12000', brand: 'canon', color: 'gray'}
];

const newProduct = {name: 'webcame', price: '700', brand: 'lal'};

// copy products array and then add newProduct
const newProducts = [...products, newProduct];
// console.log(newProducts);

// create a new array without one specific item
// remove phone means create a new array whithout the phone
const remaining = products.filter(product => product.name !== 'phone');
console.log(remaining);
