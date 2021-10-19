import * as React from "react";
import Card from "@mui/material/Card";
// import CardActions from '@mui/material/CardActions';
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";

export default function Prodotto(props) {
  return (
    <Card sx={{}}>
      <CardMedia
        component="img"
        image="https://picsum.photos/350/350"
        alt="product"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.nome}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.prezzo}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.stock}
        </Typography>
      </CardContent>
    </Card>
  );
}
