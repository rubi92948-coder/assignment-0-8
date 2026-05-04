# 📚 Online Book Borrowing Platform

This is a simple online book borrowing web app where users can explore books, view details, and borrow them after logging in. The goal of this project is to turn a traditional library experience into a modern digital platform.

---

## 🌐 Live Site

https://assignment-0-8-ne31-qn98ujvw8-rubi92948-coders-projects.vercel.app/

## 💻 GitHub Repo

https://github.com/rubi92948-coder/assignment-0-8

---

## 🧩 What you can do here

* Browse all available books
* Search books by title
* Filter books by category (Story, Tech, Science)
* View detailed information about a book
* Borrow a book (only if logged in)
* Register and login (with email/password or Google)
* See and update your profile

---

## 🔐 Authentication

Authentication is handled using BetterAuth.

* Email & Password login
* Google login
* Protected routes (Profile & Book Details)

If a user is not logged in, they are redirected to the login page.

---

## 🏠 Homepage sections

* Banner with “Find Your Next Read”
* Marquee (scrolling text for announcements)
* Featured Books (top 4 books)
* Why Choose Us (Swiper slider)
* Reviews section

---

## ⚙️ Tech Stack

* Next.js (App Router)
* Tailwind CSS
* HeroUI
* BetterAuth
* Swiper.js

---

## 📦 Packages used

* swiper
* better-auth
* lucide-react
* @heroui/react

---

## 🔒 Protected Routes

* `/profile`
* `/all-photos/[id]`

Users must be logged in to access these pages.

---

## ⚠️ Notes

* All API calls use relative paths (`/api/...`)
* Avoided using localhost in production
* Proxy/middleware is used for route protection
* Fully responsive design (mobile, tablet, desktop)

---

## ▶️ Run locally

```bash
npm install
npm run dev
```

---

## 👨‍💻 Author

Rubi Akter

---

## ✔ Status

Project is complete and deployed.
All main features are working properly.
