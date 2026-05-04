export default async function Page({ params }) {
  const { id } = await params;

  const res = await fetch(
    "https://assignment-0-8-ne31.vercel.app/data.json",
    { cache: "no-store" }
  );

  const photos = await res.json();

  const photo = photos.find((p) => String(p.id) === String(id));

  if (!photo) {
    return (
      <div style={{ padding: "20px" }}>
        <h1>Not Found ❌</h1>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f3f4f6",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "500px",
          background: "white",
          borderRadius: "12px",
          padding: "15px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        }}
      >
        {/* IMAGE */}
        <img
          src={photo.image_url}
          alt={photo.title}
          style={{
            width: "100%",
            height: "300px",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />

        {/* TITLE */}
        <h2 style={{ marginTop: "10px", fontWeight: "bold" }}>
          {photo.title}
        </h2>

        {/* CATEGORY */}
        <p style={{ color: "purple", fontWeight: "bold" }}>
          {photo.category}
        </p>

        {/* AUTHOR */}
        {photo.author && (
          <p style={{ marginTop: "6px", fontSize: "14px" }}>
            <b>Author:</b> {photo.author}
          </p>
        )}

        {/* DESCRIPTION */}
        <p style={{ fontSize: "14px", marginTop: "10px" }}>
          {photo.description}
        </p>

        {/* AVAILABLE QUANTITY */}
        {photo.available_quantity && (
          <p style={{ marginTop: "8px", fontSize: "13px" }}>
            <b>Available:</b> {photo.available_quantity}
          </p>
        )}

        {/* BORROW BUTTON */}
        <button
          style={{
            marginTop: "15px",
            width: "100%",
            padding: "10px",
            background: "#6d28d9",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Borrow This Book
        </button>
      </div>
    </div>
  );
}