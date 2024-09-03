/**
 * ---------Practice Task-----------
 * YOU HAVE TWO NUMBERS IN TWO VARIABLES, CALLED: NUM1, NUM2
 * NOW DECLARE A VARIABLE CALLED RESULT.
 * IF NUM1 IS BIGGER THAN NUM2 THEN RESULT WILL BE DOUBLE OF NUM1. IF NOT, THEN THE VALUE OF THE VARIABLE RESULT WILL BE THE SUM OF NUM1 AND NUM2.
 * WRITE A SIMPLE IF-ELSE.
 * ALSO, WRITE IT USING TERNARY OPERATOR.
 */


let num1 = 20;
let num2 = 5;
let result;

if(num1 > num2){
    result = num1 * 2;
}
else{
    result = num1 + num2;
}
console.log(result);

// ternary oparator
// let num1 = 10;
// let num2 = 5;
// let result = (num1 > num2) ? num1 * 2 : num1 + num2;
// console.log(result);