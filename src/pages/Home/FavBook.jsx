import React from "react";
import FavBookImg from "../../assets/favoritebook.jpg";
import { Link } from 'react-router-dom';


const FavBook = () => {
  return (
    <div className="px-4 lg:px-24 bg-white flex flex-col md:flex-row justify-between items-center gap-1">
      <div className="md:w-1/2 ">
        <img src={FavBookImg} className="rounded md:w-10/12"/>
      </div>
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-5xl font-bold my-5 md:w-3/4 leading-snug">
          Find Your Favorite <span className="text-purple-600">Book Here!</span>
        </h2>
        <p className="mb-10 text-lg md:w-5/6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
          error numquam accusantium, esse exercitationem, quos labore nemo a,
          atque asperiores provident nesciunt quia iusto doloribus ut totam
          consequuntur reprehenderit sint!
        </p>

        {/*stats*/}
        <div className="flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14">
          <div>
            <h2 className="text-3xl font-bold ">1000+</h2>
            <p className="text-base">Book Listing</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold ">700+</h2>
            <p className="text-base">Registered Users</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold ">550+</h2>
            <p className="text-base">PDF Download</p>
          </div>
        </div>

        <Link to="/shop" className="mt-12 block"><button className="bg-purple-600 text-myblack font-semibold px-5 py-2 rounded-full hover:bg-myblack hover:text-purple-600 transition-all duration-300">Explore</button></Link>
      </div>
    </div>
  );
};

export default FavBook;
