import React from 'react';

const HeroSection = () => {
  return (
    <section
      className="relative w-full mx-auto h-[225px] md:min-h-[587px] pt-[56px] md:pt-[100px] bg-no-repeat bg-center bg-[length:100%_100%] md:bg-cover"
      style={{
        backgroundImage: "url('/hero.png')"
      }}
    >
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.4) 0%,
            rgba(16, 18, 19, 0.86) 50%,
            #181a1c 100%
          )`
        }}
      />

      {/* Hero Content Wrapper */}
      <div className="absolute inset-x-0 bottom-[20px] md:bottom-[75px] px-[20px] md:px-0">
        <div className="w-[320px] md:w-full max-w-[1440px] mx-auto px-0 md:px-[80px] flex flex-col gap-[12px] md:gap-[40px]">
          {/* Text Wrapper */}
          <div className="flex flex-col max-w-[360px] md:max-w-[668px] gap-[10px] md:gap-[20px]">
            <h1 className="text-[20px] md:text-[48px] font-medium leading-[110%] text-white">
              Duty After School
            </h1>
            <p className="text-[12px] md:text-[18px] leading-[140%] tracking-[0.2px] text-white line-clamp-2 md:line-clamp-none">
              Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan,
              Departemen Pertahanan mulai merekrut lebih banyak tentara,
              termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang
              garis depan dalam perang.
            </p>
          </div>

          {/* Button Wrapper */}
          <div className="flex justify-between items-center">
            {/* Left Buttons */}
            <div className="flex items-center gap-[8px] md:gap-[10px]">
              <button className="bg-[#0F1E93] text-white font-semibold px-[12px] md:px-[26px] py-[4px] md:py-[10px] text-[12px] md:text-base rounded-3xl hover:bg-blue-700">
                Mulai
              </button>
              <button className="bg-[#22282A] text-white border border-white/20 px-[12px] md:px-[26px] py-[4px] md:py-[10px] rounded-3xl flex items-center gap-2 hover:bg-white/20 text-[12px] md:text-base">
                <svg
                  className="w-[10px] h-[10px] md:w-5 md:h-5"
                  fill="white"
                  viewBox="0 0 20 21"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 7.5H11V5.5H9M10 18.5C5.59 18.5 2 14.91 2 10.5C2 6.09 5.59 2.5 10 2.5C14.41 2.5 18 6.09 18 10.5C18 14.91 14.41 18.5 10 18.5ZM10 0.5C8.68678 0.5 7.38642 0.758658 6.17317 1.2612C4.95991 1.76375 3.85752 2.50035 2.92893 3.42893C1.05357 5.3043 0 7.84784 0 10.5C0 13.1522 1.05357 15.6957 2.92893 17.5711C3.85752 18.4997 4.95991 19.2362 6.17317 19.7388C7.38642 20.2413 8.68678 20.5 10 20.5C12.6522 20.5 15.1957 19.4464 17.0711 17.5711C18.9464 15.6957 20 13.1522 20 10.5C20 9.18678 19.7413 7.88642 19.2388 6.67317C18.7362 5.45991 17.9997 4.35752 17.0711 3.42893C16.1425 2.50035 15.0401 1.76375 13.8268 1.2612C12.6136 0.758658 11.3132 0.5 10 0.5ZM9 15.5H11V9.5H9V15.5Z" />
                </svg>
                Selengkapnya
              </button>
              <button className="bg-[#22282A] text-white border border-white/20 px-[4px] py-[4px] md:p-[10px] rounded-full text-[12px] hover:bg-white/20">
                18+
              </button>
            </div>

            {/* Mute Button */}
            <button
              className="w-[24px] h-[24px] md:w-[44px] md:h-[44px] flex justify-center items-center border border-[#C1C2C4] rounded-full hover:bg-white/10 transition"
              aria-label="Mute"
            >
              <svg
                className="w-[12px] h-[12px] md:w-[18px] md:h-[18px]"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 1L6.91 3.09L9 5.18M1.27 0L0 1.27L4.73 6H0V12H4L9 17V10.27L13.25 14.53C12.58 15.04 11.83 15.46 11 15.7V17.77C12.38 17.45 13.63 16.82 14.68 15.96L16.73 18L18 16.73L9 7.73M16 9C16 9.94 15.8 10.82 15.46 11.64L16.97 13.15C17.62 11.91 18 10.5 18 9C18 4.72 15 1.14 11 0.23V2.29C13.89 3.15 16 5.83 16 9ZM13.5 9C13.5 7.23 12.5 5.71 11 4.97V7.18L13.45 9.63C13.5 9.43 13.5 9.21 13.5 9Z"
                  fill="#C1C2C4"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
