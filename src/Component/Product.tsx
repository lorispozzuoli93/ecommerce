import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Products } from "../Data/Data";

type Props = {
  product: Products;
};

const Card = styled.div`
  background-color: rgb(255, 255, 255);
  color: rgba(0, 0, 0, 0.87);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
    rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
`;

const CardMedia = styled.div`
  background-image: url("https://via.placeholder.com/350");
  background-repeat: no-repeat;
  background-size: contain;
  height: 457px;
  width: 457px;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
`;

const CardContent = styled.div`
  padding-left: 16px;
  margin-top: 0px;
`;

const Typography = styled.h5`
  margin: 0px;
  padding-top: 16px;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.334;
  letter-spacing: 0em;
`;

const TypographyPrice = styled.p`
  margin: 0px 0px 12px;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5;
  letter-spacing: 0.00938em;
  color: rgba(0, 0, 0, 0.6);
`;

const TypographyStock = styled.p`
  padding-bottom: 15px;
`;

const Chip = styled.span`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.87);
  background-color: rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  padding: 7px 10px;
`;

const Product: React.FC<Props> = ({ product }) => {
  return (
    <Card key={product.UPC}>
      <Link
        to={`/product/${product.UPC}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <CardMedia className="img-responsive" />
        <CardContent>
          <Typography>{product.name}</Typography>
          <TypographyPrice>$ {product.price.current.value}</TypographyPrice>
          <TypographyStock>
            {product.availability.stock > 0 ? (
              <Chip> In stock </Chip>
            ) : (
              <Chip> Out of stock </Chip>
            )}
          </TypographyStock>
        </CardContent>
      </Link>
    </Card>
  );
};

export default Product;
