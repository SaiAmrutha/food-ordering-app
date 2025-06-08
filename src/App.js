/**
 * HEADER
 *  - LOGO
 *  - NAVBAR
 * BODY
 *  - SEARCH BAR
 *  - RESTAURANTS CONTAINER
 *      - RESTAURANT CARD
 *          - Img
 *          - Name of rest, Star Rating, Cuisine, Delivery time
 * FOOTER
 *  - COPYRIGHT
 *  - LINKS
 *  - ADDRESS
 *  - CONTACT
 * */
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Outlet } from "../node_modules/react-router-dom/dist/index";
import About from "./components/About";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Header from "./components/Header";
import RestaurantMenu from "./components/RestaurantMenu";

const resList = {};
const AppLayout = () => {
  return (
    <div className="app">
      {/* HEADER */}
      <Header />
      <Outlet />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
