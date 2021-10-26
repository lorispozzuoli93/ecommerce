import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Component/Home";
import DettaglioProdotto from "./Component/DettaglioProdotto";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/prodotto/:id" component={DettaglioProdotto}></Route>
        <Route path="/" component={Home}></Route>
        {/* <Route path="/ecommerce" component={Home}></Route> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
