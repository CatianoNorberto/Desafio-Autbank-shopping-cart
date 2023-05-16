import { Card } from '../../components/Card'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

import Slider from '../../components/Slider'

import {products} from '../../data/produtos'

import { 
  Container, 
  ProdutoInfo,
  Contents,
  ProdutosList
} from './styles'

export const Products = () => {
  return (
    <Container>
      <Header/>
      <Slider/>
      <Contents>
        <ProdutoInfo className='container'>
          <h2>Lista de Products</h2>
          <ProdutosList>
            {products.map(item => <Card key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
              ator={item.ator}
            />)}
          </ProdutosList>
        </ProdutoInfo>
      </Contents>
      <Footer/>
    </Container>
  )
}
