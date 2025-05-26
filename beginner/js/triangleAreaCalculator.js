//area of a triangle using Heron’s formula,


let a = 5;
let b = 4;
let c = 3;

let s = (a + b + c) / 2;  //s is the semi-perimeter
console.log(s);

console.log(Math.sqrt(s * (s - a) * (s - b) * (s - c)));


/*

a, b, c are the lengths of the sides

s is the semi-perimeter:

Area= 
s(s−a)(s−b)(s−c)


Area= 
6⋅(6−5)⋅(6−4)⋅(6−3)= 6⋅1⋅2⋅3= 36 =6

*/