import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { FaReply, FaCheckCircle } from "react-icons/fa";
import { AiOutlineDelete, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import CartContext from "../../context/CartContext";

import { Header } from "../../components/Header";
import { NewModal } from "../../components/NewModal";

import {
  Container,
  Contents,
  CartItems,
  CartHeader,
  Cartimg,
  CartItemContents,
  ClearCart,
  CartDescription,
  CartQuantity,
  CartConfimation,
  CartSection,
  CartPrice,
  CartQtPrice,
  CartTotal,
  LinksContainer,
  ModalContainer
} from "./styles";

export const Cart = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  
  const toggleModal = () => {
    setIsOpenModal(!isOpenModal)
  }
  const navigate = useNavigate();

  const handleGoToHome = () => {
    navigate("/");
  };


  const {
    products,
    removeProduct,
    handleIncrease,
    handleDecrease,
    total,
    discount,
  } = useContext(CartContext);

  return (
    <Container>
      <NewModal 
        isOpen={isOpenModal}
        onClose={toggleModal}
      >
        <ModalContainer>
          <FaCheckCircle size={100} color="#28A745" />
          <strong>Seu pedido foi confirmado com sucesso</strong>
          <p>
            Enviamos um email de confirmação de conta, por favor confirme
            seu email para acompanhar o seu pedido na plataforma.
          </p>
        </ModalContainer>
      </NewModal>

      <Header />
      <Contents>
        <CartSection>
          <h2>Meu Carrinho</h2>
          <CartHeader>
            <h3>Produto</h3>
            <h3>Quantidade</h3>
            <h3 className="cart-price">Total</h3>
          </CartHeader>
          {products.map((product) => (
            <CartItemContents key={product.id}>
              <ClearCart>
                <button onClick={() => removeProduct(product.id)}>
                  <AiOutlineDelete size={24} color="#94001E" />
                </button>
              </ClearCart>
              <CartItems>
                <Cartimg>
                  <a href="">
                    <img src={product.image} alt="" />
                  </a>
                  <CartDescription>
                    <a href="">
                      <h3>{product.name}</h3>
                    </a>
                    <p>{product.ator}</p>
                  </CartDescription>
                </Cartimg>
                <CartQtPrice>
                  <CartQuantity>
                    <button onClick={() => handleDecrease(product.id)}>
                      <AiOutlineMinus size={18} color="#005859" />
                    </button>
                    <div>{product.quantity ?? 1}</div>
                    <button onClick={() => handleIncrease(product.id)}>
                      <AiOutlinePlus size={18} color="#005859" />
                    </button>
                  </CartQuantity>
                  <CartPrice>R$ {(product.price * product.quantity).toFixed(2)}</CartPrice>
                </CartQtPrice>
              </CartItems>
            </CartItemContents>
          ))}
        </CartSection>
        <CartConfimation>
          <div>
            <h2>Resumo do Pedido</h2>
          </div>
          <ul>
            {products.map((product) => (
              <li>
                <label htmlFor="">{product.name}</label>
                <span>R$ {product.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <CartTotal>
            Total
            <span>R$ {total.toFixed(2)}</span>
          </CartTotal>
          <p>Recebeu desconto de R$ {discount.toFixed(2)}</p>
          <button onClick={toggleModal}>
            Confirmar
          </button>
          <LinksContainer>
            <p onClick={handleGoToHome}>
              <FaReply />
              Adicionar mais produtos
            </p>
          </LinksContainer>
        </CartConfimation>
      </Contents>
    </Container>
  );
};
