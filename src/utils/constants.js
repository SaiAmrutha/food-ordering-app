export const LOGO_URL =
  "https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Editable-Photoshop-Food-Logo-Design-by-GraphicsFamily-scaled.jpg";

// export const MENU_API1 = (restId) =>
//   `https://www.swiggy.com/city/bangalore/mcdonalds-5th-block-koramangala-rest23678?restaurant_id={restId}`;

// export const MENU_API2 = "&source=collection&query=Burger";

// export const MENU_API = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&restaurantId=${restId}&catalog_qa=undefined&submitAction=ENTER`;

export const MENU_API = (resId) =>
  `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&catalog_qa=undefined&submitAction=ENTER&restaurantId=${resId}`;

// export const MENU_API =
// "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&catalog_qa=undefined&submitAction=ENTER&restaurantId=1004721";
