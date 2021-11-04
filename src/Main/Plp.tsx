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
  display: flex;
  flex-wrap: wrap;
  padding: 15px;
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
