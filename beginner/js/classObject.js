class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    display() {
        console.log(this.make + this.model + this.year);
    }
}

// Creating an object
let myCar = new Car("Toyota ", "Corolla ", 2022);

// Calling the display method
myCar.display();
