import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  /* width: 12.5rem; */
  padding: 16px;
  transition: 0.3s;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 5px 20px rgba(0, 0, 0, .3);

  &:hover{
    transform: translateY(-10px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
  }

  >div{
    height: 100%;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-decoration: none;
    color: #000000;
  }

  p{
    font-size: 14px;
    line-height: 25px;
  }

  button{
    width: 100%;
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

export const ImageInfo = styled.div`
  margin-bottom: 16px;
  background: rgb(250, 250, 250);
  height: 148px;
`
export const CardeImage = styled.div`
  height: 100%;
  margin: 0px auto;
  max-width: 180px;
  padding: 0 16px;
  width: calc(100% - 32px);

  img{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    object-fit: contain;
  }
`

export const Description = styled.div`
  height: 100%;
  min-height: 152px;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: space-between;

  h3{
    margin-bottom: 1rem;
    font-size: 0.8125rem;
    font-weight: 600;
    color: #000;
  }

  p{
    font-size: 0.75rem;
    margin-bottom: 2px;
    display: block;
  }

  button{
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #007A7C;
    margin-top: 1rem;
    width: 100%;
    border: 1px solid #007A7C;
    padding: 0.5rem;
    text-transform: uppercase;
    transition: all .2s ease-in-out;
    font-size: 0.875rem;
    font-weight: bold;
    border-radius: 0.25rem;
    cursor: pointer;
    outline: 0;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 6px;

    &:hover{
      background: #007A7C;
      color: #fff;
    }
  }
`

export const NamePrice = styled.div`
  width: 100%;
  span{
    font-size: 1rem;
    font-weight: 700;
  }
`
