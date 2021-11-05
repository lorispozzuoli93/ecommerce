import * as React from "react";
import styled from "styled-components";
import { useState } from "react";
import Product from "../Component/Product";
import NavBar from "../Component/NavBar";
import { allProducts } from "../Data/Data";
import Footer from "../Component/Footer";

const Grid = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const GridProduct = styled.div`
  display: grid;
  grid-template-columns: 24.2% 24.2% 24.2% 24.2%;
  @media (max-width: 1280px) {
    grid-template-columns: 24% 24% 24% 24%;
  }
  @media (max-width: 1024px) {
    grid-template-columns: 45% 45%;
  }
  @media (max-width: 414px) {
    grid-template-columns: 98%;
  }
  padding-top: 15px;
  padding-left: 15px;
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
  gap: 15px;
  flex: 1;
`;

const Plp: React.FC = () => {
  const [products, setProducts] = useState(allProducts);

  const [searchQuery, setSearchQuery] = useState<string>("");

  const [toggle, setToggle] = useState<string>("none");

  return (
    <Grid>
      <NavBar
        toggle={toggle}
        setToggle={setToggle}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
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
          .map((product, index) => (
            <Product product={product} key={index} />
          ))}
      </GridProduct>
      <Footer />
    </Grid>
  );
};

export default Plp;
