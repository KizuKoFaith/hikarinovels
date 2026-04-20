'use client'
import { useState } from "react";
import Link from "next/link";
import { Search, UserRound, Menu, X } from "lucide-react";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full sticky top-0 bg-gray-100 dark:bg-gray-900 z-50">

        {/* Main Row */}
        <div className="flex items-center justify-between px-3 md:px-16 py-3">

          {/* Left: Menu + Brand */}
          <div className="flex items-center gap-3">

            {/* Hamburger */}
            <button
              className="flex md:hidden text-gray-700 dark:text-gray-300 hover:text-rose-500 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Brand */}
            <Link href="/">
              <h1
                className="text-gray-900 dark:text-gray-300 text-[1.1rem] md:text-xl font-semibold"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Hikari
                <span className="text-rose-500">Novels</span>
              </h1>
            </Link>
          </div>

          {/* Nav Links - desktop only */}
          <div
            className="hidden md:flex items-center gap-6 text-sm"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            <Link href="/browse" className="text-gray-700 dark:text-gray-300 hover:text-rose-500 transition-colors">Browse</Link>
            <Link href="/latest" className="text-gray-700 dark:text-gray-300 hover:text-rose-500 transition-colors">Latest</Link>
            <Link href="/popular" className="text-gray-700 dark:text-gray-300 hover:text-rose-500 transition-colors">Popular</Link>
          </div>

          {/* Search & Profile */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-200 dark:bg-gray-800 focus-within:ring-2 focus-within:ring-rose-500 transition-all">
              <Search size={15} className="text-gray-500 dark:text-gray-400" />
              <input
                type="search"
                placeholder="Search..."
                className="text-xs md:text-sm text-gray-900 dark:text-gray-300 bg-transparent outline-none placeholder:text-gray-400 dark:placeholder:text-gray-500 w-24 md:w-40"
                style={{ fontFamily: "var(--font-poppins)" }}
              />
            </div>

            <Link href="/profile">
              <div className="w-[30px] h-[30px] md:w-[38px] md:h-[38px] flex items-center justify-center border border-gray-300 dark:border-gray-600 rounded-full bg-gray-200 dark:bg-gray-800 hover:border-rose-500 hover:text-rose-500 transition-colors cursor-pointer">
                <UserRound size={18} className="text-gray-500 dark:text-gray-400" />
              </div>
            </Link>
          </div>

        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Side Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-1/2 bg-gray-100 dark:bg-gray-900 z-50 md:hidden
          flex flex-col px-4 py-8 md:px-8 md:py-8 gap-6 shadow-2xl
          transition-transform duration-300 ease-in-out
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
        style={{ fontFamily: "var(--font-poppins)" }}
      >
        {/* Drawer Header */}
        <div className="flex items-center gap-2 justify-between">
          <h1
            className="text-gray-900 dark:text-gray-300 text-[1.2rem] font-semibold"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Hikari<span className="text-rose-500">Novels</span>
          </h1>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 dark:text-gray-300 hover:text-rose-500 transition-colors"
          >
            <X size={22} />
          </button>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 dark:bg-gray-700" />

        {/* Links */}
        <nav className="flex flex-col gap-5 text-sm mt-2">
          <Link
            href="/browse"
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 dark:text-gray-300 hover:text-rose-500 transition-colors"
          >
            Browse
          </Link>
          <Link
            href="/latest"
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 dark:text-gray-300 hover:text-rose-500 transition-colors"
          >
            Latest
          </Link>
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 dark:text-gray-300 hover:text-rose-500 transition-colors"
          >
            Popular
          </Link>
        </nav>

      </div>
    </>
  );
}