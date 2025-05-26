// Round to the nearest integer (10.5 → 11)
console.log(Math.round(10.5));      

// Round up to the next integer (10.1 → 11)
console.log(Math.ceil(10.1));       

// Round down to the previous integer (10.8 → 10)
console.log(Math.floor(10.8));      

// Remove the decimal part (truncate) (18.98 → 18)
console.log(Math.trunc(18.98));     

// Power of a number (2^5 = 32)
console.log(Math.pow(2, 5));        

// Square root of 25 = 5
console.log(Math.sqrt(25));         

// Absolute value of -15 = 15
console.log(Math.abs(-15));         

// Maximum value among the numbers
console.log(Math.max(78, 65, 12));  

// Minimum value among the numbers
console.log(Math.min(78, 65, 12));  

// Generate a random 4-digit number (1000 to 9999)
console.log(Math.trunc(Math.random() * 9000) + 1000);  

// Declare a number
let a = 89.09835;

// Format to 3 decimal places → "89.098"
console.log(a.toFixed(3));
