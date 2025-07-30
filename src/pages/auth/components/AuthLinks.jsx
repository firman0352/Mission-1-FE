const AuthLinks = () => (
  <div className="flex justify-between text-[10px] md:text-xs text-gray-300">
    <span>
      Belum punya akun?
      <a 
        href="/register" 
        className="font-semibold text-white hover:text-blue-400 transition-colors"
      >
        &nbsp;Daftar
      </a>
    </span>
    <a 
      href="/forgot-password" 
      className="font-semibold hover:text-blue-400 transition-colors"
    >
      Lupa kata sandi?
    </a>
  </div>
);

export default AuthLinks;
