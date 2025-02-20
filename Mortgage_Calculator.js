import React, { useState } from "react";

/**
 * Mortgage Calculator App
 * 
 * This React application allows users to calculate their estimated monthly mortgage payments
 * based on home price, interest rate, down payment percentage, and property tax rate.
 */

export default function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState(480000);
  const [interestRate, setInterestRate] = useState(6.75);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [insurance, setInsurance] = useState(83.33);
  const [propertyTaxRate, setPropertyTaxRate] = useState(0.68);

  const calculateMortgage = () => {
    const downPayment = (downPaymentPercent / 100) * homePrice;
    const loanAmount = homePrice - downPayment;
    const monthlyInterest = (interestRate / 100) / 12;
    const numPayments = 30 * 12;
    const mortgagePayment =
      (loanAmount * monthlyInterest * Math.pow(1 + monthlyInterest, numPayments)) /
      (Math.pow(1 + monthlyInterest, numPayments) - 1);
    const monthlyPropertyTax = (propertyTaxRate / 100) * homePrice / 12;
    const totalMonthlyCost = mortgagePayment + monthlyPropertyTax + insurance;

    return {
      downPayment,
      loanAmount,
      mortgagePayment,
      monthlyPropertyTax,
      totalMonthlyCost,
    };
  };

  const { downPayment, loanAmount, mortgagePayment, monthlyPropertyTax, totalMonthlyCost } = calculateMortgage();

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Mortgage Calculator</h2>
      <label className="block mb-2">Home Price ($):</label>
      <input
        type="number"
        value={homePrice}
        onChange={(e) => setHomePrice(Number(e.target.value))}
        className="w-full p-2 border rounded"
      />
      <label className="block mt-2">Interest Rate (%):</label>
      <input
        type="number"
        value={interestRate}
        onChange={(e) => setInterestRate(Number(e.target.value))}
        className="w-full p-2 border rounded"
      />
      <label className="block mt-2">Down Payment (%):</label>
      <input
        type="number"
        value={downPaymentPercent}
        onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
        className="w-full p-2 border rounded"
      />
      <label className="block mt-2">Property Tax Rate (%):</label>
      <input
        type="number"
        value={propertyTaxRate}
        onChange={(e) => setPropertyTaxRate(Number(e.target.value))}
        className="w-full p-2 border rounded"
      />
      <div className="mt-4 p-4 bg-gray-100 rounded">
        <p><strong>Down Payment:</strong> ${downPayment.toFixed(2)}</p>
        <p><strong>Loan Amount:</strong> ${loanAmount.toFixed(2)}</p>
        <p><strong>Monthly Mortgage Payment:</strong> ${mortgagePayment.toFixed(2)}</p>
        <p><strong>Monthly Property Tax:</strong> ${monthlyPropertyTax.toFixed(2)}</p>
        <p><strong>Total Monthly Cost:</strong> ${totalMonthlyCost.toFixed(2)}</p>
      </div>
    </div>
  );
}
