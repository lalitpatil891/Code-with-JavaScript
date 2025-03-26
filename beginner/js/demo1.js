let number = [1,2,3,4,5];

let odd_number = number.filter(x => x%2 !=0 );

odd_number.forEach(function(element){
    document.write(element+ " ");
});