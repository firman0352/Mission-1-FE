import React, { useState, useRef, useEffect } from 'react';
import { Link } from "react-router";
import { useAuthContext } from "../../../components/AuthProvider";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const avatarRef = useRef(null);
  const { isAuthenticated, logout } = useAuthContext();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        avatarRef.current &&
        !avatarRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    logout();
    setIsDropdownOpen(false);
    // Optionally redirect to login page
  };

  return (
    <header className="w-full max-w-[1440px] mx-auto px-[20px] py-[6px] flex items-center justify-between gap-[12px] h-[56px] md:px-[80px] md:py-[25px] md:h-auto">
      <div className="flex items-center gap-[12px] md:gap-[80px]">
        {/* Mobile Logo */}
        <Link to="/">
          <img
            src="/logoShort.svg"
            alt="Logo Mobile"
            className="h-[18px] w-auto block md:hidden"
          />
        </Link>
        {/* Desktop Logo */}
        <Link to="/">
          <img
            src="/logo.svg"
            alt="Logo Desktop"
            className="h-[28px] w-auto hidden md:block"
          />
        </Link>

        {/* Navigation */}
        <nav className="flex space-x-[20px] md:space-x-[80px] text-[10px] md:text-[18px] font-medium leading-[1.4] tracking-[0.2px]">
          <Link to="/series" className="hover:text-gray-300">Series</Link>
          <Link to="/film" className="hover:text-gray-300">Film</Link>
          <Link to="/my-list" className="hover:text-gray-300">Daftar Saya</Link>
        </nav>
      </div>

      {/* Profile Dropdown Trigger */}
      <div className="relative flex items-center gap-[4px] w-[40px] h-[20px] md:w-auto md:h-auto md:gap-[12px]">
        {/* Avatar Button */}
        <button
          ref={avatarRef}
          onClick={toggleDropdown}
          className="w-[20px] h-[20px] md:w-10 md:h-10 rounded-full overflow-hidden border border-white/20 focus:outline-none"
        >
          <img
            src="/avatar.png"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </button>

        {/* Arrow Button */}
        <button
          onClick={toggleDropdown}
          className="w-[16px] h-[6px] md:w-[14px] md:h-[9px] flex items-center justify-center focus:outline-none"
          aria-label="Toggle Dropdown"
        >
          <svg
            viewBox="0 0 14 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              d="M1.645 0.0214844L7 5.36482L12.355 0.0214844L14 1.66648L7 8.66648L0 1.66648L1.645 0.0214844Z"
              fill="white"
            />
          </svg>
        </button>

        {/* Dropdown Menu */}
        <div
          ref={dropdownRef}
          className={`${
            isDropdownOpen ? 'block' : 'hidden'
          } absolute right-0 top-[52px] w-[180px] bg-[#181A1C] text-white rounded-md shadow-lg border border-white/10 z-30 py-1`}
        >
          {isAuthenticated ? (
            // Authenticated user menu
            <>
              <Link
                to="/profile"
                className="flex items-center gap-2 px-4 py-2 hover:bg-[#2F3334] transition"
                onClick={() => setIsDropdownOpen(false)}
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4s-4 1.79-4 4 1.79 4 4 4Zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4Z" />
                </svg>
                Profil Saya
              </Link>
              <Link
                to="/premium"
                className="flex items-center gap-2 px-4 py-2 hover:bg-[#2F3334] transition"
                onClick={() => setIsDropdownOpen(false)}
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27 18.18 21 16.54 13.97 22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                Ubah Premium
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 hover:bg-[#2F3334] transition w-full text-left"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H4v2h8.67l-2.58 2.59ZM19 3H5a2 2 0 0 0-2 2v4h2V5h14v14H5v-4H3v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z" />
                </svg>
                Keluar
              </button>
            </>
          ) : (
            // Non-authenticated user menu
            <>
              <Link
                to="/login"
                className="flex items-center gap-2 px-4 py-2 hover:bg-[#2F3334] transition"
                onClick={() => setIsDropdownOpen(false)}
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M11 7L9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5-5-5ZM20 19h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8v14Z" />
                </svg>
                Sign In
              </Link>
              <Link
                to="/register"
                className="flex items-center gap-2 px-4 py-2 hover:bg-[#2F3334] transition"
                onClick={() => setIsDropdownOpen(false)}
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4Zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6ZM15 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4Z" />
                </svg>
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
