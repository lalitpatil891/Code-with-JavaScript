/*
parameter constructor        
	constructor created with parameters is called "Parameter constructor".
	Adv:  used for dynamic initialization of objects, means every object initialized with different data
*/
//creating parameter constructor
	 function Book(title, author, price, year) 
	 {				
		//properties init
		this.title = title;	//property = parameter
		this.year = year;
		this.author = author;
		this.price = price;
	    //method
		this.getBook=function(){
			return `${this.title} &nbsp; ${this.author} &nbsp; ${this.price} &nbsp; ${this.year}<br>`; 
		}
	  }