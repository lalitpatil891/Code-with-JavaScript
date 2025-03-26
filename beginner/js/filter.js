let numbers = [1,2,3,4,5];
let even_numbers = numbers.filter(x => x*x%2 ==0);

even_numbers.forEach(function(element){
    document.write(element + " "); 
});


/*
Odd number
let number = [1,2,3,4,5];

let odd_number = number.filter(x => x%2 !=0 );

odd_number.forEach(function(element){
    document.write(element+ " ");
}); */