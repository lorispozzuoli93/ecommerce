import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { Products } from "../Data/Data";

type Props = {
  product: Products;
};

const Product: React.FC<Props> = ({ product }) => {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card key={product.UPC}>
        <Link
          to={`/product/${product.UPC}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <CardMedia
            component="img"
            image="https://via.placeholder.com/350"
            alt={product.name}
          />
          <CardContent>
            <Typography variant="h5" component="div">
              {product.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              $ {product.price.current.value}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {product.availability.stock > 0 ? (
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

export default Product;
