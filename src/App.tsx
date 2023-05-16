import { BrowserRouter } from "react-router-dom"
import { Rotas } from './routes'
import  { CartProvider } from './context/CartContext'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Rotas/>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
