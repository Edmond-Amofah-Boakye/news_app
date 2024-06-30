import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Logo and Description */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">TechApp</h2>
            <p className="mt-2 text-gray-400">
              Your go-to platform for the latest tech news and updates.
            </p>
          </div>
          {/* Quick Links */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
            <ul>
              <li className="mb-2"><a href="/" className="hover:underline">Home</a></li>
              <li className="mb-2"><a href="/about" className="hover:underline">About</a></li>
              <li className="mb-2"><a href="/contact" className="hover:underline">Contact</a></li>
              <li className="mb-2"><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
          {/* Contact Information */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
            <ul>
              <li className="mb-2"><a href="mailto:info@techapp.com" className="hover:underline">info@techapp.com</a></li>
              <li className="mb-2"><a href="tel:+123456789" className="hover:underline">+123 456 789</a></li>
            </ul>
          </div>
          {/* Social Media Links */}
          <div className="w-full md:w-1/4">
            <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400"><i className="fab fa-facebook-f"></i> Facebook</a>
              <a href="#" className="hover:text-gray-400"><i className="fab fa-twitter"></i> Twitter</a>
              <a href="#" className="hover:text-gray-400"><i className="fab fa-instagram"></i> Instagram</a>
              <a href="#" className="hover:text-gray-400"><i className="fab fa-linkedin"></i> LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          &copy; 2024 TechApp. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
