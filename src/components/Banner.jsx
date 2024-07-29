import { useState } from 'react';
import Bannercard from './../pages/Home/Bannercard';
import { Link } from 'react-router-dom';


const Banner = () => {

  return (
    
      <div className="px-4 lg:px-24 bg-white  flex items-center">
      <div className="flex  flex-col w-full md:flex-row justify-between items-center gap-12 py-24">
        {/*left side */}
        <div className="md:w-1/2 space-y-8 h-full">
          <h2 className="text-5xl font-bold leading-snug text-black">
            Best Place to <span className="text-purple-600">read amazing books</span>
          </h2>
        </div>
        <div>
        {/*right side */}
        <div><Link to="/shop"><Bannercard/></Link></div>
      </div>
    </div>
    </div>
    
  );
};

export default Banner;
