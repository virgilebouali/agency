"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MenuIcon, XIcon } from 'lucide-react';

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="lg:hidden sm:flex flex justify-between">
      <Image
        className="block h-45  w-45 lg:hidden items-center justify-center -mt-8"
        src={'/assets/logo/logo5.png'}
        alt="dsign-logo"
        width={200}
        height={100}
      />
      {/* Utilise MenuIcon ou XIcon selon l'état du menu */}
      {isMenuOpen ? (
        <XIcon
          className="items-center justify-center mt-14 mr-8 text-white cursor-pointer"
          onClick={toggleMenu}
        />
      ) : (
        <MenuIcon
          className="items-center justify-center mt-14 mr-8 text-white cursor-pointer"
          onClick={toggleMenu}
        />
      )}
      {isMenuOpen && (
        <div className="absolute top-24 right-8 bg-black w-56 py-2 rounded-lg shadow-sm shadow-midnightblue">
          <ul className="text-white text-left">
            <li className="py-1">
              <Link href="#" className="block px-4 py-2 hover:bg-gray-700">Nos services</Link>
            </li>
            <li className="py-1">
              <Link href="#" className="block px-4 py-2 hover:bg-gray-700">Projets</Link>
            </li>
            <li className="py-1">
              <Link href="#" className="block px-4 py-2 hover:bg-gray-700">Nos Offres</Link>
            </li>
            <li className="py-1">
              <Link href="#" className="block px-4 py-2 hover:bg-gray-700 text-blue-500 font-bold">Prendre rendez-vous</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default MobileNav;
