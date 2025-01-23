import { useState, useContext, createContext } from "react";

// const Example = () => {
//     //usestate initialized
//     const[color, setColor] = useState("blue");
//     return(
//         <div>
//     <h1>color = {color}</h1>
//     <button
//     type="button"
//     onClick={() => setColor("red")} //updated useState
//     >
//         Button
//     </button>
//     </div>
//     )
// }

// const Counter = () =>{
//     const [count, setCount] = useState(0);

//     useEffect(() =>{
//         setTimeout(() =>{
//             setCount((count) => count + 1)
//         }, 2000)
//     }, [])

//     return(
//         <div>
//             <h1>Count = {count}</h1>
//             <button onClick={()=> setCount(count + 1)}>Increment</button>
//             <button onClick={()=> setCount(count - 1)}>Decrement</button>
//             <button onClick={()=> setCount(0)}>Reset</button>
//         </div>
//     )
// }

const UserContext = createContext("Default user");

const Component1 = () => {
  const [user, setUser] = useState("abc");

  return (
    <div className="bg-red-500 w-screen h-screen">
      <div className="flex text-center w-full text-white">
        <UserContext.Provider value={user}>
          <h1>{`Hello ${user}!`}</h1>
          <Component2 />
        </UserContext.Provider>
      </div>
    </div>
  );
};

const Component2 = () => {
  return (
    <div>
      <h1>Component 2</h1>
      <Component3 />
    </div>
  );
};

const Component3 = () => {
  const user = useContext(UserContext);

  return (
    <div>
      <h1>Component 3</h1>
      <h2>{`Hello ${user}`}</h2>
    </div>
  );
};

export default Component1;
