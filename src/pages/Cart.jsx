import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cartItems, removeFromCart, totalPrice } = useCart();

  const handleRemoveItem = (id) => {
    removeFromCart(id);
  };

  const handleFinalizePurchase = () => {
    alert("Compra finalizada com sucesso!");
    // Aqui tem a possibilidade de limpar o carrinho ou redirecionar para outra página
    // Para limpar, basta criar um método no contexto e chamá-lo aqui.
  };

  return (
    <div className="container">
      <h2>Meu Carrinho</h2>
      <div className="cart-container">
        {cartItems.length === 0 ? (
          <p>O carrinho está vazio.</p>
        ) : (
          <>
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img src={item.image} alt={item.title} />
                  <div>
                    <p>{item.title}</p>
                    <p>R$ {item.price.toFixed(2)}</p>
                  </div>
                </div>
                <button onClick={() => handleRemoveItem(item.id)}>Remover</button>
              </div>
            ))}
            <div className="cart-summary">
              <p>Total: R$ {totalPrice.toFixed(2)}</p>
            </div>
          </>
        )}

        <div style={{ marginTop: "2rem" }}>
          {/* Botão "Finalizar Compra" */}
          <button
            onClick={handleFinalizePurchase}
            style={{ marginRight: "1rem" }}
          >
            Finalizar Compra
          </button>

          {/* Botão "Continuar Comprando" -> Volta para Home */}
          <Link to="/">
            <button>Continuar Comprando</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
