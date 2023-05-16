import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
`
export const Contents = styled.div`
  max-width: 64rem;
  width: 100%;
  margin: auto;
  display: grid;
  column-gap: 2rem;
  grid-template-columns: 1fr min-content;
  grid-template-rows: repeat(5, min-content);
  gap: 24px;
  margin-top: 100px;

  @media (max-width: 768px) {
    padding: 0 24px;
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    padding: 0 24px;
  }
`

export const CartSection = styled.section`
  grid-column: 1 / auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2{
    color: rgb(74, 74, 74);
    font-size: 1.5rem;
    margin-bottom: 40px;
    font-weight: 700;
  }
`

export const CartHeader = styled.div`
  display: grid;
  padding: 1rem 0.5rem;
  border-bottom: 1px solid rgb(233, 233, 233);
  grid-template-columns: 3fr 1fr 1fr;
  column-gap: 0.5rem;

  h3{
    font-size: 14px;
    font-weight: 400;
    text-transform: uppercase;
  }

  .cart-price{
    justify-self: right;
  }
`
export const CartItemContents = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1rem;
  border: 1px solid rgb(233, 233, 233);
  border-radius: 1rem;
`
export const ClearCart = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;

  button{
    border: none;
    background: transparent;
  }
` 
export const CartItems = styled.div`
  display: grid;
  place-items: center start;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
`
export const CartQtPrice = styled.div`
  width: 100%;
  column-gap: 20px;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
`
export const Cartimg = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;

  a{
    text-decoration: none;
    
    img{
      height: 100%;
      width: 100px;

      @media (max-width: 480px) {
        height: 74px;
        width: 70px;
      }
      @media (max-width: 768px) {
        height: 74px;
        width: 70px;
      }
    }
  }
`
export const CartDescription = styled.div`
  display: flex;
  flex-direction: column;

  a{
    text-decoration: none;

    h3{
      display: inline-block;
      font-weight: 700;
      font-size: 14px;
      color: rgb(102, 102, 102);

      &:hover{
        text-decoration: underline;
      }
    }
  }

  p{
    margin-top: 0.5rem;
  }
 `
export const CartQuantity = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  border: 2px solid rgb(227, 227, 227);
  border-radius: 0.25rem;
  padding: 0px 8px;
  align-items: center;
  opacity: 1;

  button{
    width: 100%;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
  }

  div{
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  @media (max-width: 480px) {
    width: 50%;
    margin-left: 78px;
  }
  @media (max-width: 768px) {
    width: 50%;
    margin-left: 78px;
  }
 `
export const CartPrice = styled.div`
  justify-self: right;
  font-weight: 700;
`
export const CartConfimation = styled.div`
  gap: 12px;
  width: 100%;
  min-width: 330px;
  padding: 1.5rem 1rem;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgb(248, 248, 248);
  align-self: self-start;
  border-radius: 0.5rem;

  h2{
    display: flex;
    color: #5D5D5D;
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  ul{
    list-style: none;
    display: block;

    li{
      color: rgb(102, 102, 102);
      margin: 12px 0px;
      padding-bottom: 4px;
      font-size: 15px;
      line-height: 1.5;
      display: flex;
      align-items: center;
      justify-content: space-around;
      border-bottom: 0.5px solid rgb(204, 204, 204);

      label{
        display: inline-flex;
        flex: 2 1 0%;
      }

      span{
        display: inline-flex;
        flex: 1 1 0%;
        justify-content: flex-end;
        white-space: nowrap;
      }
    }
  }

  button{
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #fff;
    margin-top: 1rem;
    width: 100%;
    border: 2px solid #40cd28;
    color: #fff;
    background: #40cd28;
    padding: 0.5rem 1.5rem;
    text-transform: uppercase;
    transition: all .2s ease-in-out;
    font-size: 18px;
    font-weight: bold;
    border-radius: 0.5rem;
    cursor: pointer;
    outline: 0;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 6px;
  }

  >p{
    font-size: 12px;
    color: rgb(102, 102, 102);
    text-align: right;
  }
`   
export const CartTotal = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 10px 0px 15px;
  padding-top: 6px;
  color: rgb(51, 51, 51);
  /* border-top: 1px solid rgb(204, 204, 204); */
  font-weight: bold;
  font-size: 18px;
`
export const LinksContainer = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    cursor: pointer;
    color: #007A7C;
    transition: all 0.3s ease-out;
    font-size: 1rem;

    svg {
      margin-right: 1rem;
    }

    &:hover {
      color: #005859;
    }
  }
`