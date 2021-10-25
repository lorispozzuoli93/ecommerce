import * as React from "react";
import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Prodotto from "./Prodotto.js";
import NavBar from "./NavBar.js";
import prodottiTot from "../Data.js";
import Footer from "./Footer.js";

export default function Home() {
  const [prodotti, setProdotti] = useState(prodottiTot);

  const [searchQuery, setSearchQuery] = useState("");

  const [toggle, setToggle] = useState("all");

  return (
    <React.Fragment>
      <CssBaseline />
      <NavBar
        search={(text) => {
          setSearchQuery(text);
        }}
        toggle={(value) => {
          setToggle(value);
        }}
        selected={toggle}
      />
      <Grid container pl={2} pt={2} spacing={{ xs: 2, md: 2 }}>
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
                    prod.name.toLowerCase().includes(searchQuery.toLowerCase())
                  );
                default:
                  return (
                    prod.availability.stock <= 0 &&
                    prod.name.toLowerCase().includes(searchQuery.toLowerCase())
                  );
              }
            })
            .map((prodotto, index) => (
              <Grid item xs={12} sm={12} md={3} key={index}>
                <Prodotto prodotto={prodotto} />
              </Grid>
            ))}
      </Grid>
      <Footer />
    </React.Fragment>
  );
}
