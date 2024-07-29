import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../authentication/AuthProvider";
import { CgProfile } from "react-icons/cg";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://mern-bookstore-server-two.vercel.app/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .then(() => setLoading(false));
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="px-4 mt-6 md:mt-20">
      <div className="border py-20 px-5 rounded-3xl shadow-md shadow-purple-300 w-full">
        <h1 className="text-black text-4xl md:text-5xl ">
          Welcome to your Dashboard, <br />
          <h1 className="text-4xl md:text-5xl text-purple-700">
            {user.displayName
              ? user.displayName
              : user.email
                  .slice(0, user.email.indexOf("@"))
                  .charAt(0)
                  .toUpperCase() +
                user.email.slice(0, user.email.indexOf("@")).slice(1)}
          </h1>
        </h1>
      </div>
      <div className="statistics-container mt-10 border py-20 px-5 rounded-3xl shadow-md shadow-purple-300">
        <div className="statistics-card">
          <div className="statistics-content">
            <h3 className="statistics-title text-4xl md:text-5xl">
              Total Books : {books.length}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
