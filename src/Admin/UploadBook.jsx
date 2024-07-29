import React, { useState } from "react";

//flowbite-imports
import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react";

const UploadBook = () => {
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Fantasy",
    "Mystery",
    "Programming",
    "Science Fiction",
    "Thriller",
    "horror",
    "Bibliography",
    "Autobiography",
    "Self-help",
    "Memoir",
    "Business",
    "Romance",
    "Children Books",
    "History",
    "Travel",
    "Religion",
    "Art and Design",
  ];
  const [selectedBookCategory, setSelectedBookCategory] = useState(
    bookCategories[0]
  );

  const handleChangeSelectedValue = (event) => {
    console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  };

  //handle book submission
  const handleBookSubmit = (event) => {
    event.preventDefault();
    console.log(selectedBookCategory);
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;

    const bookObj = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPDFURL,
    };
    console.log(bookObj);

    //sending data to DB
    fetch("https://mern-bookstore-server-two.vercel.app/upload-book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookObj),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Book uploaded successfully!!");
        form.reset();
      })
      .catch((err) => {
        console.log(err);
        alert("Error uploading book");
        form.reset();
      });
  };

  return (
    <div className="px-10 md:mr-10 w-screen mt-5 lg:mt-20">
      <h2 className="mb-8 text-3xl font-bold">Upload A book</h2>

      {/*Form */}
      <form
        onSubmit={handleBookSubmit}
        className="flex w-100% flex-col flex-wrap gap-4"
      >
        {/*first row*/}
        <div className="flex gap-8">
          {/*Book Title */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
              id="bookTitle"
              name="bookTitle"
              type="text"
              placeholder="Book name"
              required
            />
          </div>

          {/* Author name*/}
          <div className=" lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput
              id="authorName"
              name="authorName"
              type="text"
              placeholder="Author name"
              required
            />
          </div>
        </div>

        {/*second row*/}
        <div className="flex gap-8">
          {/*Image URL */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image URL" />
            </div>
            <TextInput
              id="imageURL"
              name="imageURL"
              type="text"
              placeholder="Book image URL "
              required
            />
          </div>

          {/* Category*/}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>

            <select
              id="inputState"
              name="categoryName"
              className="w-full rounded"
              value={selectedBookCategory}
              onChange={handleChangeSelectedValue}
            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/*book Description*/}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea
            id="bookDescription"
            name="bookDescription"
            placeholder="Write your book description..."
            required
            rows={4}
          />
        </div>

        {/*Book PDF Link*/}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPDFURL" value="Book PDF URL" />
          </div>
          <TextInput
            id="bookPDFURL"
            name="bookPDFURL"
            type="text"
            placeholder="Book pdf url"
            required
          />
        </div>

        <button
          type="submit"
          className="mt-5 py-2 rounded-md bg-purple-600 hover:bg-purple-700"
        >
          Upload book
        </button>
      </form>
    </div>
  );
};

export default UploadBook;
