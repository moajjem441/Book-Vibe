import { createBrowserRouter } from "react-router";
import HomePage from "../Pages/HomePage/HomePage.jsx";
import BookPage from "../Pages/BookPage/BookPage.jsx";
import MainLayOut from "../MainLayOut/MainLayOut.jsx";
import ErrorPage from "../ErrorPage/ErrorPage.jsx";



export const router =createBrowserRouter([
  
  {
    path:"/",
    element :<MainLayOut></MainLayOut>,
    children :[
      {
        index:true,
        Component:HomePage
      },
      {
        path:"/book",
        Component:BookPage
      }
    ],
    errorElement:<ErrorPage></ErrorPage>
  }
])