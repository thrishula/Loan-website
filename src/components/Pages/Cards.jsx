import React, { useState } from 'react';

function CardApplication() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    pan: '',
    cardType: '', // Credit or Debit Card
  });

  const [successMessage, setSuccessMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate successful card application
    setSuccessMessage(true);

    // Reset form fields after submission
    setFormData({
      name: '',
      phone: '',
      email: '',
      pan: '',
      cardType: '',
    });
  };

  return (
    <div className="bg-blue-100 min-h-screen justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[540px] ml-48 mt-30">
        <h2 className="text-2xl font-bold mb-6 text-blue-500">Apply for a Credit/Debit Card</h2>

        {/* Success message */}
        {successMessage && (
          <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-6">
            Card application successful! Your request has been submitted.
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          {/* PAN Number */}
          <div className="mb-4">
            <label className="block text-gray-700">PAN Number</label>
            <input
              type="text"
              name="pan"
              value={formData.pan}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your PAN number"
            />
          </div>

          {/* Card Type */}
          <div className="mb-4">
            <label className="block text-gray-700">Card Type</label>
            <select
              name="cardType"
              value={formData.cardType}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Card Type</option>
              <option value="Credit Card">Credit Card</option>
              <option value="Debit Card">Debit Card</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-600"
          >
            Apply for Card
          </button>
        </form>
      </div>

      {/* Image Section */}
      <div className="max-w-6xl mx-auto p-8">
        <div className="flex items-center justify-center">
          {/* Credit Card Image */}
          <div className="w-1/2 p-4">
            <img
              src="Images/top-view-credit-cards-with-lock-money-bag_23-2148578111.avif" // Replace with actual image
              alt="Credit Card"
              className="rounded-lg shadow-lg"
            />
            <h3 className="text-2xl text-center font-semibold mt-4 text-orange-500">Credit Card</h3>
          </div>

          {/* Debit Card Image */}
          <div className="w-1/2 p-4">
            <img
              src="Images/side-view-woman-with-smartphone-credit-card-purchasing-online_23-2148695670.avif" // Replace with actual image
              alt="Debit Card"
              className="rounded-lg shadow-lg"
            />
            <h3 className="text-2xl text-center font-semibold mt-4 text-orange-500">Debit Card</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardApplication;
