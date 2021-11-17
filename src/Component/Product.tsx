import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Products } from "../Data/Data";

const Card = styled.div`
  background-color: rgb(255, 255, 255);
  color: rgba(0, 0, 0, 0.87);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
    rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
  font-family: Roboto, Helvetica, Arial, sans-serif;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: black;
`;

const CardMedia = styled.img`
  width: 100%;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
`;

const CardContent = styled.div`
  padding-left: 16px;
  margin-top: 0px;
`;

const Typography = styled.h5`
  margin: 0px;
  padding-top: 12px;
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
  margin: 0px 0px 24px;
`;

const Chip = styled.span`
  font-size: 0.8125rem;
  padding: 12px;
  display: inline-flex;
  align-items: center;
  height: 32px;
  color: rgba(0, 0, 0, 0.87);
  background-color: rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  letter-spacing: 0.1px;
  cursor: default;
  outline: 0px;
  text-decoration: none;
  border: 0px;
  vertical-align: middle;
  box-sizing: border-box;
`;

type Props = {
  product: Products;
};

const Product: React.FC<Props> = ({ product }) => {
  return (
    <Card key={product.UPC}>
      <Link to={`/product/${product.UPC}`}>
        <StyledLink>
          <CardMedia src="https://via.placeholder.com/350" />
          <CardContent>
            <Typography>{product.name}</Typography>
            <TypographyPrice>$ {product.price.current.value}</TypographyPrice>
            <TypographyStock>
              {product.availability.stock > 0 ? (
                <Chip> in stock </Chip>
              ) : (
                <Chip> out of stock </Chip>
              )}
            </TypographyStock>
          </CardContent>
        </StyledLink>
      </Link>
    </Card>
  );
};

export default Product;
