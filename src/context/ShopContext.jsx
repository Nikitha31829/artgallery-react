import React, { createContext, useContext, useEffect, useMemo, useReducer } from "react";

const ShopContext = createContext(null);

const types = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  CLEAR_CART: "CLEAR_CART",
  ADD_WISHLIST: "ADD_WISHLIST",
  REMOVE_WISHLIST: "REMOVE_WISHLIST",
  HYDRATE: "HYDRATE",
};

const initial = { cart: [], wishlist: [] };

function reducer(state, action) {
  switch (action.type) {
    case types.HYDRATE:
      return { ...state, ...action.payload };

    case types.ADD_TO_CART: {
      const item = action.payload; // {id, title, price, image, ...}
      // if already in cart, bump qty else push with qty=1
      const next = [...state.cart];
      const idx = next.findIndex((x) => x.id === item.id);
      if (idx >= 0) next[idx] = { ...next[idx], qty: next[idx].qty + 1 };
      else next.push({ ...item, qty: 1 });
      return { ...state, cart: next };
    }

    case types.REMOVE_FROM_CART: {
      const id = action.payload;
      const next = state.cart
        .map((x) => (x.id === id ? { ...x, qty: x.qty - 1 } : x))
        .filter((x) => x.qty > 0);
      return { ...state, cart: next };
    }

    case types.CLEAR_CART:
      return { ...state, cart: [] };

    case types.ADD_WISHLIST: {
      const item = action.payload; // {id, title, price, image, ...}
      const exists = state.wishlist.some((x) => x.id === item.id);
      return exists ? state : { ...state, wishlist: [...state.wishlist, item] };
    }

    case types.REMOVE_WISHLIST: {
      const id = action.payload;
      return { ...state, wishlist: state.wishlist.filter((x) => x.id !== id) };
    }

    default:
      return state;
  }
}

const STORAGE_KEY = "handlooms_shop_state";

export function ShopProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initial);

  // Hydrate from localStorage once
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) dispatch({ type: types.HYDRATE, payload: JSON.parse(raw) });
    } catch {}
  }, []);

  // Persist on every change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const totals = useMemo(() => {
    const count = state.cart.reduce((s, i) => s + i.qty, 0);
    const sum = state.cart.reduce((s, i) => s + i.qty * (Number(i.price) || 0), 0);
    return { cartCount: count, cartTotal: sum, wishlistCount: state.wishlist.length };
  }, [state.cart, state.wishlist]);

  const value = {
    ...state,
    ...totals,
    addToCart: (item) => dispatch({ type: types.ADD_TO_CART, payload: item }),
    removeFromCart: (id) => dispatch({ type: types.REMOVE_FROM_CART, payload: id }),
    clearCart: () => dispatch({ type: types.CLEAR_CART }),
    addToWishlist: (item) => dispatch({ type: types.ADD_WISHLIST, payload: item }),
    removeFromWishlist: (id) => dispatch({ type: types.REMOVE_WISHLIST, payload: id }),
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop() {
  const ctx = useContext(ShopContext);
  if (!ctx) throw new Error("useShop() must be used inside <ShopProvider>");
  return ctx;
}
