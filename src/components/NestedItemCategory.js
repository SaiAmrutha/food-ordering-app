import MenuItem from "./MenuItem";

const NestedItemCategory = (props) => {
  const { title, categories } = props?.data;
  return (
    <div>
      <h2 className="text-3xl font-bold p-5 rounded-lg">{title}</h2>
      <div className="mx-10">
        {categories?.map((subcategory) => (
          <div key={subcategory?.title}>
            <h3 className="font-bold text-2xl">
              {subcategory?.title} ({subcategory?.itemCards?.length})
            </h3>
            <ul>
              {subcategory?.itemCards?.map((item) => (
                <MenuItem
                  key={item?.card?.info?.id}
                  menuInfo={item?.card?.info}
                />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NestedItemCategory;
