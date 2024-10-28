const hamButton = document.querySelector('#menu');
const mainNav = document.querySelector('.navigation');
const lastModified = document.getElementById("lastModified");

lastModified.textContent = `Last modification: ${document.lastModified}`;





hamButton.addEventListener('click', () => {
    mainNav.classList.toggle('show');
    hamButton.classList.toggle('show');
})