import { useEffect, useState } from "react";
import Bookcards from "../../components/Bookcards";

const OtherBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://mern-bookstore-server-two.vercel.app/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data.slice(0, 8)));
  }, []);
  return (
    <div>
      <Bookcards books={books} headline="Other Books" />
    </div>
  );
};

export default OtherBooks;
