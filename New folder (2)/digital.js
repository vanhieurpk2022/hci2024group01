
            // Function to open the contact form modal
    function openContactForm() {
        document.getElementById("contactModal").style.display = "block";
    }
    
    // Function to close the contact form modal
    function closeContactForm() {
        document.getElementById("contactModal").style.display = "none";
    }
    
    // Function to handle form submission
    function submitContactForm(event) {
        event.preventDefault(); // Prevents the default form submission
    
        // Collect form data
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
    
        // Display the collected data or send it to a server here
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);
    
        // Show a success message or alert
        alert("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.");
    
        // Close the modal
        closeContactForm();
    
        // Optionally, reset the form fields
        document.getElementById("contactForm").reset();
    }
    function openNewTab() {
        // URL muốn mở
        const url = "lichhen.html";
        // Mở tab mới
        window.open(url, "_blank");
    }
