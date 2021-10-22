import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Component/Home";
import DettaglioProdotto from "./Component/DettaglioProdotto";

function App() {
  return (
    <BrowserRouter>
        <Route path="/prodotto/:id" component={DettaglioProdotto}></Route>
        {/* <Route path="/" component={Home} exact></Route> */}
        <Route path="/ecommerce" component={Home} exact></Route>
    </BrowserRouter>
  );
}

export default App;
