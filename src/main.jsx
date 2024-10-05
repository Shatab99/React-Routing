import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Root';
import AboutMe from './pages/AboutMe';
import Home from './pages/Home';
import Settings from './pages/Settings';
import Orders from './pages/Orders';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/me",
        element: <AboutMe/>,
      },
      {
        path: "/settings",
        element: <Settings/>,
      },
      {
        path: "/orders",
        element: <Orders/>,
      },
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
