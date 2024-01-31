import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { BsArrowRight } from "react-icons/bs";
import { Pagination } from "swiper/modules";
import Image from "next/image";

type Image = {
  title: string;
  path: string;
  description: string;
};

type Slide = {
  images: Image[];
};

type WorkSlides = {
  slides: Slide[];
};

const workSlides: WorkSlides = {
  slides: [
    {
      images: [
        {
          title: "TechHub",
          path: "/thumb-1.png",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          title: "Lummus Productions",
          path: "/thumb-2.png",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          title: "title",
          path: "/thumb-3.jpg",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          title: "title",
          path: "/thumb-4.jpg",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/thumb-5.jpg",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          title: "title",
          path: "/thumb-6.jpg",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          title: "title",
          path: "/thumb-7.jpg",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          title: "title",
          path: "/thumb-8.jpg",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
      ],
    },
  ],
};
const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
            {slide.images.map((image, index) => (
              <div
                key={index}
                className="relative rounded-lg overflow-hidden flex items-center justify-center group bg-primary-300/40 backdrop-blur-sm"
              >
                <div className="flex items-center justify-center relative overflow-hidden group">
                  <Image alt="" src={image.path} width={500} height={300} />
                  <div className="absolute inset-0 bg-primary-200 opacity-0 group-hover:opacity-100 transition-all duration-700">
                    <div className="absolute top-10 left-5 translate-y-full group-hover:translate-y-10 group-hover:xl:-translate-y-0.5 transition-all duration-300">
                      <div className="flex flex-col">
                        <h2 className="font-body text-body2 font-bold">
                          PROJECT:
                        </h2>
                        <p className="text-body1">{image.title}</p>
                        <h2 className="font-body text-body2 font-bold">
                          STACK:
                        </h2>
                        <p className="text-body1">{image.description}</p>
                      </div>
                      <div className="flex items-center gap-x-2 text-body2 tracking-[0.2em] mt-4">
                        <div className="delay-100">LIVE</div>
                        <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                          PROJECT
                        </div>
                        <div className="text-h4 translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                          {<BsArrowRight />}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
