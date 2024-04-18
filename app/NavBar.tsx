"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { SiWorkplace } from "react-icons/si";
import classNames from "classnames";

const NavBar = () => {
  const currentPath = usePathname();
  //creates a JSON to hold all the attributes
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
            className={classNames({
              "text-green-600": link.href == currentPath,
              "text-black-800": link.href != currentPath,
              "hover:text-green-500 transition-colors": true,
            })}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
