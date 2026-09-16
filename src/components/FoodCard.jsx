import { Plus } from "lucide-react";

export default function FoodCard({
  item,
  onAdd,
}) {
  return (
    <article className="food-card">
      <div className="food-image">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
        />
      </div>

      <div className="food-info">
        <small>{item.tag}</small>

        <h3>{item.name}</h3>

        <p>{item.description}</p>

        <div className="food-bottom">
          <strong>₹{item.price}</strong>

          <button
            className="add-btn"
            onClick={() => onAdd(item)}
          >
            <Plus size={19} />
          </button>
        </div>
      </div>
    </article>
  );
}