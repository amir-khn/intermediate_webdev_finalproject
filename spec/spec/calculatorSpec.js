
const { calculate } = require("../script.js");

describe("Interest Rate Calculator", function () {

    it("should calculate monthly payment correctly", function () {

        const result = calculate(12000, 12, 1);

        expect(result.monthlyPayment).toBeCloseTo(1066.19, 2);
    });

    it("should calculate a loan with zero interest", function () {

        const result = calculate(12000, 0, 1);

        expect(result.monthlyPayment).toBe(1000);
        expect(result.totalPayment).toBe(12000);
        expect(result.totalInterest).toBe(0);
    });

});
