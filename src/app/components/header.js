"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import logo from "../../../public/logo.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black py-4 px-6 md:px-12 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="relative h-8 w-8 mr-2 bg-blue-600">
            <Image
              src={logo}
              alt="TNC Crypto Logo"
              width={64}
              height={64}
              sizes="16"
              className="object-contain"
            />
          </div>
          <span className="text-xl font-bold text-yellow-400">TNC CRYPTO</span>
        </Link>

        {/* Mobile menu button */}
        <button className="lg:hidden text-gray-400" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          <Link href="#Home" className="text-yellow-400 hover:text-yellow-300">
            Home
          </Link>
          <Link href="#about" className="text-white hover:text-yellow-300">
            About
          </Link>
          <Link href="#whychoose" className="text-white hover:text-yellow-300">
            Why Choose Us
          </Link>
          <Link href="#services" className="text-white hover:text-yellow-300">
            Services
          </Link>
          <Link href="#pricing" className="text-white hover:text-yellow-300">
            Pricing
          </Link>
          <Link href="#faq" className="text-white hover:text-yellow-300">
            FAQ
          </Link>
          <Link
            href="/contact"
            className="bg-teal-500 hover:bg-teal-600 text-white px-5 py-2 rounded-md transition-colors"
          >
            Contact Us
          </Link>
         
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-gray-900 z-50 p-4">
            <nav className="flex flex-col space-y-4 text-center ">
              <Link
                href="/"
                className="text-yellow-400 hover:text-yellow-300 py-2 border-b border-gray-700"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-white hover:text-yellow-300 py-2 border-b border-gray-700"
              >
                About
              </Link>
              <Link
                href="/why-choose-us"
                className="text-white hover:text-yellow-300 py-2 border-b border-gray-700"
              >
                Why Choose Us
              </Link>
              <Link
                href="/services"
                className="text-white hover:text-yellow-300 py-2 border-b border-gray-700"
              >
                Services
              </Link>
              <Link
                href="/pricing"
                className="text-white hover:text-yellow-300 py-2 border-b border-gray-700"
              >
                Pricing
              </Link>
              <Link
                href="/faq"
                className="text-white hover:text-yellow-300 py-2 border-b border-gray-700"
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="bg-teal-500 hover:bg-teal-600 mx-auto text-white px-4 py-2 rounded-md transition-colors text-center"
              >
                Contact Us
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
