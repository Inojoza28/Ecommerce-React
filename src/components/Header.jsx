import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";

function Header() {
    const { totalItems, totalPrice } = useCart();

    return (
        <header className="header">
            <div className="header-left">
                {/* Envolvendo a logo com Link para redirecionar à página principal */}
                <Link to="/">
                    <img
                        src="src/imgs/Logo.png"
                        alt="Logo"
                        className="logo"
                    />
                </Link>
            </div>

            <div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <Link to="/cart" className="cart-icon">
                        <FaShoppingCart
                            style={{
                                fontSize: "1.5rem",
                                color: "#fac055",
                                transition: "transform 0.2s ease-in-out",
                            }}
                        />
                        {totalItems > 0 && (
                            <span className="cart-count">{totalItems}</span>
                        )}
                    </Link>
                    <Link
                        to="/cart"
                        style={{
                            color: "#FFF",
                            textDecoration: "none",
                            fontSize: "1rem",
                        }}
                    >
                        Total: R$ {totalPrice.toFixed(2)}
                    </Link>
                </div>

            </div>
        </header>
    );
}

export default Header;
