import ItemList from "./ItemList";

interface Items {
  id: number;
  checked: boolean;
  item: string;
}

const Content = ({
  items,
  handleCheck,
  handleDelete,
}: {
  items: Items[];
  handleCheck: (id?: any) => void;
  handleDelete: (id?: any) => void;
}) => {
  // const [count, setCount] = useState(0);

  // const handleNameChange = () => {
  //   const names = ["Bob", "Kevin", "Dave"];
  //   const int = Math.floor(Math.random() * 3);
  //   setName(names[int]);
  // };

  // const handleClick = () => {
  //   setCount(count + 1);
  //   setCount(count + 1);
  //   console.log(count);
  // };

  // const handleClick2 = () => {
  //   console.log(count);
  // };

  // const handleClick3 = (e) => {
  //   console.log(e.target.innerText);
  // };

  return (
    <main>
      {/* <p onDoubleClick={handleClick}>Hello {name}</p>
      <button onClick={handleNameChange}>change name</button>
      <br />
      <button onClick={handleClick}>Click it</button>
      <br />
      <button onClick={handleClick2}>Click it</button> */}

      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: "2rem" }}>Your list is empty</p>
      )}
    </main>
  );
};

export default Content;
