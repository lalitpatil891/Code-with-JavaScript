// UnaryOpratorDemoEx 

let a = 11, b = 22;
let c = a + b + a++ + b++ + ++a + ++b; //11 + 22 + 11 + 22 + 13 + 24 = 103
console.log("a=" + a);  //13
console.log("b=" + b);  //24
console.log("c=" + c);  //103

//2
let q = true;  //1
q++; //2
console.log(b); //2