import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Component/Home";
import DettaglioProdotto from "./Component/DettaglioProdotto";
import Footer from "./Component/Footer";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path="/prodotto/:id" component={DettaglioProdotto}></Route>
        <Route path="/" component={Home} exact></Route>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
