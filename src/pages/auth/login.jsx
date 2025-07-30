import React from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "./components/AuthLayout";
import LoginForm from "./components/LoginForm";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    try {
      // Here you would typically make an API call to authenticate the user
      console.log("Login attempt with:", formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, let's assume login is successful
      // In a real app, you'd validate credentials with your backend
      if (formData.username && formData.password) {
        // Store user session/token
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('username', formData.username);
        
        // Redirect to dashboard or home page
        navigate('/');
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      console.error('Login failed:', error);
      throw error; // Re-throw to be handled by the form
    }
  };

  return (
    <AuthLayout>
      <LoginForm onSubmit={handleLogin} />
    </AuthLayout>
  );
};

export default Login;
