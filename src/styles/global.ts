import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background: #ffffff;
    font-family: Arial, Helvetica, sans-serif;
  }

  body, input, button, textarea {
    font: 500 1rem 'Roboto', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    font-family: 'Roboto', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
    font-family: 'Inter', sans-serif;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  strong {
    font-weight: 500;
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
    transition: filter 0.2s;
    font-family: 'Mulish', sans-serif;

    &:hover {
      filter: brightness(0.9);
    }
  }

  img {
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .container{
    width: 64rem;
    max-width: 100%;
    height: 100%;
    margin: auto;
  }

  span.swiper-pagination-bullet.swiper-pagination-bullet-active {
    background-color: #000;
    opacity: 1;
  }

  span.swiper-pagination-bullet {
    background-color: #fff;
    opacity: 1;
    
  }

  .swiper-pagination-bullet{
    width: 10px;
    height: 10px;
  }
`;
