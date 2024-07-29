
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

//react-icons
import { FaStar } from "react-icons/fa6";

// Import Swiper styles
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";

import { Avatar } from "flowbite-react";
import Profile  from "../../assets/profile.jpg";

// import required modules
import { Pagination } from "swiper/modules";

import "./Bookcards.css";
const Review = () => {
  return (
    <div className="my-10 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center mb-10 leading-snug">
        Our Customers
      </h2>

      <div className="myswiper">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
        >
          <SwiperSlide className="shadow-2xl bg-mywhite py-8 px-4  md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <div className="mt-7">
                <p className="mb-5">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quasi ullam culpa eos alias placeat qui magnam, porro facere
                  repellendus dolore perferendis animi sapiente. Autem assumenda
                  ab, iure accusamus adipisci illo.
                </p>
                <Avatar img={Profile} className="w-10 mb-4" 
                  alt="avatar of Jese"
                  rounded
                />
                <h5 className="text-lg font-medium">Mark pinb</h5>
                <p className="text-base ">CEO, ABC Comapny</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-mywhite py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <div className="mt-7">
                <p className="mb-5">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quasi ullam culpa eos alias placeat qui magnam, porro facere
                  repellendus dolore perferendis animi sapiente. Autem assumenda
                  ab, iure accusamus adipisci illo.
                </p>
                <Avatar img={Profile} className="w-10 mb-4" 
                  alt="avatar of Jese"
                  rounded
                />
                <h5 className="text-lg font-medium">Mark pinb</h5>
                <p className="text-base ">CEO, ABC Comapny</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-mywhite py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <div className="mt-7">
                <p className="mb-5">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quasi ullam culpa eos alias placeat qui magnam, porro facere
                  repellendus dolore perferendis animi sapiente. Autem assumenda
                  ab, iure accusamus adipisci illo.
                </p>
                <Avatar img={Profile} className="w-10 mb-4" 
                  alt="avatar of Jese"
                  rounded
                />
                <h5 className="text-lg font-medium">Mark pinb</h5>
                <p className="text-base ">CEO, ABC Comapny</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-mywhite py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <div className="mt-7">
                <p className="mb-5">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quasi ullam culpa eos alias placeat qui magnam, porro facere
                  repellendus dolore perferendis animi sapiente. Autem assumenda
                  ab, iure accusamus adipisci illo.
                </p>
                <Avatar img={Profile} className="w-10 mb-4" 
                  alt="avatar of Jese"
                  rounded
                />
                <h5 className="text-lg font-medium">Mark pinb</h5>
                <p className="text-base ">CEO, ABC Comapny</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-mywhite py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <div className="mt-7">
                <p className="mb-5">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quasi ullam culpa eos alias placeat qui magnam, porro facere
                  repellendus dolore perferendis animi sapiente. Autem assumenda
                  ab, iure accusamus adipisci illo.
                </p>
                <Avatar img={Profile} className="w-10 mb-4" 
                  alt="avatar of Jese"
                  rounded
                />
                <h5 className="text-lg font-medium">Mark pinb</h5>
                <p className="text-base ">CEO, ABC Comapny</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
