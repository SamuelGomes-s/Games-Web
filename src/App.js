import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Category from "./pages/category";
import Favorite from "./pages/favorite";
import Detail from "./pages/detail";
import Layout from "./components/Layout";


export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/category',
        element: <Category />,
      },
      {
        path: '/category/:id',
        element: <Category />,
      },
      {
        path: '/favorites',
        element: <Favorite />,
      },
      {
        path: '/detail/:id',
        element: <Detail />,
      }
    ]
  }
])