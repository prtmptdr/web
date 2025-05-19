document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    
    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
        return;
    }
    
    document.getElementById("formMessage").innerText = "Thank you for your message!";
    this.reset();
});
