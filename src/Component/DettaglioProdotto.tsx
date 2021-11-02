import React from "react";
import Prodotto from "./Prodotto";
import { useParams } from "react-router-dom";
import { prodottiTot } from "../Data";

const DettaglioProdotto: React.FC = () => {
  const { UPC } = useParams<{ UPC: string }>();
  const product = prodottiTot.find((prodotto) => prodotto.UPC === UPC);
  return product ? <Prodotto prodotto={product} /> : null;
};

export default DettaglioProdotto;
