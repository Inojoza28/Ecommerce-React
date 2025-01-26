import { createContext, useState, useContext } from "react";

// 1. Criação do contexto
const CartContext = createContext();

// 2. Hook customizado (opcional) para facilitar o uso do contexto
export const useCart = () => {
  return useContext(CartContext);
};

// 3. Provider que encapsula toda a lógica
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Adiciona item ao carrinho
  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  // Remove item do carrinho (pelo ID)
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Calcula a quantidade total de itens
  const totalItems = cartItems.length;

  // Calcula o valor total
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        totalItems,
        totalPrice
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
