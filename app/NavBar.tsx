import { link } from "fs";
import Link from "next/link";
import React from "react";
import { SiWorkplace } from "react-icons/si";

const NavBar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  return (
    <nav className="flex space-x-7 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <SiWorkplace size={45} color="green" />
      </Link>
      <ul className="flex space-x-7">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-black-800 hover:text-green-400 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
