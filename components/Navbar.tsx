"use client";

import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import Button from "./ui/Button";
import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "FAQs", href: "#faqs" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <section className="py-4 lg:py-8 sticky top-0 z-50">
      <div className="container max-w-5xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-3 items-center border border-white/15 rounded-full p-2 px-4 md:pr-2 bg-neutral-950/70 backdrop-blur">
          <div>
            <Image
              src={logo}
              alt="Logo Image"
              className="h-9 md:h-auto w-auto ml-2"
            />
          </div>
          <div className="hidden md:flex justify-center items-center">
            <nav className="flex gap-6 font-medium">
              {navLinks.map((link) => (
                <Link href={link.href} key={link.label}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex justify-end gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <line
                x1="3"
                y1="18"
                x2="21"
                y2="18"
                className={twMerge(
                  "origin-left transition",
                  isOpen && "-rotate-45 translate-y-1"
                )}
              ></line>
              <line
                x1="3"
                y1="12"
                x2="21"
                y2="12"
                className={twMerge("transition-opacity", isOpen && "opacity-0")}
              ></line>
              <line
                x1="3"
                y1="6"
                x2="21"
                y2="6"
                className={twMerge(
                  "origin-left transition",
                  isOpen && "rotate-45 -translate-y-1"
                )}
              ></line>
            </svg>
            <Button
              variant="secondary"
              className="hidden md:inline-flex items-center"
            >
              Log In
            </Button>
            <Button
              variant="primary"
              className="hidden md:inline-flex items-center"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
