import { useNavigate } from "react-router";
import { useAuthContext } from "../../components/AuthProvider";
import AuthLayout from "./components/AuthLayout";
import RegisterForm from "./components/RegisterForm";

const Register = () => {
  const navigate = useNavigate();
  const { login } = useAuthContext();

  const handleRegister = async (formData) => {
    try {
      console.log("Register attempt with:", formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, let's assume registration is successful
      if (formData.username && formData.password) {
        // Use the context login function
        login({ username: formData.username });
        
        // Redirect to dashboard
        navigate('/');
      } else {
        throw new Error('Registration failed');
      }
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    }
  };

  return (
    <AuthLayout>
      <RegisterForm onSubmit={handleRegister} />
    </AuthLayout>
  );
};

export default Register;
