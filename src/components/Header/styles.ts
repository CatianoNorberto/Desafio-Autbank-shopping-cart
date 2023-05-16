import styled from 'styled-components'
// import { responsive } from '../../styles/responsive'

export const Container = styled.header`
  width: 100%;
  height: 70px;
  background-color: #007A7C;
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  z-index: 90;

  h2{
    color: #fff;
    font-size: 22px;
    font-weight: 700;
    line-height: 125%;
  }

  @media only screen and (max-width: 375px) {
    width: 100%;
    padding: 0 24px;
  }
  @media only screen and (max-width: 425px) {
    width: 100%;
    padding: 0 24px;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 0 24px;
  }
  @media only screen and (max-width: 1024px) {
    width: 100%;
    padding: 0 24px;
  }
`
export const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a{
    text-decoration: none;
  }

  @media only screen and (max-width: 375px) {
    width: 100%;
    
  }
  @media only screen and (max-width: 425px) {
    width: 100%;
    
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    
  }
  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`
export const ShoppingCart = styled.div`
  position: relative;

  span{
    width: 22px;
    height: 22px;
    position: absolute;
    top: -10px;
    right: -10px;
    border-radius: 50%;
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    background: #94001E;
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    transition: all 0.3s ease-out;
  }
`