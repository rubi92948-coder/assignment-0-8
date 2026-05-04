"use client";

import { BookOpen } from "lucide-react";

export default function Marquee() {
  return (
    <div className="w-full overflow-hidden bg-purple-100 border-b border-purple-200 py-2">
      
      <div className="marquee-track text-purple-800 text-sm font-medium">

        <span className="flex items-center gap-2 whitespace-nowrap">
          <BookOpen size={16} />
          Welcome to BookApp • Discover Thousands of Books • Read Anytime, Anywhere • Sign in to Unlock Full Access • Happy Reading ✨
          <BookOpen size={16} />
        </span>

      </div>

      <style jsx>{`
        .marquee-track {
          display: flex;
          width: 100%;
          overflow: hidden;
        }

        .marquee-track span {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding-left: 100%;
          animation: marquee 14s linear infinite;
          white-space: nowrap;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}