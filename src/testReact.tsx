import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import "./test.css";

function Test() {
  // const name = "abc";

  return (
    <div className="Test">
      {/* <p>Hello {handleNameChange()}</p> */}
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default Test;
