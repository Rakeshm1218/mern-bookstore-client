import { useRef, useState } from "react";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import "../pages/Home/Bookcards.css";
import { FaCartShopping } from "react-icons/fa6";

const Bookcards = ({ headline, books }) => {
  return (
    <div className=" px-4 lg:px-24">
      <h2 className="text-5xl text-center font-bold text-myblack">
        {headline}
      </h2>

      {/* cards */}
      <div className="myswiper">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
        >
          {books.map((book) => (
            <SwiperSlide key={book._id} className="my-12 text-black">
              <Link to={`/book/${book._id}`} className="border rounded p-3 shadow-lg shadow-purple-300">
                <div className="relative w-56 md:w-full">
                  <img src={book.imageURL} alt="" />
                  {/* <div className="absolute top-3 right-3 bg-mywhite hover:bg-myyellow p-2 rounded"> 
                    <FaCartShopping className="w-4 h-4 text-myblack"/>
                  </div> */}
                </div>
                <div>
                  <div>
                    <h3>{book.bookTitle}</h3>
                    <p className="font-bold">Author Name : {book.authorName}</p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Bookcards;
