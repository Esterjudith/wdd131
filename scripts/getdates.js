const currentYear = document.getElementById("currentyear");
const lastModified = document.getElementById("lastModified");
const year = new Date().getFullYear(); 

lastModified.textContent = `Last modification: ${document.lastModified}`;

currentYear.textContent = year;

