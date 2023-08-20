import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./components/Layout/Main.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/AboutUs/About.jsx";
import Books from "./components/Books/Books.jsx";
import Errorpage from "./components/Errorpage/Errorpage.jsx";

const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    errorElement:<Errorpage/>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/books',
        element:<Books></Books>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
        <RouterProvider router={router}/>
  </React.StrictMode>
);
