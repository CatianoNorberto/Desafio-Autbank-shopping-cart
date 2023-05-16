import { Link } from "react-router-dom";

import {
  Boxs,
  FooterContainer,
  FooterBoxs,
  FooterRight,
  FooterContent,
  FooterBoxContent,
  FooterCopyRightContent,
} from "./styles";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent className="container">
        <FooterRight>
          <h3>A Books</h3>
          <Link to="#">Sobre</Link>
        </FooterRight>
        <FooterBoxs>
          <Boxs>
            <FooterBoxContent>
              <h3>Products</h3>
              <Link to="#">Disponíveis</Link>
            </FooterBoxContent>
            <FooterBoxContent>
              <h3>Mídia</h3>
              <Link
                to={{
                  // pathname: "#",
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </Link>
              <Link
                to={{
                  // pathname: "#",
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </Link>
            </FooterBoxContent>
          </Boxs>
          <Boxs>
            <FooterBoxContent>
              <h3>Parceiros</h3>
              <Link to="#">Parceiros</Link>
              <Link to="#">Seja um parceiro</Link>
            </FooterBoxContent>
            <FooterBoxContent>
              <h3>Contato</h3>
              <Link to="#">contato@Books.com.br</Link>
              <Link
                to={{
                  // pathname: "#",
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                (+55) 11 912457937
              </Link>
            </FooterBoxContent>
          </Boxs>
        </FooterBoxs>
      </FooterContent>

      <FooterCopyRightContent className="container">
        <Link to="/">
          <h2>Books</h2>
        </Link>
        <p>
          Todos direitos reservados. 2023
        </p>
      </FooterCopyRightContent>
    </FooterContainer>
  );
}
