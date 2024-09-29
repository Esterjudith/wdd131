const mainNav = document.querySelector('.navigation');
const hamButton = document.querySelector('#menu');
const lastModified = document.getElementById("lastModified");
const year = new Date().getFullYear(); 

lastModified.textContent = `Last modification: ${document.lastModified}`;

//Add a click event listener to the hamburger button & use a callback function that toggles. 

hamButton.addEventListener('click', () => {
    mainNav.classList.toggle('show');
    hamButton.classList.toggle('show');
})