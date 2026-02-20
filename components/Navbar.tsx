'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { label: 'Platform', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/90 backdrop-blur-md shadow-sm border-b border-border' 
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auhref px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl shadow-md">W</div>
            <span className="font-bold text-xl tracking-tight text-foreground font-sans">Wihda</span>
          </Link>
          
          <div className="hidden md:flex space-x-8 items-center">
            {NAV_ITEMS.map((item) => (
              <Link 
                key={item.label}
                href={item.href}
                className={`text-sm lg:text-base font-sans font-medium transition-colors ${
                  location === item.href 
                    ? 'text-primary' 
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link 
              href="/download"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-0.5 flex items-center gap-2"
            >
              <span className="material-icons text-sm">download</span>
              Download App
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-muted-foreground hover:text-primary p-2"
              aria-label="toggle menu"
            >
              <span className="material-icons text-3xl">{mobileMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-border shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-muted"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                href="/download"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-3 rounded-lg font-bold shadow-md flex items-center justify-center gap-2"
              >
                <span className="material-icons text-sm">download</span>
                Download App
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};