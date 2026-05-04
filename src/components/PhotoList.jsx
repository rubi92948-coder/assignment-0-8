"use client";

import { useState } from "react";
import PhotoCard from "@/components/PhotoCard";

export default function PhotoList({ photos, category }) {
  const [search, setSearch] = useState("");

  const filtered = photos.filter((photo) => {
    const matchCategory = category
      ? photo.category.toLowerCase() === category.toLowerCase()
      : true;

    const matchSearch = photo.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <div>
      {/* SEARCH BAR */}
      <div className="m-4">
        <input
          type="text"
          placeholder="Search books..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 w-full md:w-1/2 rounded"
        />
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 p-4">
        {filtered.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
}