
// 1. How to declare a variable using let and const 
const fatherName = 'MD Nuruzzaman';  // const value set is can't declare second time but value will can change any time. 
let season = 'rainy season';
season = 'winter'; // let value set is can declare second time.

// 2. Condition = 6 basic conditions: >, <, ===, !==, <=, >= ; -- Multiple conditions: && (and) all conditions must will be true; || (or) any conditions will be true, then run the code. 

if(fatherName === 'MD Nuruzzaman' && season === 'rainy season'){
    console.log();
}
else if(fatherName === 'Md Nuruzzaman' || season === 'rainy season'){
    console.log();
}
else{
    console.log();
}


// 3. array declare 
numbers = [23, 89, 45, 70, 28];
numbers[2] = 56;        // index of array (index of position)
numbers.length;         // array length (check number count)
numbers.push;           // array push (add to new array)


// 4. for loop 
for(let i = 0; i < numbers.length; i++){
    const number = numbers[i];  
    console.log(number);
}


// 5. function 
function multiply(num1, num2){
    const result = num1 * num2;
    return result;
}

const output = multiply(15, 53);
console.log(output);


// 6. Object,,
        // 3 ways to access property by name 
const student = {
    name: 'Shakib khan', 
    age: 35,
    movies: ['Number 1 shakib khan', 'Dhakar Mastan']
}

const myVariable = 'age';

console.log(student.age);       // direct access by property name.
console.log(student['age']);     // access via property name string. 
console.log(student[myVariable]);   // access via property name in a variable.


