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
      <Grid container direction="column" minHeight="100vh">
        <NavBar
          search={(text) => {
            setSearchQuery(text);
          }}
          toggle={(value) => {
            setToggle(value);
          }}
          selected={toggle}
        />
        <Grid container p={2} spacing={{ xs: 2, md: 2 }} flex={1}>
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
                <Grid item xs={12} sm={12} md={3}>
                  <Prodotto prodotto={prodotto} key={index} />
                </Grid>
              ))}
        </Grid>
        <Grid xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

{
  /* <React.Fragment>
      <CssBaseline />
      <Grid container direction="column" minHeight="100vh">
        <Grid item xs={12}>
          <NavBar
            search={(text) => {
              setSearchQuery(text);
            }}
            toggle={(value) => {
              setToggle(value);
            }}
            selected={toggle}
          />
        </Grid>
        <Grid item xs={12} columns={{ xs: 4, sm: 3, md: 3 }}>
          <Grid
            container
            columns={{ xs: 4, sm: 3, md: 3 }}
            spacing={2}
            flex={1}
            p={2}
          >
            <Grid item xs={2} sm={2} md={3}>
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
                    <Prodotto prodotto={prodotto} key={index} />
                  ))}
            </Grid>
          </Grid>
        </Grid>
        <Footer />
      </Grid>
    </React.Fragment> */
}
