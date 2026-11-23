function toNumberValue(val) {
  if (val === null || val === undefined) {
    return NaN;
  }
  const cleaned = String(val).trim();
  if (cleaned === "") {
    return NaN;
  }
  const num = Number(cleaned);
  return Number.isFinite(num) ? num : NaN;
}

function calculateInterest(principal, rate, time) {
  const p = toNumberValue(principal);
  const r = toNumberValue(rate);
  const t = toNumberValue(time);

  if (Number.isNaN(p) || Number.isNaN(r) || Number.isNaN(t)) {
    return {
      simpleInterest: NaN,
      totalAmount: NaN
    };
  }

  const simpleInterest = (p * r * t) / 100;
  const totalAmount = p + simpleInterest;

  return {
    simpleInterest,
    totalAmount
  };
}

function handleCalculateClick() {
  const principalInput = document.getElementById("principal");
  const rateInput = document.getElementById("rate");
  const timeInput = document.getElementById("time");
  const simpleInterestEl = document.getElementById("simpleInterest");
  const totalAmountEl = document.getElementById("totalAmount");

  if (!principalInput || !rateInput || !timeInput) {
    return;
  }

  const { simpleInterest, totalAmount } = calculateInterest(
    principalInput.value,
    rateInput.value,
    timeInput.value
  );

  if (simpleInterestEl) {
    simpleInterestEl.textContent = Number.isNaN(simpleInterest)
      ? "Invalid input"
      : simpleInterest.toFixed(2);
  }

  if (totalAmountEl) {
    totalAmountEl.textContent = Number.isNaN(totalAmount)
      ? "Invalid input"
      : totalAmount.toFixed(2);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("calculate") || document.getElementById("calculateBtn");
  if (button) {
    button.addEventListener("click", handleCalculateClick);
  }
});

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    toNumberValue,
    calculateInterest,
    handleCalculateClick
  };
}
