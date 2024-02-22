import React, { lazy,Suspense,useState } from "react";
import ReactDOM from "react-DOM/client";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import { createBrowserRouter,RouterProvider, Outlet } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import RestaurantMenu from "./RestaurantMenu";
import Profile from "./Profile";
import UserContext from "./utils/UserContext";
const Contact=lazy(()=>{return(import("./Contact"))})
const AppLayout = () => {
  const [user,setUser]=useState({
    user:{
      name: "John",
      email: "john@example.com",
    }
  })
  return(
    <UserContext.Provider value={{user:user}} >
      <Header/>
      <Outlet/>
      <Footer/>
    </UserContext.Provider>
    
  )
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element: <About/>,
        children:[
          {
            path:"profile",
            element:<Profile/>
          }
        ]
      },
      {
        path:"/Contact",
        element:<Suspense><Contact/></Suspense>
      }
      ,
      {
        path:"/Home",
        element:<Home/>
      }
      ,{
        path:"/resturant/:resid",
        element:<RestaurantMenu/>
      }
    ] 
  },
 

])




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
