export default function Contact() {
  return (
    <div className="container" style={{ padding: "32px 0 60px" }}>
      <header className="hero" style={{ padding: "10px 0 16px" }}>
        <h1>Contact Us</h1>
        <p className="muted" style={{ maxWidth: 900, margin: "6px auto 0" }}>
          This project is a modern, role-based <b>Virtual Art Gallery</b>—
          Visitors enjoy curated tours, Artists upload & sell easily, Curators design
          exhibitions in minutes, and Admins ensure quality. Its uniqueness lies in the
          <b> clean UX, instant role switching, and local-first prototype</b> that lets you
          experience a full workflow without any setup.
          <br />
          Have questions or need details? Reach out to the team below.
        </p>
      </header>

      <section className="grid" style={{ gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
        <ContactCard
          name="Maremalla Pravali Swaraj"
          id="2400032459"
          phone="+91 91829 20647"
        />
        <ContactCard
          name="K. L. Nishitha"
          id="2400032194"
          phone="+91 99812 79999"
        />
        <ContactCard
          name="P. Sowmya Sri"
          id="2400030286"
          phone="+91 76709 57629"
        />
      </section>

      <section style={{ marginTop: 18 }}>
        <div className="card" style={{ padding: 18 }}>
          <h3 className="section-title">Prefer Email?</h3>
          <p className="muted" style={{ marginTop: 4 }}>
            Send us your query with screenshots (if any) and we’ll get back within 1–2 business days.
          </p>
          <a href="mailto:support@artgallery.local">
            <button className="btn">support@artgallery.local</button>
          </a>
        </div>
      </section>
    </div>
  );
}

/** simple presentational card */
function ContactCard({ name, id, phone }) {
  const tel = "tel:" + phone.replace(/[^0-9+]/g, "");
  return (
    <div className="card" style={{ padding: 18 }}>
      <h3 className="section-title" style={{ marginBottom: 2 }}>{name}</h3>
      <div className="muted">ID: {id}</div>
      <div style={{ marginTop: 10 }}>
        <a href={tel}><button className="btn small">Call {phone}</button></a>
      </div>
    </div>
  );
}
