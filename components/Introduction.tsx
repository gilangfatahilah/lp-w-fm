"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";

import Tag from "./ui/Tag";
import { twMerge } from "tailwind-merge";

const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;
const words = text.split(" ");

export default function Introduction() {
  const scrollTarget = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start end", "end end"],
  });
  const [currentWord, setCurrentWord] = useState<number>(0);
  const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

  useEffect(() => {
    const unsubscribe = wordIndex.on("change", (latest) => {
      setCurrentWord(Math.floor(latest));
    });
    return () => unsubscribe();
  }, [wordIndex]);

  return (
    <section className="py-28 lg:py-40">
      <div className="container">
        <div className="sticky top-20 md:top-28 lg:top-40">
          <div className="flex justify-center">
            <Tag>Introducing Layers </Tag>
          </div>
          <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10">
            <span>Your creative process deserves better.</span>{" "}
            <span>
              {words.map((word, index) => {
                const isHighlighted = index < currentWord;
                return (
                  <span
                    key={index}
                    className={twMerge(
                      "transition duration-500 text-white/15",
                      isHighlighted && "text-white"
                    )}
                  >{`${word} `}</span>
                );
              })}
            </span>
            <span className="text-lime-400 block">
              That's why we built layers.
            </span>
          </div>
        </div>
        <div ref={scrollTarget} className="h-[150vh]" />
      </div>
    </section>
  );
}
