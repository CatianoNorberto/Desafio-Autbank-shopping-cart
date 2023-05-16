import { Routes, Route } from "react-router-dom";

import { Products} from '../pages/Products'
import { Cart } from '../pages/Cart'
import { NotFoundPage } from '../pages/NotFoundPage'


export const Rotas = () =>{
  return(
    <Routes>
      <Route path='/' element= {<Products/>}/>
      <Route path='/cart' element= {<Cart/>}/>
      <Route path='/*' element= {<NotFoundPage/>}/>
    </Routes>
  )
}