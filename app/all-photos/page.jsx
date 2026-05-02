export default async function Page() {
  const res = await fetch("http://localhost:3000/data.json", {
    cache: "no-store",
  });

  const photos = await res.json();

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>
        All Photos
      </h1>

      <p>Total: {photos.length}</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {photos.map((photo) => (
          <div
            key={photo.id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <img
              src={photo.image_url}
              alt={photo.title}
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />

            <h3 style={{ fontWeight: "bold", marginTop: "10px" }}>
              {photo.title}
            </h3>

            <p style={{ color: "purple" }}>{photo.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}