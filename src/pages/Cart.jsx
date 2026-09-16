import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
} from "lucide-react";
import { useCart } from "../hooks/useCart";

export default function Cart() {
  const {
    cart,
    updateQty,
    remove,
    total,
  } = useCart();

  const delivery = cart.length > 0 ? 40 : 0;
  const grandTotal = total + delivery;

  return (
    <main className="page cart-page">

      <section className="cart-header">
        <div className="container">

          <span className="eyebrow">
            ORDER / YOUR BAG
          </span>

          <h1 className="display">
            Your
            <br />
            <i>order.</i>
          </h1>

        </div>
      </section>

      <section className="cart-section">
        <div className="container">

          {cart.length === 0 ? (
            <div className="empty-cart">

              <div className="empty-icon">
                <ShoppingBag size={32} />
              </div>

              <span className="eyebrow">
                CART IS EMPTY
              </span>

              <h2 className="display">
                Nothing here
                <br />
                <i>yet.</i>
              </h2>

              <p>
                Your next craving is waiting.
              </p>

              <Link
                to="/chicken"
                className="btn btn-dark"
              >
                Explore Menu
              </Link>

            </div>
          ) : (
            <div className="cart-layout">

              <div className="cart-items">

                {cart.map((item) => (
                  <article
                    className="cart-item"
                    key={item.id}
                  >
                    <div className="cart-item-image">
                      <img
                        src={item.image}
                        alt={item.name}
                      />
                    </div>

                    <div className="cart-item-info">
                      <small>{item.tag}</small>

                      <h3>{item.name}</h3>

                      <strong>
                        ₹{item.price}
                      </strong>
                    </div>

                    <div className="quantity-box">

                      <button
                        onClick={() =>
                          updateQty(
                            item.id,
                            item.qty - 1
                          )
                        }
                      >
                        <Minus size={14} />
                      </button>

                      <span>{item.qty}</span>

                      <button
                        onClick={() =>
                          updateQty(
                            item.id,
                            item.qty + 1
                          )
                        }
                      >
                        <Plus size={14} />
                      </button>

                    </div>

                    <button
                      className="remove-btn"
                      onClick={() =>
                        remove(item.id)
                      }
                    >
                      <Trash2 size={17} />
                    </button>

                  </article>
                ))}

                <Link
                  to="/chicken"
                  className="continue-link"
                >
                  <ArrowLeft size={16} />
                  CONTINUE SHOPPING
                </Link>

              </div>

              <aside className="order-summary">

                <span className="eyebrow">
                  ORDER SUMMARY
                </span>

                <h2 className="display">
                  Total
                </h2>

                <div className="summary-row">
                  <span>Subtotal</span>
                  <strong>₹{total}</strong>
                </div>

                <div className="summary-row">
                  <span>Delivery</span>
                  <strong>₹{delivery}</strong>
                </div>

                <div className="summary-line" />

                <div className="summary-total">
                  <span>Total</span>
                  <strong>₹{grandTotal}</strong>
                </div>

                <a
                  href={`https://wa.me/91${"637997426"}?text=${encodeURIComponent(
                    `Hello FIRECUT, I want to place an order. Total: ₹${grandTotal}`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-orange full"
                >
                  Order on WhatsApp
                </a>

                <p className="order-note">
                  We'll confirm your order and delivery
                  details through WhatsApp.
                </p>

              </aside>

            </div>
          )}

        </div>
      </section>

    </main>
  );
}