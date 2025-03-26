let numbers = [1,2,3,4,5];
let squares = numbers.map(x => x*x);

squares.forEach(function(element){
    document.write(element + " "); //1 4 9 16 25
});
