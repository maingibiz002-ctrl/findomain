// 1. We "Target" the header by its class name
const myHeader = document.querySelector(".navbar");

// 2. We create the Function
window.onscroll = function() {
    
    // Check if the page has been scrolled down more than 50px
    if (window.scrollY > 50) {
        // Add a class called "header-active"
        myHeader.classList.add("header-active");
    } else {
        // If they scroll back to the top, remove it
        myHeader.classList.remove("header-active");
    }
};
// 1. Target the elements
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-links');

// 2. The Toggle Function
menu.addEventListener('click', function() {
    // This adds 'active' if it's missing, or removes it if it's there
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});