import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background: #007A7C;

  @media only screen and (max-width: 1024px) {
    height: 100%;
    padding: 0 24px;
  }
`;

export const FooterContent = styled.div`
  height: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: 40px;
  padding-bottom: 40px;

  @media only screen and (max-width: 480px) {
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    margin: auto;
  }
  /* @media only screen and (max-width: 1024) {
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
  } */
  
`;

export const FooterRight = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;

  h3 {
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 120%;

    letter-spacing: 0.05em;
    text-transform: uppercase;

    color: #FFFFFF;
  }

  a {
    text-decoration: none;
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 125%;
    letter-spacing: 0.005em;

    color: #CED0DD;
    margin-top: 0.875rem;

    &:hover {
      color: #cccccc;
    }
  }

  @media only screen and (max-width: 768px) {
    width: 60%;
    margin: 0;
  }

  @media only screen and (max-width: 480px) {
    width: 100%;
    margin-bottom: 32px;
  }
`;

export const FooterBoxs = styled.div`
  justify-content: space-between;
  width: 80%;
  display: flex;
  gap: 20px;

  @media only screen and (max-width: 480px) {
    width: 100%;
    flex-direction: column;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const Boxs = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    margin-bottom: 30px;
  }

  @media only screen and (max-width: 480px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const FooterBoxContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  h3 {
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 120%;

    letter-spacing: 0.05em;
    text-transform: uppercase;

    color: #FFFFFF;
  }

  a {
    text-decoration: none;
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 125%;
    letter-spacing: 0.005em;

    color: #CED0DD;
    margin-top: 0.875rem;

    &:hover {
      color: #cccccc;
    }
  }

  @media only screen and (max-width: 768px) {
    margin: 0;
    margin-bottom: 32px;
  }

  @media only screen and (max-width: 480px) {
    margin-bottom: 32px;
  }
`;

export const FooterCopyRightContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 30px;

  >a{
    text-decoration: none;
    color: #FFFFFF;

    >h2{
      margin: 0;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 900;
      font-size: 24px;
      line-height: 28px;
      text-transform: uppercase;
    }
  }

  >p{
    margin: 0;
    color: #CED0DD;
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 125%;
    text-align: right;
    letter-spacing: 0.005em;
  }

  @media only screen and (max-width: 480px) {
    width: 100%;
    flex-direction: column;
    padding-bottom: 30px;

    a{
      margin-bottom: 16px;
    }
  }
`;
