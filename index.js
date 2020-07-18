var slideIndex = 1;
showSlides(slideIndex);

var n;

function currentSlide(n){
    showSlides(slideIndex=n);
}

function showSlides(slideIndex){
    var i;    
    var n = slideIndex;
    var slides = document.getElementsByClassName("myslides");
    var dots = document.getElementsByClassName("dot");
    if(n>slides.length) {slideIndex=1;}
    if(n<1) {slideIndex = slides.length;}

    for(i=0;i<slides.length;i++){
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    console.log("success");
}