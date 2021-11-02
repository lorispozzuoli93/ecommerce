import * as React from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Prodotto from "../Component/Product";
import NavBar from "../Component/NavBar";
import { allProducts } from "../Model/Data";
import Footer from "../Component/Footer";

const Plp: React.FC = () => {
  const [products, setProducts] = useState(allProducts);

  const [searchQuery, setSearchQuery] = useState<string>("");

  const [toggle, setToggle] = useState<string>("none");

  return (
      <Grid container direction="column" minHeight="100vh">
        <NavBar
          setToggle={setToggle}
          toggle={toggle}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <Grid container pl={2} pt={2} spacing={{ xs: 2, md: 2 }} flex={1}>
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
              return prod.name
                .toLowerCase()
                .includes(searchQuery.toLowerCase());
            })
            .map((product, index) => (
              <Prodotto product={product} key={index} />
            ))}
        </Grid>
        <Footer />
      </Grid>
  );
};

export default Plp;
