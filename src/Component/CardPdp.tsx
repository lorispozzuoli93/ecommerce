import * as React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Products } from "../Data/Data";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 10px;
  column-gap: 20px;
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 20px;
`;

const ContainerTitle = styled.div`
  grid-column: 1/4;
`;

const Typography = styled.h5`
  margin: 0px;
  font-size: 40px;
  font-weight: bold;
`;

const ContainerMedia = styled.div`
  grid-column: 1/2;
`;

const CardMedia = styled.img`

`;

const ContainerText = styled.div`
  margin-right: 100px;
`;

const TypographyPrice = styled.p`
  font-size: 35px;
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
`;

const ContainerColor = styled.div`
  grid-column: 1/4;
`;

const TypographyColors = styled.h5`
  margin: 0;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const GridImage = styled.div`
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
  // const variant = useSelector(variantsSelector);
  // const dispatch = useDispatch();
  return (
    <Container>
      {variant ? (
        <>
          <ContainerTitle>
            <Typography>{variant.name}</Typography>
          </ContainerTitle>
          <ContainerMedia>
            <CardMedia src="https://via.placeholder.com/1000x600" />
          </ContainerMedia>
          <ContainerText>
            <Typography>{variant.name}</Typography>
            <TypographyPrice>{variant.price.current.value} USD</TypographyPrice>
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
            </GridImage>
          </ContainerColor>
        </>
      ) : null}
    </Container>
  );
};

export default CardPdp;
