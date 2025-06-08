import { useEffect } from "react";
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [resMenu, setResMenu] = useState([]);
  useEffect(() => {
    const fetchRestaurantMenu = async () => {
      try {
        // const response = await fetch(MENU_API + resId);
        const response = await fetch(MENU_API(resId));
        const json = await response.json();
        // console.log(json?.data?.cards);
        const restaurantData = json?.data?.cards?.find((item) =>
          item?.card?.card["@type"]?.includes("food.v2.Restaurant")
        )?.card?.card?.info;

        const menuData = json?.data?.cards
          ?.find((obj) => obj?.groupedCard)
          ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
            (obj) =>
              obj?.card?.card["@type"]?.includes("ItemCategory") ||
              obj?.card?.card["@type"]?.includes("NestedItemCategory")
          );

        const organizedMenuData = menuData?.map((item) => {
          const type = item?.card?.card?.["@type"];
          const title = item?.card?.card?.title || [];
          const itemCards = item?.card?.card?.itemCards || [];
          const categories = item?.card?.card?.categories || [];

          if (type?.includes("NestedItemCategory")) {
            return {
              title,
              type: "nested",
              categories: categories?.map((subcategory) => {
                return {
                  title: subcategory?.title,
                  itemCards: subcategory?.itemCards,
                };
              }),
            };
          } else {
            return {
              title,
              type: "item",
              itemCards,
            };
          }
        });

        setResInfo(restaurantData);
        setResMenu(organizedMenuData);
      } catch (err) {}
    };
    fetchRestaurantMenu();
  }, []);
};

export default useRestaurantMenu;
