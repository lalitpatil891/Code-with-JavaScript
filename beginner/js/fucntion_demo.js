"use strict"

function get_max(a,b) { 
    if(a>b)
    {
        return a;
    }
    else
    {
        return b;
    }
}

let max = get_max(5,10); //function calling
document.write(max); //as function arguments