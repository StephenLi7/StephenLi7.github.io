// Code to display an alert box when the page is loaded
window.onload = function() {
    alert("Welcome to my website!");
}

// Code to change the text color when the user clicks on it
let text = document.querySelector("p");
text.addEventListener("click", function() {
    text.style.color = "red";
});

// Code to toggle a menu when the user clicks on a button
let menu = document.querySelector(".menu");
let button = document.querySelector(".menu-button");
button.addEventListener("click", function() {
    menu.classList.toggle("menu-active");
});
