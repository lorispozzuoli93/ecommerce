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
  grid-template-columns: 24.15% 24.15% 24.15% 24.15%;
  @media (max-width: 1280px) {
    grid-template-columns: 24% 24% 24% 24%;
  }
  @media (max-width: 1024px) {
    grid-template-columns: 45% 45%;
  }
  @media (max-width: 414px) {
    grid-template-columns: 98%;
  }
  padding-top: 16px;
  padding-left: 16px;
  padding-bottom: 84px;
  @media (max-width: 1280px) {
    padding-left: 5px;
  }
  @media (max-width: 1024px) {
    padding-left: 55px;
  }
  @media (max-width: 768px) {
    padding-left: 40px;
  }
  @media (max-width: 540px) {
    padding-left: 25px;
  }
  @media (max-width: 414px) {
    padding-left: 7px;
  }
  gap: 16px;
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