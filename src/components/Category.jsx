"use client";

import { useEffect, useState } from "react";

export default function Category() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("/category.json");
      const data = await res.json();
      setCategories(data);
    };

    loadData();
  }, []);

  return (
    <div className="flex gap-3 m-4 flex-wrap">
      {categories.map((cat) => (
        <a
          key={cat.id}
          href={`/all-photos?category=${cat.name}`}
          className="px-3 py-1 bg-purple-100 text-purple-700 rounded"
        >
          {cat.name}
        </a>
      ))}
    </div>
  );
}