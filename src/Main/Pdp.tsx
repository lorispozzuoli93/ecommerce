import React from "react";
import styled from "styled-components";
import Product from "../Component/Product";
import { useParams } from "react-router-dom";
import { Products } from "../Data/Data";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 25%;
`;

type Props = {
  products: Products[];
};

const Pdp: React.FC<Props> = ({ products }) => {
  const { UPC } = useParams<{ UPC: string }>();
  const productFind = products.find((prodotto) => prodotto.UPC === UPC);
  return productFind ? (
    <Grid>
      <Product product={productFind} />
    </Grid>
  ) : null;
};

export default Pdp;
