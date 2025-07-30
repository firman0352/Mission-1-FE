const AuthLayout = ({ children }) => (
  <div className="relative min-h-screen bg-cover bg-center flex items-center justify-center font-[Lato] bg-[url('/background.jpg')]">
    <div className="absolute inset-0 bg-black/30 z-0"></div>
    {children}
  </div>
);

export default AuthLayout;
