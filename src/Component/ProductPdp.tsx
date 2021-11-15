import * as React from "react";
import styled from "styled-components";
import { Products } from "../Data/Data";
import { images } from "../Data/Images";
import AwesomeSlider from "react-awesome-slider";

const Typography = styled.h5`
  margin: 0px;
  padding-top: 12px;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.334;
  letter-spacing: 0em;
`;

const Container = styled.div`
  /* display: grid;
  grid-template-columns: 50% 50%; */
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

const ButtonAddCart = styled.button`
  background-color: transparent;
  border: 1px solid black;
  border-radius: 4px;
`;

const ContainerColor = styled.div`
  grid-column: 1/4;
`;

type Props = {
  product: Products;
};

const ProductPdp: React.FC<Props> = ({ product }) => {
  return (
    <Container>
      <ContainerTitle>
        <Typography>{product.name}</Typography>
      </ContainerTitle>
      <ContainerMedia>
        <CardMedia src="https://via.placeholder.com/350" />
      </ContainerMedia>
      <ContainerText>
        <Typography>{product.name}</Typography>
        <TypographyPrice>{product.price.current.value} USD</TypographyPrice>
        <TypographyName>Name: {product.name}</TypographyName>
        <TypographyUpc>UPC: {product.UPC}</TypographyUpc>
        <TypographyStock>
          Availability:{" "}
          {product.availability.stock > 0 ? (
            <Chip> in stock </Chip>
          ) : (
            <Chip> out of stock </Chip>
          )}
        </TypographyStock>
        <ButtonAddCart>Add to cart</ButtonAddCart>
      </ContainerText>
      <ContainerColor>
        <AwesomeSlider>
          <div data-src="/path/to/image.png" />
          <div data-src="/path/to/image.png" />
          <div data-src="/path/to/image.jpg" />
        </AwesomeSlider>
      </ContainerColor>
    </Container>
  );
};

export default ProductPdp;

// {
//   images.map(({ url, title }, index) => (
//     <img src={url} key={index} alt={title} />
//   ));
// }
