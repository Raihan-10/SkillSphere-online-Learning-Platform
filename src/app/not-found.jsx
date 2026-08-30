import React from "react";
import Link from "next/link";

export default function Notfound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 py-12 bg-blue-900 text-white">
      <div className="relative mb-6">
        <span className="text-8xl md:text-9xl font-extrabold tracking-widest select-none">
          404
        </span>
        <div className="absolute inset-0 flex items-center justify-center text-5xl md:text-6xl animate-bounce">
          🛸
        </div>
      </div>

      <h1 className="text-3xl md:text-5xl font-black mb-3 tracking-tight">
        The page is not found
      </h1>
      <p className="mb-5">Alas! Where are you?</p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="btn btn-primary bg-blue-600 hover:bg-blue-700 text-white border-none px-6 rounded-xl shadow-lg shadow-blue-500/20"
        >
          Take Me Home
        </Link>
        <Link
          href="/courses"
          className="btn shadow-none border-white-700 text-black px-6 rounded-xl"
        >
          Browse Courses Instead
        </Link>
      </div>
    </div>
  );
}
