import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 


const Navbar = () => {
  const navigate = useNavigate()

  
  return (
    <nav className="bg-[#2b2b40] shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* App Name */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-orange-400">Task Manager</Link>
          </div>

          {/* Search Bar */}
          <div className="flex-1 flex items-center justify-center px-2">
            <div className="w-full max-w-lg">
              <input
                className="w-full px-4 py-2 bg-[#3b3b55] text-white placeholder-gray-400 border border-[#3b3b55] rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                type="text"
                placeholder="Search tasks..."
              />
            </div>
          </div>

          
          <div className="flex items-center">
          <Link
          to="/Login"
        className="px-4 py-2 bg-orange-400 hover:bg-orange-500 text-[#1f1f2e] font-bold rounded-md transition duration-300"
>
  Login
</Link>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
