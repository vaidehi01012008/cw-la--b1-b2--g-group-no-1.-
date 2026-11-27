function goToSlide(slideNumber) {



    var slides = document.getElementsByClassName("slide");

    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }



    document.getElementById("slide" + slideNumber).classList.add("active");



    window.scrollTo(0, 0);

}