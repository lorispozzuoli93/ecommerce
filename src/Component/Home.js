import * as React from "react";
import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Prodotto from "./Prodotto.js";
import NavBar from "./NavBar.js";
import prodottiTot from "../ProdottiTot.js";
import Footer from "./Footer.js";

export default function Home() {
  const [prodotti, setProdotti] = useState(prodottiTot);

  const [searchQuery, setSearchQuery] = useState("");

  const [toggle, setToggle] = useState("all");

  // const cerca = (text) => {
  //   var newProdotti = [];
  //   prodottiTot.map((prodotto, index) => {
  //     if (prodotto.name.toLowerCase().includes(text)) {
  //       newProdotti.push(prodotto);
  //     }
  //   });
  //   setProdotti(newProdotti);
  // };

  // const toggle = (value) => {
  //   var newProdotti = [];
  //   prodotti.map((prodotto, index) => {
  //     if (value == "in") {
  //       if (prodotto.availability.stock > 0) {
  //         newProdotti.push(prodotto);
  //       }
  //     } else if (value == "out") {
  //       if (prodotto.availability.stock <= 0) {
  //         newProdotti.push(prodotto);
  //       }
  //     } else {
  //       newProdotti = prodottiTot;
  //     }
  //   });
  //   setProdotti(newProdotti);
  // };

  return (
    <React.Fragment>
      <CssBaseline />
      <NavBar
        cerca={(text) => {
          setSearchQuery(text);
        }}
        toggle={(value) => {
          setToggle(value);
        }}
      />
      <Container maxWidth="false">
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 2 }}
            columns={{ xs: 2, sm: 8, md: 12 }}
          >
            {prodotti &&
              prodotti
                .filter((prod) => {
                  switch (toggle) {
                    case "all":
                      return prod.name
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase());
                    case "in":
                      return (
                        prod.availability.stock > 0 &&
                        prod.name
                          .toLowerCase()
                          .includes(searchQuery.toLowerCase())
                      );
                    default:
                      return (
                        prod.availability.stock <= 0 &&
                        prod.name
                          .toLowerCase()
                          .includes(searchQuery.toLowerCase())
                      );
                  }
                })
                .map((prodotto, index) => (
                  <Grid item xs={12} sm={12} md={3} key={index}>
                    <Prodotto
                      // name={prodotto.name}
                      // price={prodotto.price.current.value}
                      // stock={prodotto.availability.stock}
                      prodotto={prodotto}
                    />
                  </Grid>
                ))}
          </Grid>
        </Box>
      </Container>
      <Footer />
    </React.Fragment>
  );
}
