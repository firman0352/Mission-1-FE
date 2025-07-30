const InputField = ({ 
  type, 
  placeholder, 
  label, 
  value, 
  onChange, 
  error, 
  required = false,
  disabled = false 
}) => (
  <div className="flex flex-col space-y-[6px] md:space-y-2">
    <label className="text-[10px] md:text-[18px] font-medium leading-[140%] tracking-[0.2px]">
      {label}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
      className={`w-full bg-transparent border rounded-[24px] px-[12px] py-[8px] md:px-[20px] md:py-[14px] text-white text-[9px] md:text-[16px] leading-[140%] tracking-[0.2px] font-medium focus:outline-none focus:ring-2 transition-colors ${
        error 
          ? 'border-red-500 focus:ring-red-500' 
          : 'border-gray-500 focus:ring-blue-500'
      } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    />
    {error && (
      <span className="text-red-500 text-[8px] md:text-[12px] mt-1">
        {error}
      </span>
    )}
  </div>
);

export default InputField;
