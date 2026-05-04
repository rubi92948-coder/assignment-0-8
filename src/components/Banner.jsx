"use client";

import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "420px",
        overflow: "hidden",
      }}
    >
      {/* BACKGROUND IMAGE */}
      <Image
        src="/banner.jpg"
        alt="banner"
        fill
        priority
        loading="eager"
        style={{
          objectFit: "cover",
          filter: "brightness(0.9) contrast(1.05) saturate(1.1)",
        }}
      />

      {/* LIGHT PURPLE OVERLAY */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(168,85,247,0.35), rgba(139,92,246,0.25))",
        }}
      />

      {/* CONTENT */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          padding: "0 40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",
        }}
      >
        <div>
          <h1 style={{ fontSize: "42px", fontWeight: "bold" }}>
            Find Your Next Read 📚
          </h1>

          <p style={{ fontSize: "18px", marginTop: "10px", opacity: 0.9 }}>
            Borrow books online easily and fast
          </p>

          <Link
            href="/books"
            style={{
              marginTop: "20px",
              display: "inline-block",
              backgroundColor: "#ffffff",
              color: "#6d28d9",
              padding: "12px 20px",
              borderRadius: "8px",
              fontWeight: "bold",
              transition: "0.3s",
            }}
            onMouseOver={(e) =>
              (e.target.style.backgroundColor = "#f3e8ff")
            }
            onMouseOut={(e) =>
              (e.target.style.backgroundColor = "#ffffff")
            }
          >
            Browse Books
          </Link>
        </div>
      </div>
    </section>
  );
}