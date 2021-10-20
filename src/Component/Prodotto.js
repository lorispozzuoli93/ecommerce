import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function Prodotto(props) {
  return (
    <Card>
      <CardMedia
        component="img"
        image="https://picsum.photos/350/350"
        alt="product"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {props.name}
        </Typography>
        <Typography variant="h5" color="text.secondary">
          {props.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.stock > 0 ? <p>In stock</p> : <p>Out of stock</p>}
        </Typography>
      </CardContent>
    </Card>
  );
}
