import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { title, isbn13, price, image, subtitle } = book;
  return (
    <Link to={`/book/${price}`} aria-label="View Item">
     
    </Link>
  );
};

export default Book;
