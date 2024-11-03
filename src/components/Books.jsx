import React, { useEffect, useState } from 'react'
import Book from './Book';

export default function Books() {
    const [books, setBooks] = useState([]);
    useEffect(()=>{
        fetch('booksData.json')
        .then(res=>res.json())
        .then(data=>setBooks(data))
    },[])
  return (
    <div className='my-10'>
    <h2 className='text-4xl font-bold text-center'>BOOKS</h2>
    <div className='py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
        {
            books.map(book=><Book key={book.bookId} book={book}/>)
        }
    </div>
    </div>
  )
}
