import React, { useState } from 'react';
import CustomInput from '../components/CustomInput';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../components/auth/Config'; 
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, formData.email, formData.password) 
      .then((res) => {
        const user = res.user;
        console.log(user);
        // Store email and password in local storage
        localStorage.setItem('userEmail', formData.email);
        localStorage.setItem('userPassword', formData.password);
        navigate('/login');
      })
      .catch((error) => {
        console.error('Error creating user:', error.message);
      });
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4"
      style={{
        backgroundImage: "url('https://source.unsplash.com/random')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1 className="text-2xl font-bold mb-6">Sign Up</h1>
      <form className="bg-white p-8 rounded shadow-md w-full max-w-sm" onSubmit={handleSubmit}>
        <CustomInput
          label="Email"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChangeInput}
        />
        <CustomInput
          label="Password"
          name="password"
          type="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChangeInput}
        />
        <CustomInput
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          placeholder="Confirm your password"
          value={formData.confirmPassword}
          onChange={handleChangeInput}
        />
        <button
          type="submit"
          className="bg-green-500 text-white py-2 px-4 rounded w-full hover:bg-green-600"
        >
          Sign Up
        </button>
        <div className="mt-4 text-sm text-center">
          Already have an account?{' '}
          <Link to="/login" className="text-green-500 hover:underline">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
