import {
  useEffect,
  useState,
} from "react";

const CART_KEY = "firecut-cart";

export function useCart() {
  const [cart, setCart] = useState(() => {
    try {
      return (
        JSON.parse(
          localStorage.getItem(CART_KEY)
        ) || []
      );
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(
      CART_KEY,
      JSON.stringify(cart)
    );
  }, [cart]);

  const addToCart = (item) => {
    setCart((previous) => {
      const exists = previous.find(
        (product) => product.id === item.id
      );

      if (exists) {
        return previous.map((product) =>
          product.id === item.id
            ? {
                ...product,
                qty: product.qty + 1,
              }
            : product
        );
      }

      return [
        ...previous,
        {
          ...item,
          qty: 1,
        },
      ];
    });
  };

  const updateQty = (id, qty) => {
    setCart((previous) =>
      qty <= 0
        ? previous.filter(
            (item) => item.id !== id
          )
        : previous.map((item) =>
            item.id === id
              ? { ...item, qty }
              : item
          )
    );
  };

  const remove = (id) => {
    setCart((previous) =>
      previous.filter(
        (item) => item.id !== id
      )
    );
  };

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.qty,
    0
  );

  const count = cart.reduce(
    (sum, item) => sum + item.qty,
    0
  );

  return {
    cart,
    addToCart,
    updateQty,
    remove,
    total,
    count,
  };
}