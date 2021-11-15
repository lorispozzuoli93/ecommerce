import React from "react";
import ProductPdp from "../Component/ProductPdp";
import { useParams } from "react-router-dom";
import { Products } from "../Data/Data";

type Props = {
  products: Products[];
};

const Pdp: React.FC<Props> = ({ products }) => {
  const { UPC } = useParams<{ UPC: string }>();
  const productFind = products.find((prodotto) => prodotto.UPC === UPC);
  return productFind ? <ProductPdp product={productFind} /> : null;
};

export default Pdp;
