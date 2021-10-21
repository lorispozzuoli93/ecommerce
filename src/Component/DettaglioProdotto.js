import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import prodottiTot from "../ProdottiTot";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";

export default function DettaglioProdotto(props) {
  const prodotto = prodottiTot.find((x) => x.UPC === props.match.params.id);
  if (!prodotto) {
    return <div>Prodotto non trovato</div>;
  }
  return (
    <Container maxWidth="false">
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 2 }}
          columns={{ xs: 2, sm: 8, md: 12 }}
        >
          <Grid item xs={12} sm={12} md={3}>
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
                    <Chip label="In stock" />
                  ) : (
                    <Chip label="Out of stock" />
                  )}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <Button variant="contained">
                    <Link to="/">Torna indietro</Link>
                  </Button>
                </Typography>
              </Card>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
