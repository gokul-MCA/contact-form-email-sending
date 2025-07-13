'use client';

import { HeaderItem } from 'src/utlis/data';

import React, { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import {
  ArrowUpIcon,
  Cross1Icon,
  ExternalLinkIcon,
  HamburgerMenuIcon,
} from '@radix-ui/react-icons';
import Image from 'next/image';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hasscrolled, setHasScrolled] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  // Detect scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 24) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle scrolling state
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 90);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Toggle mobile menu
  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  return (
    <header className=''>
      <div
        className={`w-full fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b-2 p-2 backdrop-blur-xl lg:justify-around text-green-700 ${
          scrolling
            ? 'border border-b-2 bg-transparent '
            : 'bg-primary bg-opacity-90  '
        }`}
      >
        <Link href='/' className='w-fit'>
          <Image
            src='/logo.png'
            alt='logo'
            height='60'
            width='60'
            loading='eager'
            className='h-12 w-12 rounded-full border-2 border-green-800 bg-green-600 object-cover transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-dominant lg:h-16 lg:w-16'
          />
          <span className='sr-only'>Click Logo to redirect/reload home</span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label='Global'
          className='hidden rounded-full transition-all duration-300 lg:block'
        >
          <ul className='flex items-center justify-around'>
            {HeaderItem.map((item) => (
              <li key={item.href}>
                <Link
                  className={`inline-flex rounded-full px-5 py-2 font-medium transition-all duration-300 gap-1 `}
                  href={item.href}
                >
                  {item.title}
                  <ExternalLinkIcon width={20} height={20} />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <aside aria-label='Mobile Global Navigation' className='flex lg:hidden'>
          {/* Mobile Menu Button */}
          <button
            type='button'
            onClick={toggleMobileMenu}
            className={`z-10 rounded-md border p-2 ${
              mobileMenuOpen ? 'border-black' : 'border-green-700'
            }`}
          >
            <span className='sr-only'>
              {mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
            </span>
            {mobileMenuOpen ? (
              <Cross1Icon className='h-5 w-5 text-black' />
            ) : (
              <HamburgerMenuIcon className='h-5 w-5 text-green-700' />
            )}
          </button>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <nav
              aria-label='Global'
              className='absolute left-0 top-0 h-fit w-full bg-primary bg-opacity-90 text-center transition-all duration-300 ease-in-out'
            >
              <ul className='mt-10 space-y-4 py-4'>
                {HeaderItem.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className='block rounded-md border-2 border-primary px-4 py-2 hover:border-secondary hover:text-secondary'
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </aside>
      </div>

      {hasscrolled && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className='fixed bottom-2 right-2 flex md:h-12 md:w-12 cursor-pointer rounded-full bg-neutral-800 p-2 text-green-500 shadow-lg transition-transform hover:scale-110 md:bottom-6 md:right-6 lg:bottom-10 lg:right-10 '
          aria-label='Scroll to top'
        >
          <ArrowUpIcon height={24} width={24} fill='green' className='m-auto' />
        </button>
      )}
    </header>
  );
};

export default Header;
