import React from 'react';
import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import Project from '../pages/Project.jsx';
import Contact from '../pages/Contact.jsx';
import { createBrowserRouter, RouterProvider } from "react-router"



const router = createBrowserRouter([
      {path: "/",element: <Home />},
      {path: "about", element: <About />},
      {path: "project", element: <Project />},
      {path: "contact", element: <Contact />},
    ])

const AppRoutes = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default AppRoutes;