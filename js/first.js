//input is actually the display for input and result
let input = document.querySelector('.input');
//grab the numbers
const btnNumbers = document.querySelectorAll('.number');
//convert the node list to array
const btnNumArray = [...btnNumbers];
//make a node list of operators and then convert into array
const btnOperator = document.querySelectorAll('.operator');
const operatorArr = [...btnOperator];

let display = '0'; //will hold value to be displayed
// let pendingVal; //will hold pending input which is yet to be evaluated
var evalStringArray = []; //will hold string array to be evaluated

//function to update display field
handleNum = (e) => {
	//grab the value of the button that was clicked
	var clickedBtn = e.target.innerText;
	//update
	if (display === '0') {
		display = '';
	}

	display += clickedBtn;

	input.innerText = display;

	evalStringArray.push(clickedBtn);
};

for (let i = 0; i < btnNumArray.length; i++) {
	btnNumArray[i].addEventListener('click', handleNum);
}

//function to perform operations
handleOpp = (e) => {
	// console.log(e.target.innerText);
	var op = e.target.innerText;
	display += op;
	input.innerText = display;
	switch (op) {
		//test for operator
		case '+':
			evalStringArray.push('+');
			break;
		case '-':
			evalStringArray.push('-');
			break;
		case 'x':
			evalStringArray.push('*');
			break;
		case '÷':
			evalStringArray.push('/');
			break;
	}
	// console.log(evalStringArray);
};

for (let i = 0; i < operatorArr.length; i++) {
	operatorArr[i].addEventListener('click', handleOpp);
}

let equal = document.getElementById('result');



evaluate = () => {
	console.log(evalStringArray);
	let evalString = evalStringArray.join("");
	console.log(evalString);

	let res = eval(evalString);
	input.innerText = res;
};

equal.addEventListener('click', evaluate);
