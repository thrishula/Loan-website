import React, { useState } from 'react';

function LoanInterest() {
  const [principal, setPrincipal] = useState('');
  const [time, setTime] = useState('');
  const [loanType, setLoanType] = useState('');
  const [interestRate, setInterestRate] = useState(null);
  const [interest, setInterest] = useState(null);

  const interestRates = {
    "Home Loan": 6.5,
    "Car Loan": 8.0,
    "Personal Loan": 12.0,
  };

  const handleCalculation = (e) => {
    e.preventDefault();
    const rate = interestRates[loanType];
    if (principal && time && loanType) {
      const calculatedInterest = (principal * rate * time) / 100;
      setInterest(calculatedInterest);
      setInterestRate(rate);
    }
  };

  return (
    <div>
       {/* Formula Section */}
       <div className="bg-blue-100 rounded-lg">
          <p className="text-lg text-gray-700 font-semibold">
            Formula for Simple Interest:
          </p>
          <p className="text-gray-600 p-4">
            <strong>Interest = (Principal Amount * Interest Rate * Time) / 100</strong>
          </p>
          <p className="text-gray-600 mt-2">
            Where:
            <ul className="list-disc ml-5 mt-1 p-3">
              <li className='pb-3'>Principal Amount: Loan amount</li>
              <li className='pb-3'>Interest Rate: Annual interest rate (%)</li>
              <li>Time: Loan duration in years</li>
            </ul>
          </p>
        </div>
    <div className="bg-blue-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md ">
        <h2 className="text-3xl font-bold text-blue-500 mb-6">Loan Interest Calculation</h2>
 
       

        {/* Form for Calculation */}
        <form onSubmit={handleCalculation}>
          <div className="mb-4">
            <label className="block text-gray-700">Loan Type</label>
            <select
              name="loanType"
              value={loanType}
              onChange={(e) => setLoanType(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Loan Type</option>
              <option value="Home Loan">Home Loan</option>
              <option value="Car Loan">Car Loan</option>
              <option value="Personal Loan">Personal Loan</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Principal Amount</label>
            <input
              type="number"
              name="principal"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter loan amount"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Loan Duration (Years)</label>
            <input
              type="number"
              name="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter loan tenure in years"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-600"
          >
            Calculate Interest
          </button>
        </form>

        {/* Display Calculated Interest */}
        {interest !== null && (
          <div className="bg-green-100 text-green-800 p-4 rounded-lg mt-6">
            <p className="font-semibold text-lg">
              For a {loanType} of ₹{principal} at an interest rate of {interestRate}% for {time} year(s):
            </p>
            <p className="text-xl font-bold">Interest: ₹{interest}</p>
          </div>
        )}
      </div>
    </div>
    </div>
  );
}

export default LoanInterest;