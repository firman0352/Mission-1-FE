const FormHeader = ({ title, description }) => {
  return (
    <div className="text-center space-y-[0.2px]">
      <h2 className="text-[18px] md:text-[32px] font-semibold">{title}</h2>
      <p className="text-[10px] md:text-[16px] text-gray-300">
        {description}
      </p>
    </div>
  );
};

export default FormHeader;
