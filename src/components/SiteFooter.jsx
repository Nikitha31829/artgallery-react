export default function SiteFooter() {
  const subscribe = (e) => {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get("email");
    if (!email) return alert("Enter a valid email");
    alert(`Subscribed: ${email}`);
    e.currentTarget.reset();
  };

  return (
    <footer className="footer">
      <div className="container footer-grid">
        {/* Brand */}
        <div>
          <h3 className="footer-brand">HandloomHub</h3>
          <p className="footer-muted">
            Connecting skilled artisans with buyers worldwide. Supporting
            traditional craftsmanship and sustainable fashion through authentic
            handloom products.
          </p>
          <div className="social">
            {/* Simple inline SVG icons */}
            <a aria-label="Twitter" href="#" title="Twitter">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.6a9.9 9.9 0 0 1-2.83.78A4.93 4.93 0 0 0 23.34 3a9.86 9.86 0 0 1-3.13 1.2 4.92 4.92 0 0 0-8.5 4.49A13.97 13.97 0 0 1 1.67 3.16a4.92 4.92 0 0 0 1.52 6.56 4.88 4.88 0 0 1-2.23-.61v.06a4.92 4.92 0 0 0 3.95 4.83c-.54.15-1.11.18-1.67.07a4.92 4.92 0 0 0 4.6 3.42A9.87 9.87 0 0 1 0 19.54a13.94 13.94 0 0 0 7.55 2.21c9.06 0 14.02-7.51 14.02-14.02 0-.21 0-.42-.02-.63A10.03 10.03 0 0 0 24 4.6z"/></svg>
            </a>
            <a aria-label="Facebook" href="#" title="Facebook">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2.6V12h2.6V9.7c0-2.6 1.55-4 3.92-4 1.13 0 2.31.2 2.31.2v2.54h-1.3c-1.28 0-1.68.8-1.68 1.63V12h2.86l-.46 2.9h-2.4v7A10 10 0 0 0 22 12z"/></svg>
            </a>
            <a aria-label="Instagram" href="#" title="Instagram">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm0 2h10c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3zm5 2.7A5.3 5.3 0 1 0 17.3 12 5.31 5.31 0 0 0 12 6.7zm0 2A3.3 3.3 0 1 1 8.7 12 3.3 3.3 0 0 1 12 8.7zM18 6.4a1 1 0 1 0 1 1 1 1 0 0 0-1-1z"/></svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/gallery">Shop</a></li>
            <li><a href="/gallery">Artisans</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h4 className="footer-heading">Customer Service</h4>
          <ul className="footer-links">
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Shipping Info</a></li>
            <li><a href="#">Returns & Exchanges</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>

        {/* Newsletter / Contact */}
        <div>
          <h4 className="footer-heading">Stay Connected</h4>
          <p className="footer-muted">
            Subscribe to our newsletter for updates on new artisans and exclusive offers.
          </p>
          <form className="newsletter" onSubmit={subscribe}>
            <input
              name="email"
              defaultValue="123@gmail.com"
              placeholder="Enter your email"
              aria-label="Email"
            />
            <button className="btn">Subscribe</button>
          </form>
          <ul className="footer-contact">
            <li>✉️ support@handloomhub.com</li>
            <li>📞 +91 91829 20647</li>
            <li>📍 India, NY 10001</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
