const GoogleLoginButton = ({ children, onClick, disabled = false }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`cursor-pointer gap-[10px] md:gap-[16px] text-[10px] md:text-[16px] w-full flex items-center justify-center bg-transparent text-white font-semibold px-[12px] py-[8px] md:px-[20px] md:py-[14px] rounded-[24px] border border-[#E7E3FC3B] hover:bg-[#4b4f50] transition-colors duration-200 ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      <img
        src="https://www.svgrepo.com/show/475656/google-color.svg"
        className="h-[10px] w-[10px] md:h-[18px] md:w-[18px]"
        alt="google"
      />

      {children}
    </button>
  );
};

export default GoogleLoginButton;
