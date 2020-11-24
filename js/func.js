const input = document.querySelector('.input');

//grab the numbers
const btnNumbers = document.querySelectorAll('.number');
//convert the node list to array
const numbersArr = [...btnNumbers];

//make a node list of operators and then convert into array
const btnOperator = document.querySelectorAll('.operator');
const operatorArr = [...btnOperator];

let display = '0'; //will hold value to be displayed
let pendingVal; //will hold pending input which is yet to be evaluated
let evalStringArray = []; //will hold string array to be evaluated

console.log(numbersArr, operatorArr);

//evaluation array
const evelstringArr = [];
//what to display
const display = '0';

//a function to grab number when clicked and push to array
//a func to do the same for elem
//a func to do all the addition

input.innerText = display;
