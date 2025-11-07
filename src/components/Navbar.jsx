import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { db } from '../lib/storage'

export default function Navbar(){
  const user = db.currentUser()
  const navigate = useNavigate()
  const logout = ()=>{ db.logout(); navigate('/') }

  const [wishCount, setWishCount] = useState(db.wishlist().length)
  const [cartCount, setCartCount] = useState(db.cart().length)

  useEffect(() => {
    const onWish = () => setWishCount(db.wishlist().length)
    const onCart = () => setCartCount(db.cart().length)
    window.addEventListener('wishlist:changed', onWish)
    window.addEventListener('cart:changed', onCart)
    // also listen to real storage updates across tabs
    const onStorage = (e) => {
      if (e.key === 'wishlist') onWish()
      if (e.key === 'cart') onCart()
    }
    window.addEventListener('storage', onStorage)
    return () => {
      window.removeEventListener('wishlist:changed', onWish)
      window.removeEventListener('cart:changed', onCart)
      window.removeEventListener('storage', onStorage)
    }
  }, [])

  return (
    <div className="nav">
      <div className="container nav-inner">
        <Link className="brand" to="/">
          <span className="brand-badge">A</span> ArtGallery
        </Link>
        <div className="nav-links">
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>

          <NavLink to="/wishlist">
            <button className="btn small ghost">Wishlist ({wishCount})</button>
          </NavLink>
          <NavLink to="/cart">
            <button className="btn small ghost">Cart ({cartCount})</button>
          </NavLink>

          {user ? (
            <>
              {user.role==='Artist' && <NavLink to="/artist">Artist Studio</NavLink>}
              {user.role==='Curator' && <NavLink to="/curator">Curator Studio</NavLink>}
              {user.role==='Admin' && <NavLink to="/admin">Admin</NavLink>}
              <button className="btn small ghost" onClick={logout}>Logout</button>
            </>
          ) : (
            <>
              <NavLink to="/login"><button className="btn small ghost">Login</button></NavLink>
              <NavLink to="/signup"><button className="btn small">Sign Up</button></NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
