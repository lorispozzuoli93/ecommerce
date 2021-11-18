import * as React from "react";
import styled from "styled-components";
import Product from "../Component/Product";
import NavBar from "../Component/NavBar";
import { Products } from "../Data/Data";
import Footer from "../Component/Footer";
import { useSelector } from "react-redux";
import { searchSelector } from "../Features/SearchSlice/SelectorSearch";
import { toggleSelector } from "../Features/ToggleSlice/SelectorToggle";

const Grid = styled.div`
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const GridProduct = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 414px) {
    grid-template-columns: 1fr;
  }
  padding-top: 16px;
  padding-left: 0.85%;
  padding-right: 0.85%;
  padding-bottom: 84px;
`;

type Props = {
  products: Products[];
};

const Plp: React.FC<Props> = ({ products }) => {
  const searchQuery = useSelector(searchSelector);
  const toggle = useSelector(toggleSelector);

  return (
    <Grid>
      <NavBar />
      <GridProduct>
        {products
          ?.filter((prod) => {
            switch (toggle) {
              case "in":
                return prod.availability.stock > 0;
              case "out":
                return prod.availability.stock <= 0;
              default:
                return true;
            }
          })
          .filter((prod) => {
            return prod.name.toLowerCase().includes(searchQuery.toLowerCase());
          })
          .map((product) => (
            <Product product={product} key={product.UPC} />
          ))}
      </GridProduct>
      <Footer />
    </Grid>
  );
};

export default Plp;
