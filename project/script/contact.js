const lastModified = document.getElementById("lastModified");
const hamButton = document.querySelector('#menu');
const mainNav = document.querySelector('.navigation');
lastModified.textContent = `Last modification: ${document.lastModified}`;


hamButton.addEventListener('click', () => {

    mainNav.classList.toggle('show');
    hamButton.classList.toggle('show');
})

// Form
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission for now

    // Form fields
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();

    // Check that required fields are not empty- validate
    if (firstName && lastName && email) {
        saveFormDataToLocalStorage(firstName, lastName, email); // Call the function to save data
    } else {
        alert("Please fill in all required fields.");
    }
});

function displaySubmissionMessage() {
    if (localStorage.getItem("firstName")) {
        document.getElementById("contactForm").innerHTML = `<p>Welcome back, ${localStorage.getItem("firstName")}! We’ve saved your details.</p>`;
    } else {
        document.getSelection(".wf3").innerHTML += `<p>Thank you for your submission!</p>`;
    }
}

function saveFormDataToLocalStorage(firstName, lastName, email) {
    const formData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        comments: document.getElementById("textarea").value.trim()
    };

    // Store each item in localStorage
    localStorage.setItem("userData", JSON.stringify(formData));

    // Display submission message
    displaySubmissionMessage();
}

function loadFormData() {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (storedData) {
        document.getElementById("firstName").value = storedData.firstName;
        document.getElementById("lastName").value = storedData.lastName;
        document.getElementById("email").value = storedData.email;
        document.getElementById("textarea").value = storedData.comments;
        document.getSelection(".wf3").innerHTML += `<p>Welcome back, ${storedData.firstName}!</p>`;
    }
}

// Load form data on page load
window.addEventListener("load", loadFormData);



