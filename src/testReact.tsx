import Header from "./Header";
import SearchItem from "./SearchItem";
import AddItem from "./AddItem";
import Content from "./Content";
import Footer from "./Footer";
import "./test.css";
import { useState, useEffect } from "react";
import apiRequest from "./apiRequest";

function Test() {
  // const name = "abc";

  const API_URL = "https://localhost:7121/api/TodoItemApi";

  const [items, setItems] = useState([]);

  const [newItem, setNewItem] = useState("");

  const [search, setSearch] = useState("");

  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  console.log(items, "jhgfdasdfghj");

  useEffect(() => {
    // localStorage.setItem("shoppingList", JSON.stringify(items));
    const fetchItems = async () => {
      try {
        console.log("Fetching from:", API_URL); // Debugging

        const response = await fetch(API_URL, {
          mode: "cors",
        });

        console.log("Response Status:", response.status); // Debugging

        if (!response.ok) throw Error(`HTTP Error! Status: ${response.status}`);

        const listItems = await response.json();
        console.log("Fetched Data:", listItems); // Debugging

        setItems(listItems);
        setFetchError(null);
      } catch (err: any) {
        console.error("Fetch Error:", err.message);
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    // setTimeout(() => {
    //   (async () => await fetchItems())();
    // }, 2000);
    fetchItems();
  }, [API_URL]);
  console.log(fetchError, "err");

  // const setAndSaveItems = (newItems) => {
  //   setItems(newItems);
  // };

  // const addItem = async (item: any) => {
  //   const id = items.length ? items[items.length - 1].id + 1 : 1;
  //   const myNewItem = { id, isComplete: false, name: item };
  //   const listItems = [...items, myNewItem];
  //   setItems(listItems);

  //   const postOptions = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(myNewItem),
  //   };
  //   const result = await apiRequest(API_URL, postOptions);
  //   if (result) setFetchError(result);
  // };

  const addItem = async (item: string) => {
    try {
      const id = items.length ? items[items.length - 1].id + 1 : 1;
      const myNewItem = { id, isComplete: false, name: item };
      setItems((prevItems) => [...prevItems, myNewItem]);

      const postOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(myNewItem),
      };

      const response = await apiRequest(API_URL, postOptions);
      console.log(response);

      // if (response && response.status === "Success") {

      // } else {

      //   setItems((prevItems) =>
      //     prevItems.filter((item) => item.id !== myNewItem.id)
      //   );
      //   setFetchError("Failed to add item.");
      // }
    } catch (error) {
      setFetchError("An error occurred while adding the item.");
    }
  };

  // const handleCheck = async (id?: any) => {
  //   const listItems = items.map((item) =>
  //     item.id === id ? { ...item, isComplete: !item?.isComplete } : item
  //   );
  //   setItems(listItems);

  //   const myItem = listItems.find((item) => item.id === id);
  //   if (!myItem) return;

  //   const updateOptions = {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ isComplete: myItem.isComplete }), //Send object
  //   };

  //   const reqUrl = `${API_URL}/${id}`;
  //   const result = await apiRequest(reqUrl, updateOptions);
  //   if (result) setFetchError(result);
  // };

  const handleCheck = async (id: number) => {
    try {
      const updatedItem = items.find((item) => item.id === id);
      if (!updatedItem) return;

      const updatedIsComplete = !updatedItem.isComplete;

      const updateOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isComplete: updatedIsComplete }),
      };

      const reqUrl = `${API_URL}/${id}`;
      const response = await apiRequest(reqUrl, updateOptions);

      if (response.status == "Success") {
        const updatedItems = items.map((item) =>
          item.id === id ? { ...item, isComplete: updatedIsComplete } : item
        );
        setItems(updatedItems);
      } else {
        setFetchError("Failed to update item");
      }
    } catch (error) {
      setFetchError("An error occurred while updating the item.");
    }
  };

  // const handleDelete = async (id?: any) => {
  //   const listItems = items.filter((item) => item.id !== id);
  //   setItems(listItems);

  //   const deleteOptions = { method: "DELETE" };
  //   const reqUrl = `${API_URL}/${id}`;
  //   const result = await apiRequest(reqUrl, deleteOptions);
  //   console.log(result);
  //   if (result) setFetchError(result);
  // };

  const handleDelete = async (id?: any) => {
    try {
      const listItems = items.filter((item) => item.id !== id);
      setItems(listItems);

      const deleteOptions = { method: "DELETE" };
      const reqUrl = `${API_URL}/${id}`;
      const result = await apiRequest(reqUrl, deleteOptions);
      console.log(result);

      if (result && result.status !== "Success") {
        setFetchError(result.message || "Failed to delete item.");
      }
    } catch (error) {
      setFetchError("An error occurred while deleting the item.");
      console.error("Delete Error:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  return (
    <div className="Test">
      {/* <p>Hello {handleNameChange()}</p> */}
      <Header title="Grocery List" />

      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <main>
        {isLoading && <p>Loading Items...</p>}
        {fetchError && <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading && (
          <Content
            items={items.filter((item) =>
              item?.name?.toLowerCase().includes(search.toLowerCase())
            )}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        )}
      </main>
      <Footer length={items.length} />
    </div>
  );
}

export default Test;
