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

        <h2 style={{ marginTop: "10px", fontWeight: "bold" }}>
          {photo.title}
        </h2>

        <p style={{ color: "purple" }}>{photo.category}</p>

        <p style={{ fontSize: "14px", marginTop: "10px" }}>
          {photo.description}
        </p>
      </div>
    </div>
  );
}