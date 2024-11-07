'use client';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4 bg-pink-200 sticky top-0 border-b backdrop-blur">
      <div className="container mx-auto flex justify-between h-16">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center">
          <Link href="/" className="text-2xl font-semibold">
            Bloom & Blossom
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-8 font-bold">
          <ul className="flex space-x-8">
            <li>
              <Link href="/" className="text-gray-700 hover:text-gray-900 hover:bg-gray-50 px-1 pt-1">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-700 hover:text-gray-900 hover:bg-gray-50 px-1 pt-1">
                About
              </Link>
            </li>
            <li>
              <Link href="/product" className="text-gray-700 hover:text-gray-900 hover:bg-gray-50 px-1 pt-1">
                Product
              </Link>
            </li>
            <li>
              <Link href="/review" className="text-gray-700 hover:text-gray-900 hover:bg-gray-50 px-1 pt-1">
                Review
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-700 hover:text-gray-900 hover:bg-gray-50 px-1 pt-1">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen ? "true" : "false"}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
          >
            <span className="sr-only">Open main menu</span>
            {!isOpen ? (
              <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <ul className="space-y-1 pt-2 pb-3">
            <li>
              <Link href="/Hero" className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50">
                About
              </Link>
            </li>
            <li>
              <Link href="/product" className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50">
                Product
              </Link>
            </li>
            <li>
              <Link href="/review" className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50">
                Review
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;