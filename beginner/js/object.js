let dog = {
    breed: 'Golden retriever',  //Properties
    height: '4ft',
    age: 2,
    display: function() {    //Inside the object function we called methods also.
        document.write(this.breed + this.height+ this.age);
    }
};

document.write(dog.breed);
document.write(dog.height);
document.write(dog.age);

dog.weight = "32kg";
document.write(dog.weight); 

document.write(dog['breed']);
document.write(dog['age']);