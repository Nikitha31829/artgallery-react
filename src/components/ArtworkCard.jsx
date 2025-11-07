import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { db } from '../lib/storage'

export default function ArtworkCard({ art }) {
  const [wished, setWished] = useState(db.wishlist().includes(art.id))
  const [inCart, setInCart] = useState(db.cart().includes(art.id))

  useEffect(() => {
    const onWish = () => setWished(db.wishlist().includes(art.id))
    const onCart = () => setInCart(db.cart().includes(art.id))
    window.addEventListener('wishlist:changed', onWish)
    window.addEventListener('cart:changed', onCart)
    return () => {
      window.removeEventListener('wishlist:changed', onWish)
      window.removeEventListener('cart:changed', onCart)
    }
  }, [art.id])

  const addWish = (e) => {
    e.preventDefault()
    db.addToWishlist(art.id)
  }

  const addCart = (e) => {
    e.preventDefault()
    db.addToCart(art.id)
  }

  return (
    <Link to={`/art/${art.id}`} className="card" style={{ overflow: 'hidden', display: 'block' }}>
      <img src={art.img} alt={art.title} style={{ width: '100%', height: 220, objectFit: 'cover' }} />
      <div style={{ padding: 14 }}>
        <div className="section-title">{art.title}</div>
        <div className="muted" style={{ fontSize: 13 }}>by {art.author}</div>
        <div className="space-between" style={{ marginTop: 10 }}>
          <div style={{ fontWeight: 700 }}>${art.price.toLocaleString()}</div>
          <div className="row">
            <button className="btn small ghost" onClick={addWish} disabled={wished}>
              {wished ? '♡ Wished' : '♡ Wishlist'}
            </button>
            <button className="btn small" onClick={addCart} disabled={inCart}>
              {inCart ? 'Added' : '🛒 Add'}
            </button>
          </div>
        </div>
        <div style={{ marginTop: 10 }}>
          <button className="btn small ghost">View Details</button>
        </div>
      </div>
    </Link>
  )
}
