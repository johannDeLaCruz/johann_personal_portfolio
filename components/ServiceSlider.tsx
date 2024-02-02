import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import { FaWordpress } from "react-icons/fa";
import { FreeMode, Pagination } from "swiper/modules";
const serviceData = [
  {
    icon: <RxDesktop />,
    title: "Development",
    description: "Modern web apps with MERN and Next.js stacks",
  },
  {
    icon: <RxPencil2 />,
    title: "Design",
    description: "UI/UX mobile-first responsive web apps with modern layout",
  },
  {
    icon: <RxReader />,
    title: "Deployment",
    description: "Deploy and manage web apps with Vercel, Firebase etc.",
  },
  {
    icon: <RxCrop />,
    title: "RESTful APIs",
    description: "Design APIs for (NO)SQL detabases.",
  },
  {
    icon: <FaWordpress />,
    title: "Wordpress",
    description: "Creation and management of Wordpress pages (Elementor)",
  },
];
const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 15 },
        640: { slidesPerView: 3, spaceBetween: 15 },
      }}
      freeMode={true}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      className="h-[220px] sm:h-[300px] swiper-horizontal"
    >
      {serviceData.map((item, index) => (
        <SwiperSlide key={index}>
          <Link href={"/contact"}>
            <div className="bg-primary-300/40 h-max backdrop-blur-sm rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-accent-500/20 transition-all duration-300">
              <div className="text-h4 text-accent-500 mb-4 ">{item.icon}</div>
              <div className="mb-4">
                <div className="mb-2 text-h4 font-body font-bold">
                  {item.title}
                </div>
                <p className="max-w-[350px] leading-normal">
                  {item.description}
                </p>
              </div>
              <div className="text-h4">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent-500 transition-all duration-300" />
              </div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
