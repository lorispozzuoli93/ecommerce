import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import prodottiTot from "../Data";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";

export default function DettaglioProdotto(props) {
  const prodotto = prodottiTot.find((x) => x.UPC === props.match.params.id);
  // if (!prodotto) {
  //   return <div>Prodotto non trovato</div>;
  // }
  return (
    <Grid container spacing={{ xs: 2, md: 2 }}>
      <Grid item xs={12} sm={12} md={3}>
        <Card>
          <CardMedia
            component="img"
            image="https://via.placeholder.com/350"
            alt={prodotto.name}
          />
          <Card>
            <Typography variant="h5" component="div">
              {prodotto.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              $ {prodotto.price.current.value}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {prodotto.availability.stock > 0 ? (
                <Chip label="In stock" />
              ) : (
                <Chip label="Out of stock" />
              )}
            </Typography>
            <Typography sx={{ mb: 1.5 }}>
              <Button variant="contained">
                <Link to="/ecommerce">Torna indietro</Link>
              </Button>
            </Typography>
          </Card>
        </Card>
      </Grid>
    </Grid>
  );
}
