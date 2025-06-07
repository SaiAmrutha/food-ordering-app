import { useEffect, useState } from "react";
import { MENU_API1 } from "./constants";

const useRestauranMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  // fetch data
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(MENU_API1 + resId);
    const json = await data?.json();
    setResInfo(json?.data);
  };
  return resInfo;
};

export default useRestauranMenu;
