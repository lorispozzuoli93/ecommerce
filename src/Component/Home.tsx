import * as React from "react";
import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Prodotto from "./Prodotto.js";
import NavBar from "./NavBar.js";
import { Prodotti } from "../Data.jsx";
import Footer from "./Footer.jsx";

type Props = {
  prodottiTot: Prodotti[];
};

const Home: React.FC<Props> = ({ prodottiTot}) => {
  const [prodotti, setProdotti] = useState(prodottiTot);

  const [searchQuery, setSearchQuery] = useState("");

  const [toggle, setToggle] = useState("none");

  return (
    <React.Fragment>
      <CssBaseline />
      <Grid container direction="column" minHeight="100vh">
        <NavBar
          setToggle={setToggle}
          toggle={toggle}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <Grid container pl={2} pt={2} spacing={{ xs: 2, md: 2 }} flex={1}>
          {prodotti
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
            .map((prodotto, index) => (
              <Prodotto prodotto={prodotto} key={index} />
            ))}
        </Grid>
        <Footer />
      </Grid>
    </React.Fragment>
  );
};

export default Home;