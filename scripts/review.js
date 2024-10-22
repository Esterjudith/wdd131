window.onload = function() {
    displayStorage();  // Ensure the function is called after the page loads
};

function displayStorage() {
    const reviewCount = document.getElementById("reviewCount"); 
    console.log(reviewCount ? reviewCount.innerText : "Element not found");
    
    const storedClicks = localStorage.getItem("clicks");
    console.log(storedClicks); 
    
    if (storedClicks) {
        reviewCount.innerText = storedClicks; // Update the innerText if clicks exist
    }
}