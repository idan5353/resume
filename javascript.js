let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    // Hide all slides and remove the 'active' class
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    // Show the current slide by adding the 'active' class
    slides[currentSlide].classList.add('active');
}

function moveSlide(direction) {
    showSlide(currentSlide + direction);
}

// Initialize the first slide
showSlide(currentSlide);

// Optional: Auto slide change every 5 seconds
setInterval(() => {
    moveSlide(1);
}, 5000);
