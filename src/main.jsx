import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import Error from './components/Error';
import Home from './components/Home';
import BookDetails from './components/BookDetails';
import BookList from './components/BookList';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/pages-to-read",
        element: <div className='container mx-auto text-4xl justify-center items-center flex'>Pages to read</div>
      },
      {
        path:"/listed-books",
        loader: ()=> fetch('/booksData.json'),
        element: <BookList/>
      },
      {
        path:"/books/:bookId",
        loader: ()=> fetch('/booksData.json'),
        element:<BookDetails/>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
