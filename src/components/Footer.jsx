import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section */}
          <div className="mb-4 md:mb-0 text-center md:text-left">
            {/* <h3 className="text-xl font-bold">Loan Management System</h3> */}
            <p className="text-gray-400">© 2023 All rights reserved.</p>
          </div>

          {/* Middle Section */}
          <div className="mb-4 md:mb-0">
            <ul className="flex space-x-4">
              <li>
                <Link to="/minibank" className="text-gray-400 hover:text-white">
                  Mini-Bank
                </Link>
              </li>
              <li>
                <Link to="/Loans" className="text-gray-400 hover:text-white">
                  Loans
                </Link>
              </li>
              <li>
                <Link to="/credit Tracker" className="text-gray-400 hover:text-white">
                  Credit Tracker
                </Link>
              </li>
              <li>
                <Link to="/cards" className="text-gray-400 hover:text-white">
                  Cards
                </Link>
              </li>
              <li>
                <Link to="/calculators" className="text-gray-400 hover:text-white">
                  Calculators
                </Link>
              </li>
              <li>
                <Link to="/contact us" className="text-gray-400 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
