//Function declaration
function func() {
    return 'hello world';
 };
 const result = func();
 console.log(result);
 //Function expression
 const func = function() {
    return 'hello world';
 };
 const result = func();
 console.log(result);
 //Correctly return value from function (1)
 const func = function() {
    let text = 'hello';
    text = text + ' world';
    return text;
 };
 const result = func();
 console.log(result);
 //Correctly return value from function (2)
 const func = function () {
    let text = 'hello';
    text = text + ' world';
    return text;
 };
 const result = func();
 console.log(result);
 //Functions - parameters and arguments (1)
 const multiply = function (num) {
    return num * num;
 };
  
 const arg = 5;
  
 const result = multiply(arg);
 console.log(result === 25);
