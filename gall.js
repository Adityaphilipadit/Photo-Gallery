/* Category Filtering */

const buttons = document.querySelectorAll(
    ".filter-buttons button"
);

const photos = document.querySelectorAll(".photo");

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        const category = button.dataset.filter;

        photos.forEach(function(photo) {

            if (
                category === "all" ||
                photo.dataset.category === category
            ) {
                photo.classList.remove("hide");
            }
            else {
                photo.classList.add("hide");
            }

        });

        buttons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

    });

});


/* Lightbox */

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightbox-img");

const images = document.querySelectorAll(".photo img");

const closeBtn = document.querySelector(".close");

const prevBtn = document.getElementById("prev");

const nextBtn = document.getElementById("next");

let currentIndex = 0;


/* Display Image */

function showImage(index) {

    currentIndex = (index + images.length) % images.length;

    lightboxImg.src = images[currentIndex].src;

}


/* Open Image */

images.forEach(function(img, index) {

    img.addEventListener("click", function() {

        showImage(index);

        lightbox.style.display = "flex";

    });

});


/* Next Image */

nextBtn.addEventListener("click", function() {

    showImage(currentIndex + 1);

});


/* Previous Image */

prevBtn.addEventListener("click", function() {

    showImage(currentIndex - 1);

});


/* Close Button */

closeBtn.addEventListener("click", function() {

    lightbox.style.display = "none";

});


/* Close Outside Image */

lightbox.addEventListener("click", function(event) {

    if (event.target === lightbox) {

        lightbox.style.display = "none";

    }

});


/* Keyboard Controls */

document.addEventListener("keydown", function(event) {

    if (lightbox.style.display !== "flex") return;

    if (event.key === "ArrowRight") {

        showImage(currentIndex + 1);

    }

    if (event.key === "ArrowLeft") {

        showImage(currentIndex - 1);

    }

    if (event.key === "Escape") {

        lightbox.style.display = "none";

    }

});