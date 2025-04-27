import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../redux/slices/authSlices';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, loading, error } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData));
  };

  // Redirect if register successful
  useEffect(() => {
    if (user) {
      navigate('/Login'); // 
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1f1f2e] px-4 mt-5">
      <form
        onSubmit={handleSubmit}
        className="bg-[#2b2b40] p-8 rounded-xl shadow-2xl w-full max-w-sm"
      >
        <h2 className="text-3xl font-bold text-center text-orange-400 mb-6">
          Create Your Account 🚀
        </h2>

        {error && (
          <div className="bg-red-500 text-white text-center p-2 rounded-md mb-4">
            {error}
          </div>
        )}

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 mb-4 rounded-md bg-[#3b3b55] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 mb-4 rounded-md bg-[#3b3b55] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full p-3 mb-6 rounded-md bg-[#3b3b55] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-orange-400 hover:bg-orange-500 text-[#1f1f2e] font-bold py-3 rounded-md transition duration-300"
        >
          {loading ? 'Creating Account...' : 'Register'}
        </button>

        {/* Link to Login page */}
        <p className="text-center text-gray-400 mt-6">
          Already have an account?{' '}
          <Link to="/" className="text-orange-400 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
