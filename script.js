const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Close mobile menu after clicking a navigation link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// Close menu when clicking outside of it
document.addEventListener("click", (event) => {
    const clickedInsideNav =
        navLinks.contains(event.target) ||
        menuToggle.contains(event.target);

    if (!clickedInsideNav) {
        navLinks.classList.remove("active");
    }
});