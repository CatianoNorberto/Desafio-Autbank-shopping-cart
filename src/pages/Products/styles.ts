import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin-top: 82px;

  @media only screen and (max-width: 768px) {
    height: 100%;
  }

  @media only screen and (max-width: 1024px) {
    height: 100%;
  }
`
export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-bottom: 80px;
`
export const ProdutoInfo = styled.div`
  display: flex;
  flex-direction: column;

  h2{
    margin-bottom: 16px;
    justify-content: flex-start;
    font-size: 1.5625rem;
    text-align: left;

    @media only screen and (max-width: 375px) {
      text-align: center;
    }
    @media only screen and (max-width: 425px) {
      text-align: center;
    }
    @media only screen and (max-width: 768px) {
      text-align: center;
    }
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
export const ProdutosList = styled.div`
  gap: 20px;
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
`