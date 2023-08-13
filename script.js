var currentSlide = 0;
showSlide(currentSlide);

function moveSlide(n) {
    var nextSlide = currentSlide + n;
    if (nextSlide < 0 || nextSlide >= document.getElementsByClassName("slide").length) {
        return; // Exit if trying to move before the first slide or after the last slide
    }
    showSlide(nextSlide);
}

function showSlide(n) {
    var slides = document.getElementsByClassName("slide");
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[n].style.display = "block";
    currentSlide = n;
}
document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
        moveSlide(-1);
    } else if (event.key === "ArrowRight") {
        moveSlide(1);
    }
});
