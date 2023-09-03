import "./App.css";
import { Header, Book, Footer } from "./components/RenderHello";
import { DATA } from "./components/interfaces";

function App() {
  return (
    <>
      {" "}
      <Header title="welcome to my website" />{" "}
      <main className="books">
        <Book
          title={DATA[0].title}
          imgSrc={DATA[0].imgSrc}
          textMovie={DATA[0].textMovie}
        />
        <Book
          title={DATA[1].title}
          imgSrc={DATA[1].imgSrc}
          textMovie={DATA[1].textMovie}
        />

        <Book
          title={DATA[2].title}
          imgSrc={DATA[2].imgSrc}
          textMovie={DATA[2].textMovie}
        />
      </main>{" "}
      <Footer />
    </>
  );
}

export default App;
