document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting and refreshing the page
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Hardcoded login credentials (you can replace this with an API call in real scenarios)
    const correctUsername = "admin";
    const correctPassword = "admin";

    // Check if the entered credentials are correct
    if (username === correctUsername && password === correctPassword) {
        // Redirect to success page
        window.location.href = "content.html"; // Change to success.html
    } else {
        alert("Invalid credentials. Please try again.");
    }
});

// Function to show content for the clicked tab
function showTab(index) {
    // Get all tabs and content elements
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab-content');
    
    // Remove the 'active' class from all tabs and content
    tabs.forEach(tab => tab.classList.remove('active'));
    contents.forEach(content => content.classList.remove('active'));
    
    // Add the 'active' class to the clicked tab and corresponding content
    tabs[index].classList.add('active');
    contents[index].classList.add('active');
}

// Set the first tab as active by default when the page loads
document.addEventListener('DOMContentLoaded', () => {
    showTab(0);  // Display the first tab by default
});
