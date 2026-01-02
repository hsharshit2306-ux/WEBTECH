  // 1. Real-time validation using oninput
        function checkStrength() {
            const pass = document.getElementById('password').value;
            const hint = document.getElementById('passHint');

            if (pass.length > 0 && pass.length < 6) {
                hint.style.display = "block";
            } else {
                hint.style.display = "none";
            }
        }

        // 2. Final validation using onsubmit
        function validateForm() {
            const user = document.getElementById('username').value;
            const pass = document.getElementById('password').value;

            // Check if fields are empty
            if (user === "" || pass === "") {
                alert("Error: All fields must be filled out!");
                return false; // Prevents the form from submitting
            }

            // Check password length
            if (pass.length < 6) {
                alert("Error: Password must be at least 6 characters long.");
                return false; // Prevents the form from submitting
            }

            // If everything is correct
            alert("Success! Form submitted for " + user);
            return true; // Allows the form to submit
        }