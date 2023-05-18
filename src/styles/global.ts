import  { createGlobalStyle }  from "styled-components";

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

  .react-modal-overlay, .react-big-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    height: 365px;
    max-width: 517.15px;
    background: #FFFFFF;
    padding: 1.85rem;
    position: relative;
    border-radius: 0rem;
    outline: none !important;

    @media only screen and (max-width: 480px){
      width: 90%;
    }
  }

  .react-big-modal-content {
    width: 100%;
    max-width: 576px;
    background: #f5f5f5;
    padding: 2rem;
    position: relative;
    border-radius: 0.5rem;
    outline: none !important;
  }

  .react-modal-close {
    position: absolute;
    right: 1rem;
    top: 1rem;
    border: 0;
    background: transparent;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
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
