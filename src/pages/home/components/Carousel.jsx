import React, { useRef } from 'react';

const Carousel = ({ title, items, type = "card" }) => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -260,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 260,
        behavior: 'smooth'
      });
    }
  };

  const renderNewEpisodeTag = (isNew = false) => {
    return isNew ? (
      <span className="absolute top-[6px] left-[6px] md:top-[12px] md:left-[12px] bg-[#0F1E93] text-white text-[5px] md:text-[12px] font-semibold px-[5px] py-[2px] md:px-[10px] md:py-[4px] rounded-full border border-white/10">
        Episode Baru
      </span>
    ) : null;
  };

  const renderTop10Tag = (isTop10 = false) => {
    return isTop10 ? (
      <span className="absolute top-[0px] right-[12px] bg-[#B71F1D] w-[15px] h-[21px] md:w-[31px] md:h-[48px] text-white text-[7px] md:text-[12px] font-semibold rounded-tr-[4px] rounded-bl-[4px] p-[2px] md:p-[4px] flex flex-col justify-center items-center gap-[2px] md:gap-[10px] leading-none">
        <span>Top</span>
        <span>10</span>
      </span>
    ) : null;
  };

  return (
    <section className="w-full max-w-[1440px] mx-auto px-[20px] py-[20px] flex flex-col gap-[20px] md:px-[80px] md:py-[40px] md:gap-[32px]">
      <h2 className="text-[20px] md:text-[32px] font-bold text-left">
        {title}
      </h2>

      <div className="relative">
        {/* Desktop scroll buttons */}
        <button
          onClick={scrollLeft}
          className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[30px] z-10 w-[44px] h-[44px] p-[10px] border border-[#E7E3FC3B] rounded-[24px] bg-[#2F3334] hover:bg-[#3A3F40] transition"
        >
          <svg width="20" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.0002 7.00008V9.00008H4.00016L9.50016 14.5001L8.08016 15.9201L0.160156 8.00008L8.08016 0.0800781L9.50016 1.50008L4.00016 7.00008H16.0002Z" fill="white"/>
          </svg>
        </button>

        <button
          onClick={scrollRight}
          className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-[30px] z-10 w-[44px] h-[44px] p-[10px] border border-[#E7E3FC3B] rounded-[24px] bg-[#2F3334] hover:bg-[#3A3F40] transition"
        >
          <svg width="20" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 9.00008L12 9.00008L6.5 14.5001L7.92 15.9201L15.84 8.00008L7.92 0.0800781L6.5 1.50008L12 7.00008L0 7.00008V9.00008Z" fill="white"/>
          </svg>
        </button>

        {/* Carousel */}
        <div
          ref={carouselRef}
          className={`flex gap-[16px] overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar ${
            type === "wide" ? "px-[8px]" : "px-0 md:px-8"
          }`}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className={`relative snap-start flex-shrink-0 rounded-[8px] overflow-hidden ${
                type === "wide"
                  ? "min-w-[309px] md:min-w-[240px] h-[151px] md:h-[162px]"
                  : "min-w-[95px] md:min-w-[234px] h-[145px] md:h-[365px]"
              }`}
            >
              <a href="#" className="block w-full h-full group">
                <div className="relative w-full h-full overflow-hidden rounded-[8px] transition-transform transform group-hover:scale-[1.03] group-hover:shadow-lg">
                  <img
                    src={type === "wide" ? item.wideBannerImg : item.bannerImg}
                    alt={item.title || `Movie ${index + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback if image fails to load
                      e.target.src = `https://via.placeholder.com/${type === "wide" ? "309x151" : "234x365"}/333/fff?text=Movie+${index + 1}`;
                    }}
                  />
                  {renderNewEpisodeTag(item.isNewEpisode)}
                  {renderTop10Tag(item.isTop10)}
                  {type === "wide" && (
                    <div className="absolute bottom-0 w-full px-[16px] py-[12px] bg-gradient-to-t from-black/80 to-transparent flex justify-between items-center">
                      <span className="font-bold text-[14px] md:text-[18px] leading-[140%]">
                        {item.title || `Movie ${index + 1}`}
                      </span>
                      <span className="text-[12px] md:text-[14px]">
                        ★ {item.rating || "4.5/5"}
                      </span>
                    </div>
                  )}
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
