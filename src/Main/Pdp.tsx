import React from "react";
import styled from "styled-components";
import Product from "../Component/Product";
import { useParams } from "react-router-dom";
import { allProducts } from "../Data/Data";

const Grid = styled.div`
  height: 457px;
  width: 457px;
`;

const Pdp: React.FC = () => {
  const { UPC } = useParams<{ UPC: string }>();
  const productFind = allProducts.find((prodotto) => prodotto.UPC === UPC);
  return productFind ? (
    <Grid>
      <Product product={productFind} />
    </Grid>
  ) : null;
};

export default Pdp;
