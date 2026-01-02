 // 1. CONST: Global scope - This value never changes
        const APP_NAME = "LogicDemo v1.0";

        // 2. USER-DEFINED FUNCTION (The "Brain")
        function calculateSquare(number) {
            return number * number; // Returns a value to whoever called it
        }

        // 3. MAIN INVOKER FUNCTION
        function mainController() {
            // LET: Block-scoped to this function
            let inputVal = document.getElementById('userInput').value;
            let display = document.getElementById('display');
            let finalHtml = `<strong>Running ${APP_NAME}</strong><br>`;

            if (inputVal === "") {
                display.innerHTML = "Please enter a number first!";
                return;
            }

            // 4. SCOPE DEMONSTRATION IN A LOOP
            for (let i = 1; i <= inputVal; i++) {
                // 'i' is only visible inside this loop

                // INVOKING our user-defined function
                let square = calculateSquare(i);

                // VAR: Function-scoped (visible anywhere inside mainController)
                var lastCalculated = square;

                finalHtml += `Square of ${i} is ${square}<br>`;
            }

            // Demonstration of Scope:
            // console.log(i); // This would FAIL (i is block-scoped to the loop)
            console.log("Last square was: " + lastCalculated); // This WORKS because var "leaks" out of the loop

            display.innerHTML = finalHtml;
        }