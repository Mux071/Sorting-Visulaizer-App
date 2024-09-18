// frontend/src/components/Footer.jsx
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { motion } from 'framer-motion';

const Footer = () => (
  <footer className="bg-gray-800 text-white py-4 mb-10 rounded-md">
    <div className="max-w-4xl mx-auto flex justify-between items-center">
      {/* Left side box */}
      <div className="flex-1 text-left">
        <motion.p
          className="text-3xl font-bold ml-5 text-yellow-500"
          whileHover={{ scale: 1.1, color: "#fbbf24" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Sorting Visualizer
        </motion.p>
      </div>

      {/* Center box */}
      <div className="text-center flex-1">
        <p>&copy; {new Date().getFullYear()} Adeeb Jamil. All Rights Reserved.</p>
        <div className="mt-2 flex justify-center space-x-4">
          <a
            href="https://www.linkedin.com/in/adeeb-jamil-6540b6215/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600"
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a
            href="https://github.com/Mux071"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-600"
          >
            <i className="fab fa-github fa-2x"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
