import React from "react";
import { useParams } from "react-router-dom";
import CardPdp from "../Component/CardPdp";
import { Products } from "../Data/Data";

type Props = {
  products: Products[];
};

const Pdp: React.FC<Props> = ({ products }) => {
  const { UPC } = useParams<{ UPC: string }>();
  const productFind = products.find((prodotto) => prodotto.UPC === UPC);
  return productFind ? <CardPdp product={productFind} /> : null;
};

export default Pdp;
