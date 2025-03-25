function Car(make, model, year) {  //fuction_constructor
    this.make = make;
    this.model = model;
    this.year =  year;
    
    this.display = function() {
        document.write(this.make +this.model + this.year);
    };
}

let car1 = new Car("Hyundai","i20", 2014); 
let car2 = new Car("Honda","city", 2020); 
let car3 = new Car("Tata","Nano", 2024); 

car1.display();
car2.display();
car3.display();