import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Layout from "../components/Layout/Layout";
import { PATHS } from "./constants";

export const router = createBrowserRouter([
  {
    path: PATHS.home,
    element: <Layout />,
    children: [
      {
        path: PATHS.home,
        element: <Home />,
      },
    ],
  },
]);
