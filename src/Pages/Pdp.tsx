import React from "react";
import Product from "../Component/Product";
import { useParams } from "react-router-dom";
import { allProducts } from "../Model/Data";

const Pdp: React.FC = () => {
  const { UPC } = useParams<{ UPC: string }>();
  const productFind = allProducts.find((prodotto) => prodotto.UPC === UPC);
  return productFind ? <Product product={productFind} /> : null;
};

export default Pdp;
