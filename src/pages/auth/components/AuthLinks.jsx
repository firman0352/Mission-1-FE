import { Link } from "react-router";

const AuthLinks = () => (
  <div className="flex justify-between text-[10px] md:text-xs text-gray-300">
    <span>
      Belum punya akun?
      <Link 
        to="/register" 
        className="font-semibold text-white hover:text-blue-400 transition-colors"
      >
        &nbsp;Daftar
      </Link>
    </span>
    <Link 
      to="/forgot-password" 
      className="font-semibold hover:text-blue-400 transition-colors"
    >
      Lupa kata sandi?
    </Link>
  </div>
);

export default AuthLinks;
