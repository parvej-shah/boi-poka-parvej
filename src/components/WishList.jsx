import React from "react";
import { Link } from "react-router-dom";
export default function WishList({ book }) {
  const {
    bookName,
    author,
    image,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
    bookId
  } = book;
  return (
    <div className="flex flex-col md:flex-row w-full shadow-md rounded-2xl border border-[#131313]/15 p-6">
      <div className="bg-base-200 w-full h-[400px] lg:w-[230px] lg:h-[230px] mb-3 p-6 rounded-xl">
        <img src={image} className=" rounded-lg shadow-sm w-full h-full" />
      </div>
      <div className="px-6 w-full py-3 space-y-3 text-[#131313]/80 font-medium">
        <h4 className="card-title text-[#131313] font-bold text-2xl">
          {bookName}
        </h4>
        <p>By: {author}</p>
        <div className="text-[#131313]/70 flex lg:items-center gap-2 mt-3 flex-col lg:flex-row">
          <div className="card-actions md:gap-4 justify-start">
            {tags.map((tag, idx) => (
              <div
                className="bg-slate-100 rounded-full px-2 text-green-600 font-medium"
                key={idx}
              >
                #{tag}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            <p>Year of Publishing: {yearOfPublishing}</p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-3">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
              />
            </svg>
            <p>Publisher: {publisher}</p>
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
              />
            </svg>

            <p>Page: {totalPages}</p>
          </div>
        </div>
        <div className="divider w-full"></div>
        <div className="w-full flex flex-col lg:flex-row gap-3">
          <div className=" rounded-full py-3 px-5 bg-[#328EFF]/15 text-[#328EFF]">
            <p>Category: {category}</p>
          </div>
          <div className=" rounded-full py-3 px-5 bg-[#FFAC33]/15 text-[#FFAC33]">
            <p>Rating: {rating}</p>
          </div>
          <Link className="" to={`/books/${bookId}`}><button className=" rounded-full py-3 px-5 w-full bg-[#23BE0A] text-white">
            View Details
          </button></Link>
        </div>
      </div>
    </div>
  );
}
