import {
  ShoppingBag,
  Menu,
  X,
} from "lucide-react";

import {
  Link,
  useLocation,
} from "react-router-dom";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const links = [
    ["Home", "/"],
    ["Chicken", "/chicken"],
    ["Mutton", "/mutton"],
    ["Seafood", "/seafood"],
    ["Biryani", "/biryani"],
    ["Combos", "/combos"],
  ];

  return (
    <header className="navbar">
      <Link
        to="/"
        className="brand"
        onClick={() => setOpen(false)}
      >
        FIRE<span>CUT</span>
      </Link>

      <nav className={`nav-links ${open ? "open" : ""}`}>
        {links.map(([name, path]) => (
          <Link
            key={path}
            to={path}
            className={
              location.pathname === path
                ? "active"
                : ""
            }
            onClick={() => setOpen(false)}
          >
            {name}
          </Link>
        ))}
      </nav>

      <div className="nav-actions">
        <Link to="/cart" className="cart-link">
          <ShoppingBag size={18} />
          <span>Cart</span>
        </Link>

        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <X size={20} />
          ) : (
            <Menu size={20} />
          )}
        </button>
      </div>
    </header>
  );
}