import "./App.css";
import { Route, Switch } from "react-router-dom";
import Plp from "./Pages/Plp";
import Pdp from "./Pages/Pdp";

function App() {
  return (
    <Switch>
      <Route path="/product/:UPC" component={Pdp}></Route>
      <Route path="/" component={Plp}></Route>
    </Switch>
  );
}

export default App;
