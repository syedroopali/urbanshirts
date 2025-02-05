"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <>
      {/*  */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto flex flex-col items-center justify-between sm:flex-row px-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
          <nav className="mt-4 sm:mt-0">
            <ul className="flex space-x-6">
              <li>
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
};

export default Footer;
