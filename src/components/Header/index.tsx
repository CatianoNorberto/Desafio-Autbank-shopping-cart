import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai'

import CartContext from '../../context/CartContext';

import {
  Container,
  Contents,
  ShoppingCart, 
} from './styles'

export const Header = () => {
  const { products } = useContext(CartContext)

  return (
    <Container>
      <Contents className='container'>
        <Link to='/'>
          <h2>BOOKS</h2>
        </Link>
        <ShoppingCart>
          <Link to='/cart'>
            <AiOutlineShoppingCart size={30} color='#fff'/>
            <span>{products.length ?? 0}</span>
          </Link>
        </ShoppingCart>
      </Contents>
    </Container>
  )
}
