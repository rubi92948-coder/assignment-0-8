"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Avatar } from "@heroui/react";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const pathname = usePathname();

  const checkAuth = () => {
    const token = localStorage.getItem("token");

    let userData = null;
    try {
      userData = JSON.parse(localStorage.getItem("user"));
    } catch {
      userData = null;
    }

    setIsLoggedIn(!!token);
    setUser(userData);
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
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUser(null);
    window.location.href = "/signin";
  };

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

        {/* LINKS */}
        <div style={{ display: "flex", gap: "20px", fontWeight: "bold" }}>
          <Link href="/" style={getLinkStyle("/")}>Home</Link>
          <Link href="/all-photos" style={getLinkStyle("/all-photos")}>All Books</Link>
          <Link href="/profile" style={getLinkStyle("/profile")}>My Profile</Link>
        </div>

        {/* AUTH */}
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          {isLoggedIn ? (
            <>
              {/* HEROUI AVATAR ADDED */}
              <Avatar>
                {user?.image ? (
                  <Avatar.Image
                    alt="user"
                    src={user.image}
                  />
                ) : (
                  <Avatar.Fallback>
                    {user?.email?.charAt(0)?.toUpperCase() || "U"}
                  </Avatar.Fallback>
                )}
              </Avatar>

              {/* LOGOUT */}
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
                  fontWeight: "bold",
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
            </>
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