var currentSlide = 0;
showSlide(currentSlide);

function moveSlide(n) {
    var nextSlide = currentSlide + n;
    var slides = document.getElementsByClassName("slide");

    if (nextSlide < 0 || nextSlide >= slides.length) {
        return; // Exit if trying to move before the first slide or after the last slide
    }

    var img = new Image();
    img.src = slides[nextSlide].src;

    img.onload = function() {
        showSlide(nextSlide); // Show the slide if the image exists
    };

    img.onerror = function() {
        // Do nothing or provide a fallback if the image doesn't exist
    };
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
