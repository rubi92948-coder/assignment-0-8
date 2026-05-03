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
          filter: "brightness(0.85) contrast(1.1) saturate(1.2)",
        }}
      />

      {/* PURPLE OVERLAY */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(91,33,182,0.7), rgba(124,58,237,0.4))",
        }}
      />

      {/* CONTENT WRAPPER (2 SIDE PADDING) */}
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

          <p style={{ fontSize: "18px", marginTop: "10px" }}>
            Borrow books online easily and fast
          </p>

          <Link
            href="/books"
            style={{
              marginTop: "20px",
              display: "inline-block",
              backgroundColor: "#ffffff",
              color: "#5b21b6",
              padding: "12px 20px",
              borderRadius: "8px",
              fontWeight: "bold",
            }}
          >
            Browse Books
          </Link>
        </div>
      </div>
    </section>
  );
}