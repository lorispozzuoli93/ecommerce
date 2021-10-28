import React from "react";
import { Prodotti } from "../Data";
import Prodotto from "./Prodotto";
import { useParams } from "react-router-dom";

type Props = {
  prodotti: Prodotti[];
};

const DettaglioProdotto: React.FC<Props> = ({ prodotti }) => {
  const { UPC } = useParams<{ UPC: string }>();
  const prodotto = prodotti.find((prodotto) => prodotto.UPC === UPC);
  return prodotto ? <Prodotto prodotto={prodotto} /> : null;
};

export default DettaglioProdotto;
