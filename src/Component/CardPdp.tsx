import * as React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Products } from "../Data/Data";

const Typography = styled.h5`
  margin: 0px;
  padding-top: 12px;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.334;
  letter-spacing: 0em;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 10px;
`;

const ContainerTitle = styled.div`
  grid-column: 1/4;
`;

const ContainerMedia = styled.div`
  grid-column: 1/2;
`;

const CardMedia = styled.img`
  width: 100%;
`;

const ContainerText = styled.div``;

const TypographyPrice = styled.p`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5;
  letter-spacing: 0.00938em;
  color: rgba(0, 0, 0, 0.6);
`;

const TypographyName = styled.p`
  margin: 0px;
  padding-top: 12px;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.334;
  letter-spacing: 0em;
`;

const TypographyUpc = styled.p`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5;
  letter-spacing: 0.00938em;
`;

const ButtonAddCart = styled.button`
  background-color: transparent;
  border: 1px solid black;
  border-radius: 4px;
`;

const ContainerColor = styled.div`
  grid-column: 1/4;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 11.11% 11.11% 11.11% 11.11% 11.11% 11.11% 11.11% 11.11% 11.11%;
  cursor: pointer;
`;

type Props = {
  product: Products;
};

const CardPdp: React.FC<Props> = ({ product }) => {
  const [variant, setVariant] = useState<
    Products | Omit<Products, "variants"> | undefined
  >();
  useEffect(() => setVariant(product), [product]);

  return (
    <Container>
      {variant ? (
        <>
          <ContainerTitle>
            <Typography>{variant.name}</Typography>
          </ContainerTitle>
          <ContainerMedia>
            <CardMedia src="https://via.placeholder.com/350" />
          </ContainerMedia>
          <ContainerText>
            <Typography>{variant.name}</Typography>
            <TypographyPrice>{variant.price.current.value} USD</TypographyPrice>
            <TypographyName>Name: {variant.name}</TypographyName>
            <TypographyName>Lens color: Green</TypographyName>
            <TypographyName>Size: Standard</TypographyName>
            <TypographyUpc>UPC: {variant.UPC}</TypographyUpc>
            <ButtonAddCart>Add to cart</ButtonAddCart>
          </ContainerText>
          <ContainerColor>
            <Typography>Available colors:</Typography>
            <Grid>
              <img
                alt={`Product${product.UPC}`}
                src={`https://picsum.photos/200/200?random=${product.UPC}`}
                onClick={() => setVariant(product)}
              />
              {product.variants.map((prod) => (
                <img
                  alt={`Product${prod.UPC}`}
                  src={`https://picsum.photos/200/200?random=${prod.UPC}`}
                  onClick={() => setVariant(prod)}
                />
              ))}
            </Grid>
          </ContainerColor>
        </>
      ) : null}
    </Container>
  );
};

export default CardPdp;
