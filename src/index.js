import React from 'react';
import ReactDOM from 'react-dom';
import Searchjobs from "./components/searchjobs/Searchjobs"
import Workshops from './components/workshops/Workshops';
import Legal from "./components/legal/Legal"
import Resource from "./components/resources/Resources"
import App from './App';

import './index.css';


import {
    createBrowserRouter,
    RouterProvider,
    Route,
  } from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },

    {
      path:"/Search-For-Jobs",
      element: <Searchjobs/>
    },

    {
      path:"/Workshops",
      element: <Workshops/>
    },

    {
      path:"/Legal",
      element: <Legal/>
    },
    {
      path:"/Resource",
      element:<Resource/>
    }
  ]);
  
  ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);