import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Mens from "../pages/Mens/Mens";
import Womens from "../pages/Womens/Womens";
import Kids from "../pages/Kids/Kids";
import Collections from "../pages/Collections/Collections";
import Trending from "../pages/Trending/Trending";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import Home from "../pages/Home/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/mens",
        element: <Mens />,
      },
      {
        path: "/womens",
        element: <Womens />,
      },
      {
        path: "/kids",
        element: <Kids />,
      },
      {
        path: "/collections",
        element: <Collections />,
      },
      {
        path: "trending",
        element: <Trending />,
      },
    ],
  },
]);

export default router;
