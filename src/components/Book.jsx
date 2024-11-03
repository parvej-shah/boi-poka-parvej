import React from "react";
import { Link } from "react-router-dom";
export default function Book({ book }) {
  const {
    bookId,
    bookName,
    author,
    image,
    rating,
    category,
    tags,
  } = book;
  return (
    <Link to={`/books/${bookId}`}>
    <div className="card h-full shadow-md p-6 border hover:bg-green-50 group">
      <figure className=" bg-slate-200 group-hover:bg-green-100 group-hover:scale-105 duration-200 rounded-xl p-8">
        <img src={image} alt={`${bookName} img`} className="w-36 h-48 rounded-sm  group-hover:scale-125 duration-300 shadow-xl group-hover:shadow-green-800"/>
      </figure>
      <div className="my-3 space-y-4">
        <div className="card-actions md:gap-4 justify-start">
          {
            tags.map((tag,idx)=><div className="bg-slate-100 rounded-full px-2 text-green-600" key={idx}>{tag}</div>)
          }
        </div>
        <h4 className="card-title text-[#131313] text-2xl font-black" >{bookName}</h4>
        <p className="text-[#131313]/80 font-medium">By: {author}</p>
        <div className="card-actions justify-between text-[#131313]/80 font-medium border-t border-dashed pt-3">
          <div className="">{category}</div>
          <div className="flex gap-2">
            <p>{rating}</p>
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
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
}
