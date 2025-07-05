import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './Navigation'
import Home from './Home'
import About from './About'
import Service from './Service'
import Product from './Product'
import Testimonial from './Testimonial'
import Feature from './Feature'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import ErrorPage from './ErrorPage'
const router=createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
    errorElement: <ErrorPage />
  },
  {
    path:'/about',
    element:<About/>,
    errorElement: <ErrorPage />
  },
  {
    path:'/service',
    element:<Service/>,
    errorElement: <ErrorPage />
  },
  {
    path:'/feature',
    element:<Feature/>,
    errorElement: <ErrorPage />
  },
  {
    path:'/product',
    element:<Product/>,
    errorElement: <ErrorPage />
  },
  {
    path:'/testimonial',
    element:<Testimonial/>,
    errorElement: <ErrorPage />
  }
])
function App() {
  return (
    <>
    
    <RouterProvider router={router}>
      
    </RouterProvider>
    </>
  )
}

export default App
