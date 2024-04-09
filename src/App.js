import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

export default class App extends Component {
  render() {
    const router = createBrowserRouter([
      {
        path: "/",
        element:<><Navbar/><News key="home"/></>
      },
      {
        path:"/business",
        element:<><Navbar/><News key="business" category="business"/></>
      },
      {
        path:"/entertainment",
        element:<><Navbar/><News key="entertainment" category="entertainment"/></>
      },
      {
        path:"/health",
        element:<><Navbar/><News key="health" category="health"/></>
      },
      {
        path:"/science",
        element:<><Navbar/><News key="science" category="science"/></>
      },
      {
        path:"/sports",
        element:<><Navbar/><News key="sports" category="sports"/></>
      },
      {
        path:"/technology",
        element:<><Navbar/><News key="technology" category="technology"/></>
      }
    ]);
    return (
      <div>
        <RouterProvider router={router} />
      </div>
    )
  }
}

