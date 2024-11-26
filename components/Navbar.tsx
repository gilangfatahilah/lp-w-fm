"use client";

import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import Button from "./ui/Button";
import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "FAQs", href: "#faqs" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <header className="py-4 lg:py-8 fixed w-full top-0 z-50">
        <div className="container max-w-5xl">
          <div className="border border-white/15 rounded-[27px] md:rounded-full bg-neutral-950/70 backdrop-blur">
            <div className="grid grid-cols-2 lg:grid-cols-3 items-center p-2 px-4 md:pr-2">
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
                    <Link
                      href={link.href}
                      key={link.label}
                      className="relative group"
                    >
                      <span>{link.label}</span>
                      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-lime-400 transition-all duration-300 group-hover:w-full rounded-full" />
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
                    className={twMerge(
                      "transition-opacity",
                      isOpen && "opacity-0"
                    )}
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
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-col items-center gap-4 py-2">
                    {navLinks.map((link) => (
                      <Link
                        href={link.href}
                        key={link.label}
                        className="relative group"
                      >
                        <span>{link.label}</span>
                        <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-lime-400 transition-all duration-300 group-hover:w-full rounded-full" />
                      </Link>
                    ))}
                    <Button variant="secondary">Log In</Button>
                    <Button variant="primary">Sign Up</Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </header>

      <div className="pb-[86px] md:pb-[98px] lg:pb-[130px]" />
    </>
  );
};

export default Navbar;
