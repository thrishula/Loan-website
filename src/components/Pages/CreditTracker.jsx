import React, { useState } from 'react';

function CreditTracker() {
  // State to store financial information and credit score
  const [paymentHistory, setPaymentHistory] = useState(100); // percentage (0 - 100)
  const [creditUtilization, setCreditUtilization] = useState(30); // percentage (0 - 100)
  const [loanStatus, setLoanStatus] = useState('On-time'); // On-time or Delayed
  const [creditScore, setCreditScore] = useState(720); // Initial Credit Score

  // Function to calculate credit score based on inputs
  const calculateCreditScore = () => {
    let score = 300; // Start with a base score

    // Modify the score based on payment history
    score += (paymentHistory / 100) * 300;

    // Modify the score based on credit utilization
    if (creditUtilization <= 30) {
      score += 200; // Ideal utilization
    } else if (creditUtilization > 30 && creditUtilization <= 50) {
      score += 100;
    } else {
      score += 50; // High credit utilization
    }

    // Modify the score based on loan status
    if (loanStatus === 'On-time') {
      score += 100; // Positive impact
    } else {
      score -= 100; // Negative impact
    }

    setCreditScore(Math.round(score)); // Update the state with the calculated score
  };

  return (
    <div className="p-8 bg-blue-100 rounded-lg shadow-lg w-full">
      <h2 className="text-2xl font-bold mb-6">Dynamic Credit Tracker</h2>
      
      {/* Credit Score Display */}
      <p className="text-lg mb-4">
        Your Credit Score: <span className="font-bold text-blue-500 text-3xl">{creditScore}</span>
      </p>

      <p className="mb-6 text-sm text-gray-600">
        Your credit score is calculated based on your payment history, credit utilization, and loan status.
      </p>

      {/* Financial Information Input Form */}
      <form className="space-y-4">
        {/* Payment History */}
        <div>
          <label className="block text-gray-700">Payment History (%)</label>
          <input
            type="range"
            min="0"
            max="100"
            value={paymentHistory}
            onChange={(e) => setPaymentHistory(Number(e.target.value))}
            className="w-full mt-1"
          />
          <p className="text-gray-500 text-sm">Current Payment History: {paymentHistory}%</p>
        </div>

        {/* Credit Utilization */}
        <div>
          <label className="block text-gray-700">Credit Utilization (%)</label>
          <input
            type="range"
            min="0"
            max="100"
            value={creditUtilization}
            onChange={(e) => setCreditUtilization(Number(e.target.value))}
            className="w-full mt-1"
          />
          <p className="text-gray-500 text-sm">Current Credit Utilization: {creditUtilization}%</p>
        </div>

        {/* Loan Status */}
        <div>
          <label className="block text-gray-700">Loan Status</label>
          <select
            value={loanStatus}
            onChange={(e) => setLoanStatus(e.target.value)}
            className="w-full px-4 py-2  border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="On-time">On-time</option>
            <option value="Delayed">Delayed</option>
          </select>
        </div>

        {/* Button to Recalculate Credit Score */}
        <button
          type="button"
          onClick={calculateCreditScore}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Recalculate Credit Score
        </button>
      </form>
    </div>
  );
}

export default CreditTracker;
