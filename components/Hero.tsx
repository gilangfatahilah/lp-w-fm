import Image from "next/image";

import designExample1 from "@/assets/images/design-example-1.png";
import designExample2 from "@/assets/images/design-example-2.png";
import Button from "./ui/Button";
import Pointer from "./ui/Pointer";

const Hero = () => {
  return (
    <section className="py-24 overflow-x-clip">
      <div className="container relative">
        <div className="absolute hidden lg:block -left-32 top-16">
          <Image src={designExample1} alt="Design Example 1" />
        </div>

        <div className="absolute hidden lg:block -right-64 -top-16">
          <Image src={designExample2} alt="Design Example 2" />
        </div>

        <div className="absolute hidden lg:block left-56 top-96">
          <Pointer name="Orion" color="blue" />
        </div>

        <div className="absolute hidden lg:block right-80 -top-4">
          <Pointer name="Artemis" color="red" />
        </div>

        <div className="flex justify-center">
          <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400  to-pink-400 rounded-full text-neutral-950 font-semibold">
            ✨ 12.10M seed round raised
          </div>
        </div>

        <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6 ">
          Impactful design, created effortlessly
        </h1>

        <p className="text-xl text-white/50 text-center mt-8 max-w-2xl mx-auto">
          Design tools shouldn't slow you down. Layers combines powerful
          features with an intuitive interface that keeps you in your creative
          flow.
        </p>

        <form className="flex justify-between border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-transparent px-4 focus:outline-none flex-1"
          />
          <Button
            type="submit"
            variant="primary"
            size="sm"
            className="whitespace-nowrap"
          >
            Sign Up
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
