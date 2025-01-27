import LineItem from "./LineItem";

interface Items {
  id: number;
  checked: boolean;
  item: string;
}

const ItemList = ({ items, handleCheck, handleDelete }: {
  items: Items[];
  handleCheck: (id?: any) => void;
  handleDelete: (id?: any) => void;
}) => {
  return (
    <ul>
      {items.map((item) => (
        <LineItem
          key={item.id}
          item={item}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default ItemList;
