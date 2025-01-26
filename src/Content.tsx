const Content = () => {
  const handleNameChange = () => {
    const names = ["Bob", "Kevin", "Dave"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };

  const handleClick = () => {
    console.log("you clicked it");
  };

  const handleClick2 = (name) => {
    console.log(` ${name} was clicked`);
  };

  const handleClick3 = (e) => {
    console.log(e.target.innerText);
  };

  return (
    <main>
      <p onDoubleClick={handleClick}>Hello {handleNameChange()}</p>
      <button onClick={handleClick}>Click it</button>
      <br />
      <button onClick={() => handleClick2("abc")}>Click it</button>
      <br />
      <button onClick={(e) => handleClick3(e)}>Click it</button>
    </main>
  );
};

export default Content;
