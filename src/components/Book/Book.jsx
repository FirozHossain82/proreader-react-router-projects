import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { title, isbn13, price, image, subtitle } = book;
  return (
    <Link to={`/book/${isbn13}`} aria-label="View Item">
      <div className="relative overflow-hidden transition duration-200 rounded-md shadow-lg hover:translate-y-2 hover:shadow-2xl border-2 border-purple-300">
        <img
          className=" w-full h-56 md:h-64  xl:h-80 object-fill"
          src={image}
          alt=""
        />
        <div className="absolute inset-0 px-6 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100 text-center pt-8 ">
          <p className="mb-6 text-lg font-bold text-gray-100">{title}</p>
          <p className="mb-6 text-sm tracking-wide text-gray-100  ">
            {subtitle}
          </p>
          <p className="text-base font-semibold tracking-wide text-gray-100">
            Price: {price}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Book;
