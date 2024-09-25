import React from 'react';

function ContactUs() {
  return (
    <div className="p-8 bg-white  shadow-lg mx-auto ">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-500">Contact Us</h2>
      
      <p className="text-lg text-blue-400 mb-6">
        Welcome to the Loan Management System's contact page. Our bank is dedicated to providing you with exceptional service and support regarding your loan queries, applications, and financial needs. Feel free to reach out to us through the following details, and we will be happy to assist you.
      </p>

      <div className="mb-4">
        <h3 className="text-xl font-semibold text-orange-500 mb-2">Bank Timings</h3>
        <p className="text-blue-400">
          Our bank is open during the following hours:
        </p>
        <ul className="list-disc pl-5 text-blue-400 mt-2">
          <li>Monday to Friday: 9:00 AM - 6:00 PM</li>
          <li>Saturday: 10:00 AM - 2:00 PM</li>
          <li>Sunday: Closed</li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-orange-500 mb-2">Contact Information</h3>
        <p className="text-blue-400">
          You can contact our customer service team through the following channels:
        </p>
        <ul className="list-disc pl-5 text-blue-400 mt-2">
          <li>Phone: +1-234-567-8900</li>
          <li>Email: support@loanmanagementsystem.com</li>
          <li>Address: 123 Loan St., Financial District, City, Country</li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-orange-500 mb-2">Online Services</h3>
        <p className="text-blue-400">
          In addition to visiting our branches, you can access our online loan management portal 24/7 to apply for loans, track your loan applications, and view your credit score.
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-orange-500 mb-2">Emergency Assistance</h3>
        <p className="text-blue-400">
          For urgent matters outside our normal working hours, you can contact our emergency help desk at <span className="font-bold">+1-987-654-3210</span>. We are here to assist you with any critical issues regarding your loans or financial services.
        </p>
      </div>

      <p className="text-gray-500 text-center mt-10">
        Thank you for choosing us as your financial partner. We are committed to providing the best loan management experience possible.
      </p>
    </div>
  );
}

export default ContactUs;