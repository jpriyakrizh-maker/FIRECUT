import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CategoryCard({ item }) {
  return (
    <Link
      to={item.path}
      className="category-card"
    >
      <img
        src={item.image}
        alt={item.name}
      />

      <div className="category-shade" />

      <span className="category-number">
        {item.no}
      </span>

      <div className="category-content">
        <small>{item.label}</small>

        <h3>{item.name}</h3>
      </div>

      <span className="category-arrow">
        <ArrowUpRight size={21} />
      </span>
    </Link>
  );
}