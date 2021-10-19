import "./App.css";
import SearchAppBar from "./Component/AppBar";
import MediaCard from "./Component/Card";

function App() {
  return (
    <div>
      <SearchAppBar />
      <div className="flessibile">
        <MediaCard titolo="Titolo prodotto 1" prezzo="100€" stock="In stock"/>
        <MediaCard titolo="Titolo prodotto 2" prezzo="100€" stock="In stock"/>
        <MediaCard titolo="Titolo prodotto 3" prezzo="100€" stock="In stock"/>
        <MediaCard titolo="Titolo prodotto 4" prezzo="100€" stock="In stock"/>
        <MediaCard titolo="Titolo prodotto 5" prezzo="100€" stock="In stock"/>
      </div>
      <div className="flessibile">
        <MediaCard titolo="Titolo prodotto 6" prezzo="100€" stock="Ouf of stock"/>
        <MediaCard titolo="Titolo prodotto 7" prezzo="100€" stock="Ouf of stock"/>
        <MediaCard titolo="Titolo prodotto 8" prezzo="100€" stock="Ouf of stock"/>
      </div>
    </div>
  );
}

export default App;
