import Lottie from "lottie-react";
import { Link } from "react-router-dom";

import notFoundImg from "../../assets/images/not-found.json";

import { Container, Content, Title, Subtitle } from "./styles";

export const NotFoundPage = () => {
  return (
    <>
      <Container>
        <Content>
          <div className="image">
            <Lottie animationData={notFoundImg} />
          </div>
          <div className="text">
            <Title>Página não encontrada</Title>
            <Subtitle>A página que você está procurando não existe</Subtitle>
            <Link to="/">Clique aqui para voltar para página inicial</Link>
          </div>
        </Content>
      </Container>
    </>
  );
}
