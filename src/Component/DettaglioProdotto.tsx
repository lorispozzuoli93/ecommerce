import React from "react";
import Prodotto from "./Prodotto";
import { useParams } from "react-router-dom";
import { prodottiTot } from "../Data";


const DettaglioProdotto: React.FC = () => {
  const { UPC } = useParams<{ UPC: string }>();
  const prodotto = prodottiTot.find((prodotto) => prodotto.UPC === UPC);
  return prodotto ? <Prodotto prodotto={prodotto} /> : null;
};

export default DettaglioProdotto;
