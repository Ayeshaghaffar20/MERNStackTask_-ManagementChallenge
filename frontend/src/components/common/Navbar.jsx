import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* App Name */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">Task Manager</span>
          </div>

          {/* Search Bar */}
          <div className="flex-1 flex items-center justify-center px-2">
            <div className="w-full max-w-lg">
              <input
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="text"
                placeholder="Search tasks..."
              />
            </div>
          </div>

          {/* Login Button with Link */}
          <div className="flex items-center">
            <Link to="/login">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
