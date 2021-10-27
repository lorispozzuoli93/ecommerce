import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Component/Home";
import DettaglioProdotto from "./Component/DettaglioProdotto";

function App() {
  return (
    <Switch>
      <Route path="/prodotto/:id" component={DettaglioProdotto}></Route>
      <Route path="/" component={Home}></Route>
    </Switch>
  );
}

export default App;
