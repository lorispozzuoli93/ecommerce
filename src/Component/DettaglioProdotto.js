import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import prodottiTot from "../ProdottiTot";
import { Link } from "react-router-dom";

export default function DettaglioProdotto(props) {
  const prodotto = prodottiTot.find((x) => x.UPC === props.match.params.id);
  if (!prodotto) {
    return <div>Prodotto non trovato</div>;
  }
  return (
    <Card>
      <CardMedia
        component="img"
        image="https://picsum.photos/350/350"
        alt={prodotto.name}
      />
      <Card>
        <Typography gutterBottom variant="h4" component="div">
          {prodotto.name}
        </Typography>
        <Typography variant="h5" color="text.secondary">
          {prodotto.price.current.value}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {prodotto.availability.stock > 0 ? (
            <p>In stock</p>
          ) : (
            <p>Out of stock</p>
          )}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Link to="/">Torna indietro</Link>
        </Typography>
      </Card>
    </Card>
  );
}
