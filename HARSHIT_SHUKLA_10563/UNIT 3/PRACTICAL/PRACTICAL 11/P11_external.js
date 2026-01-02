function calculate(operator) {
            // 1. Get the values from the input fields
            const n1 = parseFloat(document.getElementById('num1').value);
            const n2 = parseFloat(document.getElementById('num2').value);
            const resultDisplay = document.getElementById('result');

            // 2. Validate input
            if (isNaN(n1) || isNaN(n2)) {
                resultDisplay.innerText = "Please enter valid numbers";
                return;
            }

            // 3. Perform Logic
            let res;
            switch (operator) {
                case '+': res = n1 + n2; break;
                case '-': res = n1 - n2; break;
                case '*': res = n1 * n2; break;
                case '/':
                    res = n2 !== 0 ? n1 / n2 : "Cannot divide by zero";
                    break;
            }

            // 4. Display result
            resultDisplay.innerText = "Result: " + res;
        }