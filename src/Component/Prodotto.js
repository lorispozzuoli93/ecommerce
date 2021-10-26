import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useHistory } from "react-router-dom";

export default function Prodotto(props) {
  const { prodotto } = props;
  var history = useHistory();

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card key={prodotto.UPC}>
        <CardActionArea
          onClick={() => history.push(`/prodotto/${prodotto.UPC}`)}
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
        </CardActionArea>
      </Card>
    </Grid>
  );
}
