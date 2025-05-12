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
import Body from "./components/Body";
import Header from "./components/Header";

const resList = {};
const AppLayout = () => {
  return (
    <div className="app">
      {/* HEADER */}
      <Header />

      {/* BODY */}
      <Body />
      {/* FOOTER */}
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
