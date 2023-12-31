import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main.jsx";
import Home from "../Home/Home.jsx";
import About from "../AboutUs/About.jsx";
import Books from "../Books/Books.jsx";
import Errorpage from "../Errorpage/Errorpage.jsx";
import BookDetails from './../BookDetails/BookDetails';

const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      errorElement:<Errorpage/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/about',
          element:<About/>
        },
        {
          path:'/books',
          element:<Books/>,
          loader: () => fetch('https://api.itbook.store/1.0/new')
        },
        {
            path:'/book/:bookId',
            element:<BookDetails/>,
            loader:({params}) => fetch(`https://api.itbook.store/1.0/books/${params.bookId}`)
        }
      ]
    }
  ])
  export default router;