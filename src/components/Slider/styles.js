import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 8px;
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
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
export const Content = styled.div`
  width: 100%;
  height: 100%;
`