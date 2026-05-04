"use client";
import React from "react";


import Link from "next/link";


const error = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center mt-5 bg-slate-50 dark:bg-slate-950 relative overflow-hidden font-sans">

      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] pointer-events-none"></div>


      <div className="relative z-10 max-w-xl w-full mx-4 p-12 bg-white/70 dark:bg-slate-900/50 backdrop-blur-2xl rounded-[40px] border border-white dark:border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.1)] text-center">

        <div className="relative inline-block mb-12">
          <h1 className="text-[120px] md:text-[160px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-600">
            404
          </h1>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
            <span className="px-5 py-1.5 text-xs md:text-sm font-bold tracking-[0.2em] uppercase bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full shadow-2xl">
              Page Not Found
            </span>
          </div>
        </div>


        <div className="space-y-4 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Lost in the Clouds?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
            The page you are looking for might have been removed or is
            temporarily unavailable.
          </p>
        </div>


        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href={'/'}>
          <button className="w-full sm:w-auto px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-[0_10px_20px_rgba(37,99,235,0.3)] transition-all active:scale-95">
            Back to Home
          </button>
          </Link>

          <button className="w-full sm:w-auto px-10 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold rounded-2xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all active:scale-95">
            Try Reloading
          </button>
        </div>

        <div className="mt-16 flex justify-center  gap-2 opacity-50">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse [animation-delay:0.2s]"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-pulse [animation-delay:0.4s]"></span>
        </div>
      </div>
    </div>
  );
};

export default error;