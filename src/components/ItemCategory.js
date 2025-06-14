import MenuItem from "./MenuItem";

const ItemCategory = (props) => {
  const { title, itemCards } = props?.data;
  return (
    <div>
      {/* <h2 className="text-2xl font-bold p-5 border border-blue-800 rounded-lg">
        {title} ({itemCards?.length})
      </h2> */}
      <ul className="px-5 py-2 list-disc space-y-10">
        {itemCards?.map((item) => (
          <MenuItem key={item?.card?.id} menuInfo={item?.card?.info} />
        ))}
      </ul>
    </div>
  );
};
export default ItemCategory;
