const AuthButton = ({ 
  children, 
  type = "button", 
  variant = "primary", 
  disabled = false, 
  loading = false,
  onClick,
  className = ""
}) => {
  const baseClasses = "cursor-pointer w-full flex items-center justify-center font-semibold px-[12px] py-[8px] md:px-[20px] md:py-[14px] rounded-[24px] border transition-colors duration-200 text-[10px] md:text-[16px]";
  
  const variants = {
    primary: "bg-[#3D4142] text-white border-[#E7E3FC3B] hover:bg-[#4b4f50] disabled:bg-gray-600",
    secondary: "bg-transparent text-white border-[#E7E3FC3B] hover:bg-[#4b4f50] disabled:bg-gray-600",
  };

  const disabledClasses = disabled || loading ? "opacity-50 cursor-not-allowed" : "";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseClasses} ${variants[variant]} ${disabledClasses} ${className}`}
    >
      {loading && (
        <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {children}
    </button>
  );
};

export default AuthButton;
