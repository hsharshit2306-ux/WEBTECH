 // Global array to store history for the loop demo
        let history = [];

        function runLogic() {
            // 1. Get Values
            const n1 = parseFloat(document.getElementById('val1').value);
            const n2 = parseFloat(document.getElementById('val2').value);
            const statusText = document.getElementById('status');
            const logDiv = document.getElementById('historyLog');

            // 2. CONDITIONAL STATEMENTS (if/else)
            if (isNaN(n1) || isNaN(n2)) {
                statusText.style.color = "red";
                statusText.innerHTML = "Status: Error! Please enter two numbers.";
                return;
            }

            let sum = n1 + n2;
            statusText.style.color = "green";

            // Nested Conditional
            if (sum > 100) {
                statusText.innerHTML = "Status: Large Result (" + sum + ")";
            } else {
                statusText.innerHTML = "Status: Small Result (" + sum + ")";
            }

            // Add result to history array
            history.push(`Added ${n1} + ${n2} = ${sum}`);

            // 3. LOOP DEMO (for loop)
            // We clear the box and rebuild the list using a loop
            logDiv.innerHTML = ""; // Clear old display

            for (let i = 0; i < history.length; i++) {
                let item = document.createElement('div');
                item.className = "log-item";
                item.innerText = (i + 1) + ". " + history[i];
                logDiv.appendChild(item);
            }

            /* Note: We could also use a While loop here:
               let j = 0;
               while (j < history.length) { ... j++; }
            */
        }