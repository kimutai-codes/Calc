const input = document.querySelector('.input');
//grab the numbers
const btnNumbers = document.querySelectorAll('.number');
//convert the node list to array
const btnNumArray = [...btnNumbers];
//make a node list of operators and then convert into array
const btnOperator = document.querySelectorAll('.operator');
const operatorArr = [...btnOperator];

let display = '0'; //will hold value to be displayed
let pendingVal; //will hold pending input which is yet to be evaluated
let evalStringArray = []; //will hold string array to be evaluated

for (let i = 0; i < btnNumArray.length; i++) {
	btnNumArray[i].addEventListener('click');
}

for (let i = 0; i < operatorArr.length; i++) {
	operatorArr[i].addEventListener('click');
}

//function to update display field
updateDisplay = (e) => {
	//grab the value of the button that was clicked
	var clickedBtn = e.target.innerText;
	//update
	if (display === '0') {
		display = '';
	}

	//append the value of the clicked button to our display
	display += clickedBtn;
	//store the value of what to display in a variable
	// displayValueElement.innerText = display;
	input.innerText = display;
};

//function to perform operations
MathOps = (e) => {
	var op = e.target.innerText;
	switch (op) {
		//test for operator
		case '+':
			//the pending value is the value of the button that is pressed
			pendingVal = display;
			//display zero again when the user presses operator button
			display = '0';
			input.innerText = display;
			//push the value of the pendingValue to the evel string array for evaluation
			evalStringArray.push(pendingVal);
			//also push the operator
			evalStringArray.push('+');
			break;
		case '-':
			pendingVal = display;
			display = '0';
			input.innerText = display;
			evalStringArray.push(pendingVal);
			evalStringArray.push('-');
			break;
		case '/':
			pendingVal = display;
			display = '0';
			input.innerText = display;
			evalStringArray.push(pendingVal);
			evalStringArray.push('/');
			break;
		case 'x':
			pendingVal = display;
			display = '0';
			input.innerText = display;
			evalStringArray.push(pendingVal);
			evalStringArray.push('*');
			break;
		case '÷':
			pendingVal = display;
			display = '0';
			input.innerText = display;
			evalStringArray.push(pendingVal);
			evalStringArray.push('/');
			break;
		case '=':
			evalStringArray.push(display);
			var evaluation = eval(evalStringArray.join(' '));
			display = evaluation + '';
			input.innerText = display;
			evalStringArray = [];	
			break;
		default:
			break;
	}
};
