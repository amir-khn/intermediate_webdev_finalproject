
document.addEventListener("DOMContentLoaded", function () {

    const calculateBtn = document.getElementById("calculateBtn");
    const result = document.getElementById("result");

    calculateBtn.addEventListener("click", function () {

        const principalValue = document.getElementById("principal").value;
        const rateValue = document.getElementById("rate").value;
        const timeValue = document.getElementById("time").value;

        const principal = Number(principalValue);
        const rate = Number(rateValue);
        const time = Number(timeValue);

        if (
            principalValue === "" ||
            rateValue === "" ||
            timeValue === "" ||
            !Number.isFinite(principal) ||
            !Number.isFinite(rate) ||
            !Number.isFinite(time) ||
            principal <= 0 ||
            rate < 0 ||
            time <= 0
        ) {
            result.textContent =
                "Please enter a positive principal, a non-negative interest rate, and a positive time.";
            return;
        }

        const interest = (principal * rate * time) / 100;
        const total = principal + interest;

        result.innerHTML =
            "Simple Interest: $" + interest.toFixed(2) +
            "<br>Total Amount: $" + total.toFixed(2);
    });

});
