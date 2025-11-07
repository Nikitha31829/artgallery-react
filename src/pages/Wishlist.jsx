// src/pages/Wishlist.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../lib/storage";

export default function Wishlist() {
  const [items, setItems] = useState([]);

  const load = () => {
    const ids = db.wishlist();               // [id, id, ...]
    const all = db.artworks();               // [{id, title, ...}, ...]
    setItems(all.filter(a => ids.includes(a.id)));
  };

  useEffect(() => {
    load();
  }, []);

  const remove = (id) => {
    const next = db.wishlist().filter(x => x !== id);
    db.saveWishlist(next);
    load();
  };

  return (
    <div className="container" style={{ padding: "24px 0" }}>
      <h3>Wishlist</h3>

      {!items.length ? (
        <p className="muted">
          Your wishlist is empty. <Link to="/gallery">Browse artworks</Link>.
        </p>
      ) : (
        <div className="grid grid-3" style={{ marginTop: 10 }}>
          {items.map(a => (
            <div key={a.id} className="card" style={{ overflow: "hidden" }}>
              <img src={a.img} alt={a.title}
                   style={{ width: "100%", height: 200, objectFit: "cover" }} />
              <div style={{ padding: 14 }}>
                <div style={{ fontWeight: 700 }}>{a.title}</div>
                <div className="muted" style={{ fontSize: 12 }}>
                  by {a.author}
                </div>
                <div className="space-between" style={{ marginTop: 8 }}>
                  <div style={{ fontWeight: 700 }}>₹{a.price.toLocaleString()}</div>
                  <button className="btn small ghost" onClick={() => remove(a.id)}>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
