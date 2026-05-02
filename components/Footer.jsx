export default function Footer() {
  return (
    <footer
      style={{
        marginTop: "60px",
        padding: "40px 20px",
        background: "#5b21b6",
        color: "white",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "30px",
        }}
      >
        {/* LEFT */}
        <div>
          <h2 style={{ fontWeight: "bold", fontSize: "20px" }}>
            BookApp 📚
          </h2>
          <p style={{ marginTop: "10px", fontSize: "14px" }}>
            Online Book Borrowing Platform
          </p>
        </div>

        {/* CENTER */}
        <div>
          <h3 style={{ fontWeight: "bold" }}>Quick Links</h3>
          <ul style={{ marginTop: "10px", listStyle: "none", padding: 0 }}>
            <li>Home</li>
            <li>All Books</li>
            <li>My Profile</li>
          </ul>
        </div>

        {/* RIGHT */}
        <div>
          <h3 style={{ fontWeight: "bold" }}>Contact Us</h3>
          <p style={{ marginTop: "10px", fontSize: "14px" }}>
            Email: bookapp@gmail.com
          </p>
          <p style={{ fontSize: "14px" }}>
            Phone: +880 123456789
          </p>
        </div>
      </div>

      {/* BOTTOM LINE */}
      <div
        style={{
          textAlign: "center",
          marginTop: "30px",
          fontSize: "13px",
          opacity: 0.8,
        }}
      >
        © {new Date().getFullYear()} BookApp. All rights reserved.
      </div>
    </footer>
  );
}