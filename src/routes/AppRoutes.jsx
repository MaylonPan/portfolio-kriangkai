import React from 'react';
import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import Project from '../pages/Project.jsx';
import Contract from '../pages/Contract.jsx';
import { createBrowserRouter, RouterProvider } from "react-router"



const router = createBrowserRouter([
      {path: "/",element: <Home />},
      {path: "about", element: <About />},
      {path: "project", element: <Project />},
      {path: "contract", element: <Contract />},
    ])

const AppRoutes = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default AppRoutes;