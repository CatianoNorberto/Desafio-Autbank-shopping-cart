import { createContext, ReactNode, useEffect, useState } from "react";

interface Book {
  id: string;
  name: string;
  price: number;
  image: string;
  ator: string;
  quantity: number;
}

interface Cart {
  products: Book[];
  total: number;
  discount: number;
  addCart: (data: Book) => void;
  productAlreadyAdded: (id: string) => boolean;
  removeProduct: (id: string) => void;
  handleIncrease(id: string): void;
  handleDecrease(id: string): void;
}

interface Props {
  children?: ReactNode;
}

const CartContext = createContext<Cart>({} as Cart);

export const CartProvider = ({ children }: Props) => {
  const [products, setProducts] = useState<Book[]>([]);
  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    const tot = products.reduce((acc, product) => {
      return acc + product.price * product.quantity;
    }, 0);

    setTotal(tot)

    if (products.length === 2) {
      setTotal(tot - tot * 0.05);
    }

    if (products.length === 3) {
      setTotal(tot - tot * 0.1);
    }

    if (products.length === 4) {
      setTotal(tot - tot * 0.2);
    }

    if (products.length >= 5) {
      setTotal(tot - tot * 0.25);
    }

    setDiscount(tot - total)
  }, [products, total]);

  function addCart(data: Book) {
    setProducts([...products, data]);
  }

  function productAlreadyAdded(id: string) {
    return products.some((book) => book.id === id);
  }

  function removeProduct(id: string) {
    const filteredProducts = products.filter((book) => book.id !== id);
    setProducts(filteredProducts);
  }

  // function removeAllProducts() {
  //   const filteredAllPrducts = products.find((book) => book);
  //   setProducts(filteredAllPrducts);
  // }

  function handleIncrease(id: string) {
    // refazer esse method
    const productUpdated = products.map((book) => {
      if (book.id === id) {
        return { ...book, quantity: book.quantity + 1 };
      }else{
        return book;
      }
    });

    setProducts(productUpdated);
  }

  function handleDecrease(id: string) {
    const productUpdated = products.map((book) => {
      if (book.id === id) {
        return { ...book, quantity: book.quantity - 1 };
      }else{
        return book;
      }
    });

    setProducts(productUpdated);
  }

  return (
    <CartContext.Provider
      value={{
        products,
        addCart,
        total,
        discount,
        productAlreadyAdded,
        removeProduct,
        handleIncrease,
        handleDecrease,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
