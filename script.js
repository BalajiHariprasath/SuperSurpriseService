document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting and refreshing the page
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Hardcoded login credentials (you can replace this with an API call in real scenarios)
    const correctUsername = "admin";
    const correctPassword = "admin123";

    // Check if the entered credentials are correct
    if (username === correctUsername && password === correctPassword) {
        // Redirect to success page
        window.location.href = "success.html"; // Change to success.html
    } else {
        alert("Invalid credentials. Please try again.");
    }
});

// Get all tabs and content elements
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

// Add an event listener to each tab
tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        // Remove the 'active' class from all tabs and content
        tabs.forEach(t => t.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Add the 'active' class to the clicked tab and corresponding content
        tab.classList.add('active');
        tabContents[index].classList.add('active');
    });
});

// Set the first tab and content to be active by default
tabs[0].classList.add('active');
tabContents[0].classList.add('active');
