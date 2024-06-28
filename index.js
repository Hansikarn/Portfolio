// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', function() {
    const hamIcon = this.querySelector('.hamburger-icon');
    const crossIcon = this.querySelector('.cross-icon');

    if (hamIcon.style.display === "none") {
        hamIcon.style.display = "inline-block";
        crossIcon.style.display = "none";
        menu.style.display = "none";
    } else {
        hamIcon.style.display = "none";
        crossIcon.style.display = "inline-block";
        menu.style.display = "flex"; // Assuming your menu uses flexbox
    }
});

// Update copyright year dynamically
const currentYear = new Date().getFullYear();
document.getElementById('copyright-year').textContent = currentYear;
