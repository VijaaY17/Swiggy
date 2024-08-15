import React from "react"
import  ReactDOM  from "react-dom/client"
import Header from "./src/components/Header"
import Body from "./src/components/Body"
import About from "./src/components/About";
import Error from "./src/components/Error";
import Contact from "./src/components/Contact";
import RestaurentMenu from "./src/components/RestaurantMenu";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom"




const App = () =>{
  return ( <div className="main">
    <Header/>
    <Outlet/>
  
  

  </div>
)}
const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    // errorElement:<Error/>,
    children:[
      {
        path:'/',
        element:<Body/>,
        // errorElement:<Error/>

      },
      {
        path:'/about',
        element:<About/>,
        // errorElement:<Error/>
      },
      {
        path:'/contact',
        element:<Contact/>

      },
      {
        path:'/restaurants/:id',
        element:<RestaurentMenu/>
      }

    ]
  },
  // {
  //   path:'/about',
  //   element:<About/>,
  //   errorElement:<Error/>
  // }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter}/>)
