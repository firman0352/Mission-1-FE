import React, { useState } from "react";
import FormHeader from "./FormHeader";
import InputField from "./InputField";
import AuthButton from "./AuthButton";
import GoogleLoginButton from "./GoogleLoginButton";
import AuthLinks from "./AuthLinks";
import Logo from "./Logo";

const LoginForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.username.trim()) {
      newErrors.username = "Username tidak boleh kosong";
    }
    
    if (!formData.password.trim()) {
      newErrors.password = "Kata sandi tidak boleh kosong";
    } else if (formData.password.length < 6) {
      newErrors.password = "Kata sandi minimal 6 karakter";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    try {
      await onSubmit(formData);
    } catch (error) {
      setErrors({ general: "Login gagal. Silakan coba lagi." });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative z-10 bg-[#181A1CD6] text-white w-[306px] p-6 rounded-lg shadow-xl flex flex-col gap-[20px] md:w-[529px] md:p-10 md:rounded-xl md:gap-[37px]"
    >
      <Logo />
      
      <FormHeader title="Masuk" description="Selamat datang kembali!" />

      {errors.general && (
        <div className="text-red-500 text-sm text-center bg-red-100/10 p-2 rounded">
          {errors.general}
        </div>
      )}

      <InputField
        type="text"
        placeholder="Masukkan username"
        label="Username"
        value={formData.username}
        onChange={(value) => handleInputChange("username", value)}
        error={errors.username}
        required
      />

      <div className="flex flex-col gap-[6px]">
        <InputField
          type="password"
          placeholder="Masukkan kata sandi"
          label="Kata Sandi"
          value={formData.password}
          onChange={(value) => handleInputChange("password", value)}
          error={errors.password}
          required
        />

        <AuthLinks />
      </div>

      <div className="flex flex-col space-y-3">
        <AuthButton
          type="submit"
          variant="primary"
          disabled={isLoading}
          loading={isLoading}
        >
          {isLoading ? "Masuk..." : "Masuk"}
        </AuthButton>

        <div className="flex items-center text-sm text-gray-400">
          <hr className="flex-1 border-transparent border-gray-600" />
          <span className="px-2 text-[10px] md:text-[14px]">Atau</span>
          <hr className="flex-1 border-transparent border-gray-600" />
        </div>

        <GoogleLoginButton
          onClick={handleGoogleLogin}
          disabled={isLoading}
        >
          Masuk dengan Google
        </GoogleLoginButton>
      </div>
    </form>
  );
};

export default LoginForm;
