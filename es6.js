numbers = [23, 89, 45, 70, 28];
const student = {
    name: 'Shakib khan', 
    age: 35,
    movies: ['Number 1 shakib khan', 'Dhakar Mastan']
};


// 1. template string 
const about = `My name is ${student.name} age of ${student.age} has number ${numbers[2]} also liked movies ${student.movies[0]}`;
console.log(about);



// 2. arrow function 
const getFiftyFive = () => 55;      // simple arrow function create .. return from same line code 
const addSixtyFive = num => num + 65;   // return from same line code
const isEven = x => x % 2 == 0;     // same line use condition 
const addThree = (x, y, z ) => x + y + z;   // add multiple perameters to arrow function and return from same line code.

const doMath = (num1, num2) => {
    const sum = num1 + num2; 
    return sum;
}

const result = doMath(55, 22);
console.log(result);


// 3. spread operator
const newNumbers = [...numbers];    // 3 dots by older array copy 
// create a new array from an older array and add an element 
const currentNumbers = [...numbers, 55];

numbers.push(99);
numbers.push(99);
numbers.push(99);


console.log(numbers);
console.log(newNumbers);    // new push array not added this variable 
console.log(currentNumbers);

