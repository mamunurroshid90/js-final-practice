// Truthy = 'almas', 5, true, {}, []
// falsey = '', 0, false, null, undefind

// check truthy
let myVar = 5;
// check any truthy
if(myVar) {
    myVar = myVar * 100;
}
else{
    myVar = 0;
}

let myMoney = 50;
// you check negative or falsy anything
if(!myMoney){

}
else{

}

const money = 800;
let food;
if(money > 100){
    food = 'biriyani';
}
else{
    food = 'cha biscut';
}

// ternary operator
let food1 = money > 100 ? 'biriyani' : 'cha biscut';
// console.log(food1);

let drink = (money > 100 && myVar > 100) ? 'coke' : 'filter water';
// console.log(drink);

// number to string conversion
const num1 = 52;
// console.log(num1);
const numStr = num1 + '';
// console.log(numStr);

// string to number 
const input = '500';
const inputNum = +input;
// console.log(inputNum);

let isActive = true;
const showUser = () => console.log('display user');
const hideUser = () => console.log('hide user');

// isActive ? showUser() : hideUser();
// use && if the left side is true then right side will be executed
isActive && showUser();  // if condition is true then do call function and if false so do not call function.

// use || if the left side is false then right side will be executed.
isActive || hideUser();

// toggle boolean
isActive = !isActive;
