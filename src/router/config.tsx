
import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import About from "../pages/about/page";
import Retail from "../pages/retail/page";
import FnB from "../pages/FnB/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/retail",
    element: <Retail />,
  },
  {
    path:"/fnb",
    element:<FnB/>
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
