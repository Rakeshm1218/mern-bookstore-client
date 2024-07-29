import { useEffect, useState } from "react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://mern-bookstore-server-two.vercel.app/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="mt-28 px-4 lg:px-24 ">
      <h2 className="text-5xl font-bold text-center">All Books are Here</h2>

      <div className="grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
        {books.map((book) => (
          <Card className="shadow-purple-300 shadow-lg">
            <img src={book.imageURL} alt="" className="h-96" />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {book.bookTitle}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
              reprehenderit!
            </p>

            <Link
              to={book.bookPDFURL}
              target="_blank"
              className="px-2 bg-purple-600  text-center py-2 rounded"
            >
              Read now
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Shop;
