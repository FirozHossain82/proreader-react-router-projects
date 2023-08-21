import React from "react";
import { useLoaderData } from "react-router-dom";

const BookDetails = () => {
  const bookData = useLoaderData();
  console.log(bookData);
  const { authors, image, title, desc, publisher, year, rating, pdf, price } =
    bookData;
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-md lg:flex-row sm:mx-auto">
        <div className=" lg:w-1/2">
          <img
            src={image}
            alt=""
            className="object-fill w-full  h-80 lg:h-full lg:object-cover"
          />
        </div>
        <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
              Brand new
            </p>
          </div>
          <h5 className="mb-3 text-3xl text-orange-400 font-extrabold leading-none sm:text-4xl">
            {title}
          </h5>
          <p className="mb-5 text-gray-900 text-lg font-bold">
            Authors: {authors.substring(0, 50)}
          </p>
          <p className="mb-5 text-gray-900 font-semibold">Publisher: {publisher}</p>
          <p className="mb-5 text-gray-900 font-semibold">Year: {year}</p>
          <p className="mb-5 text-gray-900 font-semibold">Rating: {rating}</p>
          <p className="mb-5 text-gray-800 font-semibold">{desc.substring(0, 150)}...</p>
          <div className="flex items-center">
            <a href={pdf && Object.values(pdf)[0]}>
              <button
                type="submit"
                className="border-2 border-purple-300 inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-400 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
              >
                {pdf ? "Download PDF" : "Not Available"}
              </button>
            </a>
            <p className="inline-flex items-center  transition-colors duration-200 text-blue-800 font-bold hover:text-deep-purple-800">
              Price: {price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
