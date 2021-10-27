import React from "react";
import prodottiTot from "../Data";
import Prodotto from "./Prodotto";

export default function DettaglioProdotto(props) {
  const prodotto = prodottiTot.find((x) => x.UPC === props.match.params.id);

  return <Prodotto prodotto={prodotto} />;
}
