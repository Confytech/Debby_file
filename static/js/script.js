// Script to handle the confirmation prompt for customer deletion
function confirmDelete(customerName) {
    return confirm(`Are you sure you want to delete customer: ${customerName}?`);
}

// Script to validate the customer form
document.getElementById("addCustomerForm").addEventListener("submit", function(event) {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    // Check if fields are empty
    if (!name || !email || !phone) {
        event.preventDefault();
        alert("Please fill in all the required fields.");
    }
});

// Script for handling form submission in 'edit_customer.html' to confirm changes
document.getElementById("editCustomerForm").addEventListener("submit", function(event) {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    // Check if fields are empty
    if (!name || !email || !phone) {
        event.preventDefault();
        alert("Please fill in all the required fields.");
    } else {
        if (!confirm("Are you sure you want to save changes?")) {
            event.preventDefault();
        }
    }
});
