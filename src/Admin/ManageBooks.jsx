import React, { useEffect, useState } from "react";
import { Spinner, Table } from "flowbite-react";
import { Link } from "react-router-dom";

const ManageBooks = () => {
  const [allBooks, setAllbooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://mern-bookstore-server-two.vercel.app/all-books")
      .then((res) => res.json())
      .then((data) => setAllbooks(data))
      .then(() => setLoading(false));
  }, []);
  //delete books
  const handleDelete = (id) => {
    // console.log(id);
    fetch(`https://mern-bookstore-server-two.vercel.app/book/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Book deleted successfully");
        window.location.reload();
        // setAllbooks(data);
      });
  };

  return (
    <div>
      {loading ? (
        <div className="h-screen w-full flex flex-col items-center justify-center ">
          <Spinner
            aria-label="Center-aligned spinner example"
            size="xl"
            color="purple"
          />
        </div>
      ) : (
        <div className="px-4 lg:mt-20 lg:p-0 sm:flex-col">
          <h2 className="mb-8 text-3xl font-bold">Manage Books</h2>

          {/*Table for books */}

          <Table className="lg:w-[1280px] ">
            <Table.Head>
              <Table.HeadCell>No.</Table.HeadCell>
              <Table.HeadCell>Book Name</Table.HeadCell>
              <Table.HeadCell>Author Name</Table.HeadCell>
              <Table.HeadCell>Category</Table.HeadCell>
              <Table.HeadCell>Price</Table.HeadCell>
              <Table.HeadCell>
                <span>Edit</span>
              </Table.HeadCell>
            </Table.Head>
            {allBooks.map((book, index) => (
              <Table.Body className="divide-y" key={book._id}>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="text-bold text-black">
                    {index + 1}
                  </Table.Cell>
                  <Table.Cell>{book.bookTitle}</Table.Cell>
                  <Table.Cell>{book.authorName}</Table.Cell>
                  <Table.Cell>{book.category}</Table.Cell>
                  <Table.Cell>$20.00</Table.Cell>
                  <Table.Cell>
                    <Link
                      href="#"
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5"
                      to={`/admin/dashboard/edit-books/${book._id}`}
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(book._id)}
                      className="bg-myblack px-4 py-1 font-semibold text-white rounded-sm hover:bg-red-600 transition-all ease-in-out duration-300"
                    >
                      Delete
                    </button>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            ))}
          </Table>
        </div>
      )}
    </div>
  );
};

export default ManageBooks;
