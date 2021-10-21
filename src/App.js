import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Component/Home";
import DettaglioProdotto from "./Component/DettaglioProdotto";

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* exact si intende il percorso esatto quindi che non varia, non ho messo / perchè appena avvio il server mi carica l'uri ecommerce ma devo cambiarlo */}
        <Route path="/prodotto/:id" component={DettaglioProdotto}></Route>
        {/* <Route path="/" component={Home} exact></Route> */}
        <Route path="/ecommerce" component={Home} exact></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
