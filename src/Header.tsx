const Header = ({ title } : any) => {
  // const headerStyle = {
  //   backgroundColor: "mediumblue",
  //   color: "#fff",
  // };
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

Header.defaultProps = {
  title: "abc",
};

export default Header;
