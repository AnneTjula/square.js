let name = "Anne"
console.log (name);

//function declaration method:

/* function square (number1, number2){
    console.log (2*(number1*number1 + number2*number2))
}
square (2,3)
return (square)
 */

// function expression method:

/* const square = function (number1, number2){
    console.log (2*(number1*number1 + number2*number2))
};   
square (2,3);
return (square);  
 */

//arrow function:

const square = (number1, number2) => {
    console.log (2*(number1*number1 + number2*number2))  
}
square (2,3);
return (square);  