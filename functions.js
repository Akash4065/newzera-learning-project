var slide1 = document.getElementsByClassName("slide-1");
var slide2 = document.getElementsByClassName("slide-2");

var dots = document.getElementsByClassName("dot");

slide1.style.display = "none";
slide2.style.display = "none";

dot[0].className = dot[0].className.replace("active","");
dot[1].className = dot[1].className.replace("active","");

function show1(){
    console.log("1");
    slide1.style.display = "block";
    dot[0].className += "active";
}

function show2(){
    console.log("2");
    slide2.style.display = "block";
    dot[1].className += "active";
}