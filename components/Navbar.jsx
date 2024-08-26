import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <nav className="p-5">
        <ul className="flex justify-center gap-x-7 font-bold list-none">
          <li>
            <Link href="/" className="no-underline text-black">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="no-underline  text-black">
              About
            </Link>
          </li>
          <li>
            <Link href="/blog" className="no-underline  text-black">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" className="no-underline  text-black">
              Contact us
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
