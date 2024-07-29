import { useContext, useEffect, useState } from "react";
import { FaBarsStaggered, FaBookOpen, FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AuthContext } from "../authentication/AuthProvider";


const Navbar = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const [isSticky, setisSticky] = useState(false);

  const {user} = useContext(AuthContext)
  // console.log(user);



  //toggle menu
  const toggleMenu = () => {
    setisMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setisSticky(true);
      } else {
        setisSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  //navitems here
  const navItems = [
    { link: "Home", path: "/" },
    // { link: "About", path: "/about" },
    { link: "Books", path: "/shop" },
    { link: "sell Your Book", path: "/admin/dashboard" },
    // { link: "blog", path: "/blog" },
  ];
  
  return (
    <header className="w-full bg-white  fixed top-0 right-0 left-0 transition-all ease-in duration-300">
      <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0  transition-all ease-in-out duration-300" : ""}`}>
        
        <div className="flex justify-between items-center text-base gap-2">
          {/*  logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-purple-600 flex items-center gap-2"
          >
            <FaBookOpen className="inline-block" />
          </Link>

          {/*nav items for large device
           */}
          <ul className="md:flex space-x-12 hidden">
            {navItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    to={item.path}
                    className={`block text-base  text-myblack uppercase cursor-pointer hover:text-purple-600
                    ${isSticky ? ' text-black' : ''}`}
                  >
                    {item.link}
                  </Link>
                </li>
              );
            })}
            
          </ul>
          
          {/*email for large device*/}
          <div className="space-x-12 hidden md:flex items-center text-myblack
          ">
            {
              user? <Link className="cursor-pointer" to="/admin/dashboard">{user.email
                .slice(0, user.email.indexOf("@"))
                .charAt(0)
                .toUpperCase() +
              user.email.slice(0, user.email.indexOf("@")).slice(1)}</Link>  : <Link className="cursor-pointer bg bg-purple-600 px-5 py-1 rounded-full hover:bg-purple-700 active:bg-purple-400 shadow-lg shadow-purple-300 transition-all duration-300" to="/login">Login</Link>
            }
          </div>

          {/*menu button for mobile devices */}
          
          <div className="md:hidden ">
            <button
              onClick={toggleMenu}
              className="text-myblack focus:outline-none "
            >
              
              {isMenuOpen ? (
                <FaXmark className="h-5 w-5 text-purple-600 hover:text-myblack transition-all duration-300" />
              ) : (
                <FaBarsStaggered className="h-5 w-5 text-purple-600 hover:text-myblack transition-all duration-300" />
              )}
            </button>
          </div>
        </div>
        {/* navitem for small devices*/}
        <div
          className={`space-y-3 px-4 mt-14 pb-3 bg-white  ${
            isMenuOpen ? "block fixed top-1 right-0 left-0 transition-all duration-300" : "hidden"
          }`}
        >
          <div className="text-blue-500 absolute right-0 top-3 px-4">
          {
              user? <Link className="cursor-pointer" to="/admin/dashboard">{user.email}</Link>  : "Guest Account"
            }
          </div>
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              className="block text-base text-black uppercase cursor-pointer hover:text-purple-600"
            >
              {link}
            </Link>
          ))}
        </div>
      </nav><hr/>
    </header>
  );
};

export default Navbar;
