import React, { useState } from "react";
import FormHeader from "./FormHeader";
import InputField from "./InputField";
import AuthButton from "./AuthButton";
import GoogleLoginButton from "./GoogleLoginButton";
import Logo from "./Logo";

const RegisterForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
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
    } else if (formData.username.length < 3) {
      newErrors.username = "Username minimal 3 karakter";
    }
    
    if (!formData.password.trim()) {
      newErrors.password = "Kata sandi tidak boleh kosong";
    } else if (formData.password.length < 6) {
      newErrors.password = "Kata sandi minimal 6 karakter";
    }
    
    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = "Konfirmasi kata sandi tidak boleh kosong";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Kata sandi tidak cocok";
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
      setErrors({ general: "Registrasi gagal. Silakan coba lagi." });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleRegister = () => {
    console.log("Google register clicked");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative z-10 bg-[#181A1CD6] text-white w-[306px] p-6 rounded-lg shadow-xl flex flex-col gap-[20px] md:w-[529px] md:p-10 md:rounded-xl md:gap-[30px]"
    >
      <Logo />
      
      <FormHeader title="Daftar" description="Selamat Datang!" />

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

      <InputField
        type="password"
        placeholder="Masukkan kata sandi"
        label="Kata Sandi"
        value={formData.password}
        onChange={(value) => handleInputChange("password", value)}
        error={errors.password}
        required
      />

      <div className="flex flex-col gap-[6px]">
        <InputField
          type="password"
          placeholder="Konfirmasi kata sandi"
          label="Konfirmasi Kata Sandi"
          value={formData.confirmPassword}
          onChange={(value) => handleInputChange("confirmPassword", value)}
          error={errors.confirmPassword}
          required
        />

        <div className="text-justify text-[10px] md:text-xs text-gray-300">
          <span>
            Sudah punya akun?
            <a 
              href="/login" 
              className="font-semibold text-white hover:text-blue-400 transition-colors"
            >
              &nbsp;Masuk
            </a>
          </span>
        </div>
      </div>

      <div className="flex flex-col space-y-3">
        <AuthButton
          type="submit"
          variant="primary"
          disabled={isLoading}
          loading={isLoading}
        >
          {isLoading ? "Mendaftar..." : "Daftar"}
        </AuthButton>

        <div className="flex items-center text-sm text-gray-400">
          <hr className="flex-1 border-transparent border-gray-600" />
          <span className="px-2 text-[10px] md:text-[14px]">Atau</span>
          <hr className="flex-1 border-transparent border-gray-600" />
        </div>

        <GoogleLoginButton
          onClick={handleGoogleRegister}
          disabled={isLoading}
        >
          Daftar dengan Google
        </GoogleLoginButton>
      </div>
    </form>
  );
};

export default RegisterForm;
