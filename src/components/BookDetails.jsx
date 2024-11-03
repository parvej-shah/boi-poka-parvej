import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import {addToStoredReadList,addToStoredWishList} from "../utils/addToDb";
export default function BookDetails() {
  const books = useLoaderData();
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const book = books.find((book) => book.bookId === id);
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
    review
  } = book;
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row">
        <div className="bg-base-200 md:w-1/2 p-10 lg:p-16 rounded-xl">
          <img src={image} className=" rounded-lg shadow-2xl w-full" />
        </div>
        <div className="lg:w-1/2">
          <h4 className="text-5xl font-bold text-[#131313]">{bookName}</h4>
          <p className="pt-6 text-xl font-medium text-[#131313]/80">
            By: {author}
          </p>
          <div className="divider"></div>
          <p className="text-xl font-medium text-[#131313]/80">{category}</p>
          <div className="divider"></div>
          <p className="text-[#131313]/70">
            <span className="text-[#131313] font-bold">Review: </span>
            {review}
          </p>
          <div className="text-[#131313]/70 flex items-center gap-2 mt-3">
            <p className="text-[#131313] font-bold">Tags</p>
            <div className="card-actions md:gap-4 justify-start">
              {tags.map((tag, idx) => (
                <div
                  className="bg-slate-100 rounded-full px-2 text-green-600"
                  key={idx}
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
          <div className="divider"></div>
          <div className="lg:w-2/3 space-y-3">
            <div className="flex justify-between">
              <p className="text-[#131313]/70">Number of Pages:</p>
              <p className="text-[#131313] font-semibold">{totalPages}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[#131313]/70">Publisher:</p>
              <p className="text-[#131313] font-semibold">{publisher}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[#131313]/70">Year of Publishing:</p>
              <p className="text-[#131313] font-semibold">{yearOfPublishing}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[#131313]/70">Rating:</p>
              <p className="text-[#131313] font-semibold">{rating}</p>
            </div>
          </div>
          <div className="font-semibold text-lg flex flex-col lg:flex-row lg:items-center gap-7 mt-5">
            <button onClick={()=>addToStoredReadList(bookId)} className="py-3 btn text-[#131313] hover:bg-[#50B1C9]  px-8 border rounded-xl">Mark as Read</button>
            <button onClick={()=>addToStoredWishList(bookId)}  className="py-3 text-white bg-[#50B1C9] hover:border-[#50B1C9]  btn  px-8 border rounded-xl">Add to Wish List</button>
          </div>
        </div>
      </div>
    </div>
  );
}
