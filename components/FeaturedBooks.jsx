import books from "@/public/data.json";
import { Chip } from "@heroui/react";

export default function FeaturedBooks() {
  return (
    <div style={{ padding: "40px 20px" }}>
      <h2
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        Featured Books
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
        }}
      >
        {books.slice(0, 4).map((book) => (
          <div
            key={book.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              background: "#fff",
              overflow: "hidden",
            }}
          >
            {/* Image wrapper */}
            <div style={{ position: "relative" }}>
              <img
                src={book.image_url}
                alt={book.title}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                }}
              />

              {/* Category on image */}
              <div
                style={{
                  position: "absolute",
                  top: "10px",
                  left: "10px",
                }}
              >
                <Chip
                  size="sm"
                  variant="flat"
                  style={{
                    backgroundColor: "#ede9fe",
                    color: "#6d28d9",
                    fontSize: "11px",
                  }}
                >
                  {book.category}
                </Chip>
              </div>
            </div>

            {/* Content */}
            <div style={{ padding: "12px" }}>
              <h3
                style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  marginBottom: "10px",
                }}
              >
                {book.title}
              </h3>

              <button
                style={{
                  background: "#5b21b6",
                  color: "white",
                  padding: "7px 12px",
                  borderRadius: "6px",
                  border: "none",
                  cursor: "pointer",
                  width: "100%",
                }}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}