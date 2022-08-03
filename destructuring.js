// 1. array destructuring
const numbers = [45, 55];

// const x = numbers[0];
// const y = numbers[1];

// const [ x, y ] = [45, 55];

const [ x, y ] = numbers;   // ** if variable is array then both side will be array 

function boxify(num1, num2){
    const nums = [num1, num2];
    return nums;
}

const [first, second ] = boxify(30, 40);
// console.log(first, second);

// console.log(boxify(20, 90));

const student = {
    name: 'Shakib khan', 
    age: 35,
    movies: ['Number 1 shakib khan', 'Dhakar Mastan']
};

const [firstMovie, secondMovie] = student.movies;
// console.log(firstMovie, secondMovie);

// object destructuring 
const { name, age } = { name: 'Mamun', age: 29 };   // object both side {} use it. 
const { nam, ag } = { nam: 'Karim', ag: 50, salary: 5000 }; 
// console.log(name, age);
// console.log(nam, ag);

// ***** array destructuring have to equal variable, becouse it is an array, this is index count.
// ***** object destructuring not have to equal variable , becouse it is an object, 


const employee = {
    id: 'VS code',
    designation: 'developer',
    machin: 'Windows',
    language: ['html', 'css', 'js'],
    specification: {
        height: 66,
        wight: 72,
        address: 'Lakshmipur',
        drink: 'water'
    }
}

const {machin, id} = employee;
// console.log(machin, id);
const {wight, address} = employee?.specification;   // if any specification not found so there use ? mark. 
// console.log(wight, address);
const [html, css] = employee.language;
console.log(html, css);
