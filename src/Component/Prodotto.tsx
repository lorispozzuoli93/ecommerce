import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { Prodotti } from "../Data";

type Props = {
  prodotto: Prodotti;
};

const Prodotto: React.FC<Props> = ({ prodotto }) => {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card key={prodotto.UPC}>
        <Link
          to={`/prodotto/${prodotto.UPC}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <CardMedia
            component="img"
            image="https://via.placeholder.com/350"
            alt={prodotto.name}
          />
          <CardContent>
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
          </CardContent>
        </Link>
      </Card>
    </Grid>
  );
};

export default Prodotto;
