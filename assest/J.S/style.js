
// Burger Menu

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(function(link) {
    link.addEventListener("click", function() {
        navLinks.classList.remove("active");
    });
});

// Find My Location

const locationBtn = document.getElementById("locationBtn");
const locationResult = document.getElementById("locationResult");
const mapFrame = document.getElementById("mapFrame");

locationBtn.addEventListener("click", function() {

    if (navigator.geolocation) {

        locationResult.innerText = "Finding your location...";

        navigator.geolocation.getCurrentPosition(
            function(position) {

                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                locationResult.innerText =
                    "Your Location: " + latitude + ", " + longitude;

                mapFrame.src =
                    "https://maps.google.com/maps?q=" +
                    latitude + "," + longitude +
                    "&z=14&output=embed";
            },

            function() {
                locationResult.innerText =
                    "Unable to find location. Please allow location access.";
            }
        );

    } else {
        locationResult.innerText =
            "Geolocation is not supported by your browser.";
    }
});

// Contact Form

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Thank you! Your message has been received.");

    contactForm.reset();
});

// Newsletter Form

const newsletterForm = document.getElementById("newsletterForm");

newsletterForm.addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Thank you for subscribing to Alpine Ascent!");

    newsletterForm.reset();
});

