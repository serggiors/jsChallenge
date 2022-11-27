//if statement - satisfy condition
let num = 0;
if (1 < 2) {
   num = 1;
}
console.log(num === 1);
//if...else statement - run else
let num = 0;
if (2 < 1) {
   num = 1;
} else {
   num = 2;
}
console.log(num === 2);
//if statement - add missing condition
let text = 'hello';
if (text === 'hello') {
   text = text + ' world';
}
console.log(text === 'hello world');