$(document).ready(function() {
    $('#userForm').submit(function(event) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const name = $('#name').val();
        const email = $('#email').val();
        const age = $('#age').val();
        const dob = $('#dob').val();
        
        if (!emailRegex.test(email)) {
            alert('Invalid email format');
            event.preventDefault();
        }
        
        if (isNaN(age) || age < 1) {
            alert('Age must be a positive integer');
            event.preventDefault();
        }
    });
});
