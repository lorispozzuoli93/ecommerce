import * as React from "react";
import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Prodotto from "./Prodotto.js";
import NavBar from "./NavBar.js";

export default function ListaProdotti() {
   const prodottiTot = [
    {
      img: "https://picsum.photos/id/236/350/350",
      nome: "Prodotto 1",
      prezzo: "100€",
      stock: "in stock",
    },
    {
      img: "https://picsum.photos/id/240/350/350",
      nome: "Prodotto 2",
      prezzo: "150€",
      stock: "in stock",
    },
    {
      img: "https://picsum.photos/id/241/350/350",
      nome: "Prodotto 3",
      prezzo: "200€",
      stock: "in stock",
    },
    {
      img: "https://picsum.photos/id/242/350/350",
      nome: "Prodotto 4",
      prezzo: "250€",
      stock: "not in stock",
    },
  ];

const [prodotti, setProdotti] = useState(prodottiTot)

  const cerca = (text) => {
    var newProdotti = []
    prodottiTot.map((prodotto, index) => {
      if(prodotto.nome.toLowerCase().includes(text)) {
        newProdotti.push({
          nome: prodotto.nome,
        })
      }
    })
    setProdotti(newProdotti)
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <NavBar cerca={(text) => {cerca(text)}}/>
      <Container maxWidth="false">
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 2 }}
            columns={{ xs: 2, sm: 8, md: 12 }}
          >
            {prodotti &&
              prodotti.map((prodotto, index) => (
                <Grid item xs={3} sm={3} md={3} key={index}>
                  <Prodotto
                    img={prodotto.img}
                    nome={prodotto.nome}
                    prezzo={prodotto.prezzo}
                    stock={prodotto.stock}
                  />
                </Grid>
              ))}
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}
