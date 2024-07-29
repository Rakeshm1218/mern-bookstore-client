import { useEffect, useState } from "react";
import Bookcards from "../../components/Bookcards";
import { Spinner } from "flowbite-react";

const BestSellerBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://mern-bookstore-server-two.vercel.app/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data.slice(0, 8)))
      .then(() => setLoading(false));
  }, []);
  return (
    <div>
      {loading ? (
        <div className="text-center">
          <Spinner aria-label="Center-aligned spinner example" />
        </div>
      ) : (
        <div>
          <Bookcards books={books} headline="Best Seller Books" />
        </div>
      )}
    </div>
  );
};

export default BestSellerBooks;
