import { useContext } from "react";
import CartContext from "../../context/CartContext";

import {
  Container,
  ImageInfo,
  CardeImage,
  NamePrice,
  Description,
} from "./styles";

interface Props {
  id: string;
  image: string;
  name: string;
  price: number;
  ator: string;
}

export const Card = ({ image, name, price, ator, id }: Props) => {
  const { productAlreadyAdded, addCart } = useContext(CartContext);

  return (
    <Container>
      <div>
        <ImageInfo>
          <CardeImage>
            <img loading="lazy" src={image} alt="" />
          </CardeImage>
        </ImageInfo>
        <Description>
          <h3>{name}</h3>
          <NamePrice>
            <span>R$ {price}</span>
          </NamePrice>
          <p>{ator}</p>
          <div>
            <button
              style={productAlreadyAdded(id) ? { opacity: 0.1 } : {}}
              disabled={productAlreadyAdded(id)}
              onClick={() =>
                addCart({
                  ator: ator,
                  id: id,
                  name: name,
                  price: price,
                  image: image,
                  quantity: 1,
                })
              }
            >
              {productAlreadyAdded(id) ? (
                <span>No carrinho</span>
              ) : (
                <span>Add No carrinho</span>
              )}
            </button>
          </div>
        </Description>
      </div>
    </Container>
  );
};
