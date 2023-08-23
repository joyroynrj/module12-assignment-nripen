"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  let currentRoute = usePathname();

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            {/* for mobile */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link
                  href={{
                    pathname: "/",
                  }}
                  className={
                    currentRoute === "/" ? "activeLink" : "pendingLink"
                  }
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={{
                    pathname: "/about",
                  }}
                  className={
                    currentRoute === "/about" ? "activeLink" : "pendingLink"
                  }
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href={{
                    pathname: "/blog",
                  }}
                  className={
                    currentRoute === "/blog" ? "activeLink" : "pendingLink"
                  }
                >
                  Bangla News
                </Link>
              </li>
              <li>
                <Link
                  href={{
                    pathname: "/contact",
                  }}
                  className={
                    currentRoute === "/contact" ? "activeLink" : "pendingLink"
                  }
                >
                  Bangla News
                </Link>
              </li>
            </ul>
            {/* end */}
          </div>
          <a className="btn btn-ghost normal-case text-xl italic">TOP <span className="text-purple-800">NEWS</span></a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link
                href={{
                  pathname: "/",
                }}
                className={currentRoute === "/" ? "activeLink" : "pendingLink"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={{
                  pathname: "/about",
                }}
                className={
                  currentRoute === "/about" ? "activeLink" : "pendingLink"
                }
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href={{
                  pathname: "/blog",
                }}
                className={
                  currentRoute === "/blog" ? "activeLink" : "pendingLink"
                }
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href={{
                  pathname: "/contact",
                }}
                className={
                  currentRoute === "/contact" ? "activeLink" : "pendingLink"
                }
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
    
      </div>
    </>
  );
};

export default Navbar;
