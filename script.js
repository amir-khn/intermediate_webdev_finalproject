
document.addEventListener("DOMContentLoaded", function () {

    const calculatorForm = document.getElementById("calculatorForm");
    const result = document.getElementById("result");

    calculatorForm.addEventListener("submit", function (event) {

        event.preventDefault();

        // Get input values
        const principal = parseFloat(
            document.getElementById("principal").value
        );

        const annualRate = parseFloat(
            document.getElementById("rate").value
        );

        const years = parseFloat(
            document.getElementById("years").value
        );

        // Validate inputs
        if (
            !Number.isFinite(principal) ||
            !Number.isFinite(annualRate) ||
            !Number.isFinite(years) ||
            principal <= 0 ||
            annualRate < 0 ||
            years <= 0
        ) {
            result.textContent = "Please enter valid loan details.";
            return;
        }

        // Calculate monthly interest rate
        const monthlyRate = annualRate / 100 / 12;

        // Calculate total number of payments
        const numberOfPayments = years * 12;

        // Calculate monthly payment
        let monthlyPayment;

        if (monthlyRate === 0) {
            monthlyPayment = principal / numberOfPayments;
        } else {
            monthlyPayment =
                principal *
                monthlyRate *
                Math.pow(1 + monthlyRate, numberOfPayments) /
                (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
        }

        // Calculate total payment and interest
        const totalPayment = monthlyPayment * numberOfPayments;
        const totalInterest = totalPayment - principal;

        // Display results
        result.innerHTML = `
            <h3>Calculation Results</h3>
            <p>Monthly Payment: $${monthlyPayment.toFixed(2)}</p>
            <p>Total Payment: $${totalPayment.toFixed(2)}</p>
            <p>Total Interest: $${totalInterest.toFixed(2)}</p>
        `;
    });

});
