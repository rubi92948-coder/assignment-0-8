"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div
      style={{
        background: "linear-gradient(to right, #ffffff, #5b21b6)",
        padding: "12px 20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <h1 style={{ fontWeight: "bold" }}>BookApp</h1>
        </div>

        {/* Center Links */}
        <div style={{ display: "flex", gap: "20px", fontWeight: "bold" }}>
          <Link href="/" style={{ color: "white" }}>
            Home
          </Link>        

          <Link href="/all-photos/page.jsx" style={{ color: "white" }}>
            All Books
          </Link>

          <Link href="/profile" style={{ color: "white" }}>
            My Profile
          </Link>
        </div>

        {/* Auth Links */}
        <div style={{ display: "flex", gap: "10px", fontWeight: "bold" }}>
          <Link href="/login" style={{ color: "white" }}>
            Login
          </Link>

          <Link href="/register" style={{ color: "white" }}>
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}