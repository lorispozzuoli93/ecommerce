import React from "react";
import Prodotto from "./Prodotto";
import { useParams } from "react-router-dom";
import { allProducts } from "../Data";

const DettaglioProdotto: React.FC = () => {
  const { UPC } = useParams<{ UPC: string }>();
  const productFind = allProducts.find((prodotto) => prodotto.UPC === UPC);
  return productFind ? <Prodotto product={productFind} /> : null;
};

export default DettaglioProdotto;
