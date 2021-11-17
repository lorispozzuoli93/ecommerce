import * as React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Products } from "../Data/Data";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Grid = styled.div`
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  gap: 10px;
  column-gap: 20px;
  margin-left: 2.5%;
  margin-right: 2.5%;
  margin-top: 20px;
`;

const ContainerTitle = styled.div`
  grid-column: 1/4;
  @media (max-width: 540px) {
    text-align: center;
  }
`;

const TypographyTitle = styled.h5`
  margin: 0px;
  font-size: 40px;
  font-weight: bold;
`;

const Typography = styled.h5`
  margin: 0px;
  font-size: 35px;
  font-weight: bold;
`;

const ContainerMedia = styled.div`
  grid-column: 1/2;
  @media (max-width: 540px) {
    grid-column: 1/4;
    text-align: center;
  }
`;

const CardMedia = styled.img`
  @media (max-width: 540px) {
    height: 350px;
    width: 450px;
  }
`;

const ContainerText = styled.div`
  margin-right: 100px;
  @media (max-width: 540px) {
    margin-right: 0px;
  }
`;

const TypographyPrice = styled.p`
  font-size: 30px;
  font-weight: bold;
  margin-top: 0;
`;

const TypographyName = styled.p`
  font-size: 22px;
  font-weight: bold;
  margin: 0;
  & span {
    color: grey;
  }
`;

const ButtonAddCart = styled.button`
  background-color: transparent;
  border: 1px solid grey;
  border-radius: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 45px;
  padding-right: 45px;
  font-size: 22px;
  font-weight: bold;
  margin-top: 25px;
  @media (max-width: 540px) {
    position: relative;
    left: 300px;
    bottom: 75px;
  }
`;

const ContainerColor = styled.div`
  grid-column: 1/4;
  @media (max-width: 540px) {
    position: relative;
    bottom: 65px;
  }
`;

const TypographyColors = styled.h5`
  margin: 0;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const GridImage = styled.div`
  grid-column: 1/4;
  & img {
    cursor: pointer;
    height: 150px;
    width: 200px;
    margin-right: 25px;
  }
  margin-bottom: 100px;
  @media (max-width: 540px) {
    margin-bottom: 25px;
    & img {
      height: 100px;
      width: 150px;
      margin-right: 20px;
    }
  }
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
    <Grid>
      <>
        <NavBar />
        <Container>
          {variant ? (
            <>
              <ContainerTitle>
                <TypographyTitle>{variant.name}</TypographyTitle>
              </ContainerTitle>
              <ContainerMedia>
                <CardMedia
                  src={`https://picsum.photos/1000/600?random=${variant.UPC}`}
                />
              </ContainerMedia>
              <ContainerText>
                <Typography>{variant.name}</Typography>
                <TypographyPrice>
                  {variant.price.current.value} USD
                </TypographyPrice>
                <TypographyName>
                  <span>Name:</span> {variant.name}
                </TypographyName>
                <TypographyName>
                  <span>Lens color:</span> Green
                </TypographyName>
                <TypographyName>
                  <span>Size:</span> Standard
                </TypographyName>
                <TypographyName>
                  <span>UPC:</span> {variant.UPC}
                </TypographyName>
                <ButtonAddCart>Add to cart</ButtonAddCart>
              </ContainerText>
              <ContainerColor>
                <TypographyColors>Available colors:</TypographyColors>
                <GridImage>
                  <img
                    alt={`Product${product.UPC}`}
                    src={`https://picsum.photos/1000/600?random=${product.UPC}`}
                    onClick={() => setVariant(product)}
                  />
                  {product.variants.map((prod, index) => (
                    <img
                      key={index}
                      alt={`Product${prod.UPC}`}
                      src={`https://picsum.photos/1000/600?random=${prod.UPC}`}
                      onClick={() => setVariant(prod)}
                    />
                  ))}
                </GridImage>
              </ContainerColor>
            </>
          ) : null}
        </Container>
      </>
      <Footer />
    </Grid>
  );
};

export default CardPdp;
