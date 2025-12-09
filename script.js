// Example: handle bidder login/registration
document.getElementById('bidder-form').addEventListener('submit', function(e){
    e.preventDefault();
    const username = document.getElementById('bidder-username').value;
    const password = document.getElementById('bidder-password').value;

    // For demo: simple alert
    alert(`Logged in / Registered as ${username}`);
});
