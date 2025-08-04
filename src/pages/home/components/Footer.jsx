import React, { useState } from 'react';
import { Link } from "react-router";

const Footer = () => {
  const [genreCollapsed, setGenreCollapsed] = useState(true);
  const [bantuanCollapsed, setBantuanCollapsed] = useState(true);

  const toggleGenreCollapse = () => {
    setGenreCollapsed(!genreCollapsed);
  };

  const toggleBantuanCollapse = () => {
    setBantuanCollapsed(!bantuanCollapsed);
  };

  const genreItems = [
    "Aksi", "Anak-anak", "Anime", "Britania", "Drama", "Fantasi Ilmiah & Fantasi",
    "Kejahatan", "KDrama", "Komedi", "Petualangan", "Perang", "Romantis",
    "Sains & Alam", "Thriller"
  ];

  const bantuanItems = ["FAQ", "Kontak Kami", "Privasi", "Syarat & Ketentuan"];

  return (
    <footer className="w-full border-t border-white/10 bg-[#181A1C] text-white">
      <div className="max-w-[1440px] mx-auto px-[24px] md:px-[80px] py-[40px] md:py-[60px] text-[16px]">
        {/* Flex container */}
        <div className="flex flex-col md:flex-row justify-between gap-y-[32px]">
          {/* Logo and copyright */}
          <div className="w-full md:w-[300px] flex flex-col justify-center items-start gap-y-[12px]">
            <Link to="/">
              <img src="/logo.svg" alt="Chill Logo" className="h-[28px]" />
            </Link>
            <p className="text-white/60">@2023 Chill All Rights Reserved.</p>
          </div>

          {/* Navigation links */}
          <div className="w-full md:flex md:justify-end gap-[160px]">
            {/* Mobile: Collapsible Menu */}
            <div className="md:hidden space-y-4 mt-4">
              {/* Collapsible Genre */}
              <div>
                <button
                  className="w-full flex justify-between items-center"
                  onClick={toggleGenreCollapse}
                >
                  <span>Genre</span>
                  <span>›</span>
                </button>
                <div className={`${genreCollapsed ? 'hidden' : 'block'} pl-4 mt-2 space-y-1 text-white/60`}>
                  <ul className="space-y-1">
                    {genreItems.map((item, index) => (
                      <li key={index}>
                        <Link to={`/genre/${item.toLowerCase().replace(/\s+/g, '-')}`} className="hover:underline hover:text-white">{item}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Collapsible Bantuan */}
              <div>
                <button
                  className="w-full flex justify-between items-center"
                  onClick={toggleBantuanCollapse}
                >
                  <span>Bantuan</span>
                  <span>›</span>
                </button>
                <div className={`${bantuanCollapsed ? 'hidden' : 'block'} pl-4 mt-2 space-y-1 text-white/60`}>
                  <ul className="space-y-1">
                    {bantuanItems.map((item, index) => (
                      <li key={index}>
                        <Link to={`/help/${item.toLowerCase().replace(/\s+/g, '-')}`} className="hover:underline hover:text-white">{item}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Desktop: Grid layout */}
            <div className="hidden md:flex gap-[160px]">
              {/* Genre Section (4 columns) */}
              <div className="w-[514px] flex flex-wrap gap-x-[20px] gap-y-[20px]">
                <div>
                  <h4 className="font-semibold mb-[8px]">Genre</h4>
                  <ul className="space-y-1 text-white/60">
                    <li><Link to="/genre/aksi" className="hover:underline hover:text-white">Aksi</Link></li>
                    <li><Link to="/genre/anak-anak" className="hover:underline hover:text-white">Anak-anak</Link></li>
                    <li><Link to="/genre/anime" className="hover:underline hover:text-white">Anime</Link></li>
                    <li><Link to="/genre/britania" className="hover:underline hover:text-white">Britania</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-[8px] invisible">Genre</h4>
                  <ul className="space-y-1 text-white/60">
                    <li><Link to="/genre/drama" className="hover:underline hover:text-white">Drama</Link></li>
                    <li><Link to="/genre/fantasi-ilmiah-fantasi" className="hover:underline hover:text-white">Fantasi Ilmiah & Fantasi</Link></li>
                    <li><Link to="/genre/kejahatan" className="hover:underline hover:text-white">Kejahatan</Link></li>
                    <li><Link to="/genre/kdrama" className="hover:underline hover:text-white">KDrama</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-[8px] invisible">Genre</h4>
                  <ul className="space-y-1 text-white/60">
                    <li><Link to="/genre/komedi" className="hover:underline hover:text-white">Komedi</Link></li>
                    <li><Link to="/genre/petualangan" className="hover:underline hover:text-white">Petualangan</Link></li>
                    <li><Link to="/genre/perang" className="hover:underline hover:text-white">Perang</Link></li>
                    <li><Link to="/genre/romantis" className="hover:underline hover:text-white">Romantis</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-[8px] invisible">Genre</h4>
                  <ul className="space-y-1 text-white/60">
                    <li><Link to="/genre/sains-alam" className="hover:underline hover:text-white">Sains & Alam</Link></li>
                    <li><Link to="/genre/thriller" className="hover:underline hover:text-white">Thriller</Link></li>
                  </ul>
                </div>
              </div>

              {/* Bantuan */}
              <div className="w-[140px] flex flex-col justify-start">
                <h4 className="font-semibold mb-[8px]">Bantuan</h4>
                <ul className="space-y-1 text-white/60">
                  {bantuanItems.map((item, index) => (
                    <li key={index}>
                      <Link to={`/help/${item.toLowerCase().replace(/\s+/g, '-')}`} className="hover:underline hover:text-white">{item}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
