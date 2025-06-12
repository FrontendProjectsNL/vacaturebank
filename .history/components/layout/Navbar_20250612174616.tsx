'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-300 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-600">
          Vacaturebank
        </Link>

        {/* Hamburger menu button (mobile) */}
        <button
          className="md:hidden flex items-center px-2 py-1 border rounded text-gray-700 border-gray-300"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Menu */}
        <div
          className={`${
            menuOpen ? 'block' : 'hidden'
          } absolute top-16 left-0 w-full bg-white md:static md:block md:w-auto md:bg-transparent`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6">
            <li>
              <Link
                href="/"
                className="block px-4 py-2 text-gray-700 hover:text-blue-600"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/jobs"
                className="block px-4 py-2 text-gray-700 hover:text-blue-600"
                onClick={() => setMenuOpen(false)}
              >
                Jobs
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block px-4 py-2 text-gray-700 hover:text-blue-600"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block px-4 py-2 text-gray-700 hover:text-blue-600"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
