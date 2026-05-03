export default async function FeaturedBooks() {
  const res = await fetch("http://localhost:3000/data.json");
  const books = await res.json();

  return (
    <div style={{ padding: "40px 20px" }}>
      <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>
        Featured Books
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
        {books.slice(0, 4).map((book) => (
          <div key={book.id}>
            <img src={book.image_url} alt={book.title} />
            <h3>{book.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}