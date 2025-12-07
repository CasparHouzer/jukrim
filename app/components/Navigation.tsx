'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
          style={{ top: '80px' }}
        />
      )}
      
      <nav className="bg-white shadow-md sticky top-0 z-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                <Image
                  src="/images/hero/logo.jpg"
                  alt="Wir gegen Jugendkriminalität e.V. Logo"
                  width={200}
                  height={60}
                  className="h-12 w-auto"
                  priority
                />
              </Link>
            </div>
            
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-black hover:text-[#3676BA] font-medium transition-colors">
                Home
              </Link>
              <a 
                href="#mission" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('mission')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-black hover:text-[#3676BA] font-medium transition-colors cursor-pointer"
              >
                Über uns
              </a>
              <a 
                href="#projekte" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projekte')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-black hover:text-[#3676BA] font-medium transition-colors cursor-pointer"
              >
                Projekte
              </a>
            <Link href="/kontakt" className="text-black hover:text-[#3676BA] font-medium transition-colors">
              Kontakt
            </Link>
              <Link href="/impressum" className="text-black hover:text-[#3676BA] font-medium transition-colors">
                Impressum
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-black hover:text-[#3676BA] focus:outline-none"
                aria-label="Menu"
              >
                {isMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div 
            className={`md:hidden absolute left-0 right-0 bg-white shadow-lg transition-all duration-300 ease-in-out z-50 ${
              isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
            }`}
            style={{ top: '100%' }}
          >
            <div className="px-4 py-6 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <Link
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-black hover:text-[#3676BA] font-medium transition-colors py-2 border-b border-gray-100"
                >
                  Home
                </Link>
                <a
                  href="#mission"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMenuOpen(false);
                    setTimeout(() => {
                      document.getElementById('mission')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="text-black hover:text-[#3676BA] font-medium transition-colors cursor-pointer py-2 border-b border-gray-100"
                >
                  Über uns
                </a>
                <a
                  href="#projekte"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMenuOpen(false);
                    setTimeout(() => {
                      document.getElementById('projekte')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="text-black hover:text-[#3676BA] font-medium transition-colors cursor-pointer py-2 border-b border-gray-100"
                >
                  Projekte
                </a>
              <Link
                href="/kontakt"
                onClick={() => setIsMenuOpen(false)}
                className="text-black hover:text-[#3676BA] font-medium transition-colors py-2 border-b border-gray-100"
              >
                Kontakt
              </Link>
                <Link
                  href="/impressum"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-black hover:text-[#3676BA] font-medium transition-colors py-2"
                >
                  Impressum
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
