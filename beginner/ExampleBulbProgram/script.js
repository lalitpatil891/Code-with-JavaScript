var bulb = document.querySelector("#bulb")
var btn = document.querySelector("button")
var title = document.querySelector("h1")
var sts = document.querySelector("h4")

let temp = 0;

btn.addEventListener("click", function () {


    if (temp == 0) {
        bulb.style.backgroundColor = "greenyellow"
        sts.innerHTML="Bulb Is ON"
        sts.style.color="darkgreen"
        btn.innerHTML="OFF"
        console.log("bulb on")
        temp= 1;
    }
    else
    {
        bulb.style.backgroundColor = "white"
        sts.innerHTML="Bulb Is off"
        sts.style.color="red" 
        btn.innerHTML="ON"
        console.log("bulb off")
        temp = 0;
    }







})



