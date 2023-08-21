import React from "react";
import { useLoaderData } from "react-router-dom";
import Book from "../Book/Book.jsx";

const Books = () => {
  const loaderData = useLoaderData();
  const booksData = loaderData.books;
  console.log(booksData);
  return (
    <div className="px-5 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
      <div className="grid  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2    gap-6 mb-8   ">
        {booksData.map((book) => (
          <Book key={book.isbn13} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
