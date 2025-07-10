'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold font-pacifico">
            DesiGovTools
          </Link>
          
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-blue-200 transition-colors">
              હોમ
            </Link>
            <Link href="/tools" className="hover:text-blue-200 transition-colors">
              ટૂલ્સ
            </Link>
            <Link href="/blog" className="hover:text-blue-200 transition-colors">
              બ્લોગ
            </Link>
            <Link href="/about" className="hover:text-blue-200 transition-colors">
              અમારા વિશે
            </Link>
            <Link href="/contact" className="hover:text-blue-200 transition-colors">
              સંપર્ક
            </Link>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="ri-menu-line text-xl"></i>
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block py-2 hover:text-blue-200">
              હોમ
            </Link>
            <Link href="/tools" className="block py-2 hover:text-blue-200">
              ટૂલ્સ
            </Link>
            <Link href="/blog" className="block py-2 hover:text-blue-200">
              બ્લોગ
            </Link>
            <Link href="/about" className="block py-2 hover:text-blue-200">
              અમારા વિશે
            </Link>
            <Link href="/contact" className="block py-2 hover:text-blue-200">
              સંપર્ક
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}