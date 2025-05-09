import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/slices/authSlices';


const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get the user state from the Redux store
  const { user } = useSelector((state) => state.auth);

  // Handle logout functionality
  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <nav className="bg-[#2b2b40] shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* App Name */}
          <div className="flex items-center">
            <Link to="/">
            <span className="text-2xl font-bold text-orange-400">Task Manager</span>
            </Link>
          </div>

          {/* Navbar Buttons */}
          <div className="flex items-center space-x-4">
            
            <button
              onClick={() => navigate('/')}
              className="px-4 py-2 bg-orange-400 hover:bg-orange-500 text-[#1f1f2e] font-bold rounded-md transition duration-300"
            >
              Add Task
            </button>

            {/* View Tasks Button */}
            <button
              onClick={() => navigate('/view-task')}
              className="px-4 py-2 bg-orange-400 hover:bg-orange-500 text-[#1f1f2e] font-bold rounded-md transition duration-300"
            >
              View Tasks
            </button>

            {/* User Info and Logout */}
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-white font-bold">Welcome, {user.name}</span>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-orange-400 hover:bg-orange-500 text-[#1f1f2e] font-bold rounded-md transition duration-300"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="px-4 py-2 bg-orange-400 hover:bg-orange-500 text-[#1f1f2e] font-bold rounded-md transition duration-300"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );

};

export default Navbar;
