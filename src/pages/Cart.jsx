// src/pages/Cart.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../lib/storage";

export default function Cart() {
  const [items, setItems] = useState([]);

  const load = () => {
    const ids = db.cart();                  // [id, id, ...]
    const all = db.artworks();
    setItems(all.filter(a => ids.includes(a.id)));
  };

  useEffect(() => {
    load();
  }, []);

  const remove = (id) => {
    const next = db.cart().filter(x => x !== id);
    db.saveCart(next);
    load();
  };

  const total = items.reduce((s, a) => s + (a.price || 0), 0);

  return (
    <div className="container" style={{ padding: "24px 0" }}>
      <h3>Cart</h3>

      {!items.length ? (
        <p className="muted">
          Your cart is empty. <Link to="/gallery">Browse artworks</Link>.
        </p>
      ) : (
        <>
          {items.map(a => (
            <div key={a.id} className="card"
                 style={{ padding: 12, display: "flex", gap: 12, alignItems: "center", marginBottom: 10 }}>
              <img src={a.img} alt={a.title}
                   style={{ width: 90, height: 70, objectFit: "cover", borderRadius: 8 }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700 }}>{a.title}</div>
                <div className="muted" style={{ fontSize: 12 }}>by {a.author}</div>
              </div>
              <div style={{ fontWeight: 700 }}>₹{a.price.toLocaleString()}</div>
              <button className="btn small ghost" onClick={() => remove(a.id)}>Remove</button>
            </div>
          ))}

          <div className="space-between" style={{ marginTop: 12 }}>
            <div style={{ fontSize: 18, fontWeight: 800 }}>
              Total: ₹{total.toLocaleString()}
            </div>
            <button className="btn">Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}
