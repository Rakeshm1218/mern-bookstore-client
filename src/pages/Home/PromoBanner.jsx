import { Link } from 'react-router-dom';
import bookPic from "../../assets/awardbooks.png"


const PromoBanner = () => {
  return (
    <div className="mt-16 py-12 bg-slate-200 px-4 lg:px-24">
        <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
            <div className="md:w-1/2">
                <h2 className="text-4xl font-bold mb-6 leading-snug">2024 National Book Awards For Thriller Shortlist</h2>
                <Link to="/shop" className=" block"><button className="bg-purple-600 text-myblack font-semibold px-5 py-2 rounded-full hover:bg-myblack hover:text-purple-600 transition-all duration-300">View List</button></Link>
            </div>

            <div>
              <img src={bookPic} alt="" className='w-96'/>
            </div>
        </div>
    </div>
  )
}

export default PromoBanner