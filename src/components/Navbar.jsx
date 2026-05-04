"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();

  const checkAuth = () => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  };

  useEffect(() => {
    checkAuth();
    window.addEventListener("storage", checkAuth);

    return () => {
      window.removeEventListener("storage", checkAuth);
    };
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    window.location.href = "/signin";
  };

  // ACTIVE LINK STYLE
  const getLinkStyle = (path) => ({
    color: pathname === path ? "#000000" : "#ffffff",
    textDecoration: "none",
    padding: "6px 10px",
    borderRadius: "6px",
    transition: "0.3s",
    background: pathname === path ? "rgba(0,0,0,0.08)" : "transparent",
  });

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
        {/* LOGO */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <h1 style={{ fontWeight: "bold", color: "#000000" }}>
            BookApp
          </h1>
        </div>

        {/* CENTER LINKS */}
        <div style={{ display: "flex", gap: "20px", fontWeight: "bold" }}>
          <Link href="/" style={getLinkStyle("/")}>
            Home
          </Link>

          <Link href="/all-photos" style={getLinkStyle("/all-photos")}>
            All Books
          </Link>

          <Link href="/profile" style={getLinkStyle("/profile")}>
            My Profile
          </Link>
        </div>

        {/* AUTH SECTION */}
        <div style={{ display: "flex", gap: "10px", fontWeight: "bold" }}>
          {isLoggedIn ? (
            <button
              onClick={handleLogOut}
              style={{
                color: "#ffffff",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: "6px 10px",
                borderRadius: "6px",
                transition: "0.3s",
              }}
              onMouseOver={(e) =>
                (e.target.style.background = "rgba(255,255,255,0.25)")
              }
              onMouseOut={(e) =>
                (e.target.style.background = "transparent")
              }
            >
              Logout
            </button>
          ) : (
            <>
              <Link href="/signup" style={getLinkStyle("/signup")}>
                SignUp
              </Link>

              <Link href="/signin" style={getLinkStyle("/signin")}>
                SignIn
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}