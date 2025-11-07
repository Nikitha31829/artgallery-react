export default function About() {
  return (
    <div className="container" style={{ padding: "32px 0 60px" }}>
      <header className="hero" style={{ padding: "10px 0 20px" }}>
        <h1>About This Website</h1>
        <p className="muted" style={{ maxWidth: 880, margin: "6px auto 0" }}>
          ArtGallery is a clean, fast, and friendly space where visitors explore
          world-class artworks, artists showcase their creations, curators build
          beautiful digital exhibitions, and admins keep everything safe and smooth.
        </p>
      </header>

      <section className="grid" style={{ gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
        <div className="card" style={{ padding: 18 }}>
          <h3 className="section-title">Our Mission</h3>
          <p className="muted">
            Celebrate creativity and make authentic art accessible to everyone.
            We connect talented artists with worldwide audiences through a
            delightful, mobile-friendly experience.
          </p>
        </div>

        <div className="card" style={{ padding: 18 }}>
          <h3 className="section-title">Why It’s Useful</h3>
          <ul className="muted" style={{ margin: 0, paddingLeft: 18 }}>
            <li><b>Visitors:</b> discover, favorite, and buy artworks you love.</li>
            <li><b>Artists:</b> upload works in minutes, manage listings & sales.</li>
            <li><b>Curators:</b> create themed exhibitions with a click.</li>
            <li><b>Admins:</b> manage users, content quality, and safety.</li>
          </ul>
        </div>

        <div className="card" style={{ padding: 18 }}>
          <h3 className="section-title">What You Can Do</h3>
          <ul className="muted" style={{ margin: 0, paddingLeft: 18 }}>
            <li>Search by title or artist, filter by category, add to wishlist/cart.</li>
            <li>Take virtual tours to quickly explore curated collections.</li>
            <li>Track stats like views, favorites, and completed tours.</li>
          </ul>
        </div>
      </section>

      <section className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 16 }}>
        <div className="card" style={{ padding: 18 }}>
          <h3 className="section-title">Trust & Safety</h3>
          <p className="muted">
            Listings are reviewed, artists are verified, and pricing is transparent.
            Your preferences stay on your device using local storage in this demo.
          </p>
        </div>

        <div className="card" style={{ padding: 18 }}>
          <h3 className="section-title">Get Started</h3>
          <ol className="muted" style={{ margin: 0, paddingLeft: 18 }}>
            <li>Create an account and choose your role (Visitor / Artist / Curator / Admin).</li>
            <li>Explore the Gallery, favorite pieces, or upload your own artworks.</li>
            <li>Build exhibitions or manage users from your role-specific studio.</li>
          </ol>
          <div style={{ marginTop: 12 }}>
            <a href="/signup"><button className="btn">Create Account</button></a>{" "}
            <a href="/gallery"><button className="btn secondary">Explore Gallery</button></a>
          </div>
        </div>
      </section>
    </div>
  );
}
