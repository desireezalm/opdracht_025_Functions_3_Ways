const number1 = 5;
const number2 = 10;

// FUNCTION DECLARATION

function squaredSum1(number1, number2) {
    const semiResult1 = (number1 * number1) + (number2 * number2);
    const result1 = semiResult1 * semiResult1;
    return result1;
}
console.log("Function Declaration: " + squaredSum1(number1, number2));


// FUNCTION EXPRESSION

const squaredSum2 = function(number1, number2) {
    const semiResult2 = (number1 * number1) + (number2 * number2);
    const result2 = semiResult2 * semiResult2;
    return result2;
};
console.log("Function Expression: " + squaredSum2(number1, number2));


// ARROW FUNCTION

const squaredSum3 = (number1, number2) => {
    const semiResult3 = (number1 * number1) + (number2 * number2);
    const result3 = semiResult3 * semiResult3;
    return result3;
}
console.log("Arrow Function: " + squaredSum3(number1, number2));