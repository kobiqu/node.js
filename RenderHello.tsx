// import { CSSProperties } from "react";
import { prop, book_Dea } from "./interfaces";
function RenderTitle(prop: prop) {
  const myStyle = { color: "yellow", fontSize: "40px" };
  return <p style={myStyle}>{prop.title}</p>;
}
function Header(prop: prop) {
  return (
    <>
      <header className="head">
        <p className="welcome">{prop.title}</p>{" "}
        <button className="head_button">press right here</button>
      </header>
    </>
  );
}
function Book(proper: book_Dea) {
  return (
    <>
      <div className="book">
        <p>{proper.title}</p>
        <img className="imgs" src={proper.imgSrc} alt="banana" />
        <p> {proper.textMovie} </p>
      </div>
    </>
  );
}
function Footer() {
  const date: any = `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()} `;
  const time: any = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
  return (
    <>
      <footer className="foot">
        {" "}
        <p className="foot_fill"> name: kobi</p>{" "}
        <p className="foot_fill"> time: {time} </p>{" "}
        <p className="foot_fill"> date: {date}</p>
      </footer>
    </>
  );
}

export { RenderTitle, Header, Book, Footer };
