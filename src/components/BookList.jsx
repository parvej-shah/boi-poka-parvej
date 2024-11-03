import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import {getStoredReadList,getStoredWishList} from "../utils/addToDb";
import ReadBooks from "./ReadBooks";
import WishList from "./WishList";
export default function BookList() {
    const allBooks = useLoaderData();
    const [readBooks,setReadBooks] = useState([]);
    const [wishedBooks,setWishedBooks] = useState([]);
    useEffect(()=>{
        const toReadBookIds = getStoredReadList();
        const toReadBookIdsNum = toReadBookIds.map(num=>parseInt(num));
        const toReadBooks = allBooks.filter(book=>toReadBookIdsNum.includes(book.bookId));
        setReadBooks(toReadBooks);
        const toReadWishIds = getStoredWishList();
        const toReadWishIdsNum = toReadWishIds.map(num=>parseInt(num));
        const toWishBooks = allBooks.filter(book=>toReadWishIdsNum.includes(book.bookId));
        setWishedBooks(toWishBooks);
    },[]);
  return (
    <div className="container mx-auto px-2">
      <div className="font-bold text-[#131313] text-3xl bg-base-200 py-8 rounded-xl flex items-center justify-center mb-5">
        <h1>BOOK</h1>
      </div>
      <div role="tablist" className="tabs tabs-lifted">
      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab border-t-base-300"
        aria-label="ReadBooks"
        defaultChecked
        
      />
      <div
        role="tabpanel"
        className="tab-content  p-6"
      >
        <div className="space-y-6">
        {
            readBooks.map(book=><ReadBooks key={book.bookId} book={book}/>)
        }
        </div>
      </div>

      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab"
        aria-label="WishList"
        
      />
      <div
        role="tabpanel"
        className="tab-content p-6"
      >
        <div className="space-y-6">
        {
            wishedBooks.map(book=><WishList key={book.bookId} book={book}/>)
        }
        </div>
      </div>
    </div>
    </div>
  );
}
