import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

type CarouselItem = {
  id: number;
  title: string;
  img: string;
};

const items: CarouselItem[] = [
  { id: 1, title: "कुंडली परामर्श", img: "./src/assets/kundli.png" },
  { id: 2, title: "ज्योतिष परामर्श", img: "./src/assets/jyotish.png" },
  { id: 3, title: "वास्तु परामर्श", img: "./src/assets/vastu.png" },
  { id: 4, title: "पंडित सेवा", img: "./src/assets/kundli.png" },
  { id: 5, title: "पूजा सामग्री", img: "./src/assets/jyotish.png" },
];

const Carousel = () => {
  return (
    <div className="w-full max-w-5xl mx-auto py-12">
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        spaceBetween={20}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: { slidesPerView: 1 },      // ✅ Mobile
          640: { slidesPerView: 2 },    // ✅ Tablet
          1024: { slidesPerView: 3 },   // ✅ Desktop
        }}
        className="!overflow-hidden"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id} className="!w-64 !h-80">
            <div className="relative w-full h-full  overflow-hidden ">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
