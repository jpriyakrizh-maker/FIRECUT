import { motion } from "framer-motion";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import FoodCard from "../components/FoodCard";
import { products } from "../data/products";
import { useCart } from "../hooks/useCart";

export default function PageProducts({
  category,
  title,
  subtitle,
  number,
}) {
  const { addToCart } = useCart();
  const items = products[category] || [];

  return (
    <main className="page product-page">
      <section className="product-hero">
        <div className="blueprint-lines" />

        <div className="container product-hero-inner">
          <motion.div
            className="product-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link to="/" className="back-link">
              <ArrowLeft size={15} />
              BACK TO HOME
            </Link>

            <span className="eyebrow">
              MENU / {number}
            </span>

            <h1 className="display">{title}</h1>

            <p>{subtitle}</p>
          </motion.div>

          <div className="product-index">
            <span>FIRECUT</span>
            <strong>{number}</strong>
          </div>
        </div>
      </section>

      <section className="section menu-section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">
                <ShoppingBag size={13} />
                FRESH FROM THE KITCHEN
              </span>
              <h2 className="display">Pick your plate.</h2>
            </div>

            <p>
              Every dish is prepared with bold seasoning,
              fresh ingredients and a Firecut-style finish.
            </p>
          </div>

          <div className="food-grid">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <FoodCard item={item} onAdd={addToCart} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}