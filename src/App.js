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
import { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Outlet } from "../node_modules/react-router-dom/dist/index";
import About from "./components/About";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Header from "./components/Header";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";

const resList = {};
const AppLayout = () => {
  // authentication
  const [userName, setUserName] = useState();
  useEffect(() => {
    // make an API call and send username and password
    const data = {
      name: "Amrutha",
    };
    setUserName(data.name);
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="app">
        {/* HEADER */}

        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
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
