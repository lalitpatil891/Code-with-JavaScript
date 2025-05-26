// Swap two variables via 3 methods

// -- 1 swap two variables without extra variable

let p = 40;
let q = 30;

p = p + q ;  //70
q = p - q ;  //70-30 = 40
p = p - q;  // 70 - 40 = 30

console.log(p,q);

//-- 2 ---------------------------------
let x = 12;
let y = 13;
[x,y] = [y,x]   // This is destructuring assignment, a shorthand to swap values.
document.write(x,y);

//-- 3 Swap two variable using third variable
let a = 10;

let b = 30;

let c = a;
a = b;
b = c;

console.log(a,b);
