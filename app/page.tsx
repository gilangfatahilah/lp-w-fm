import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import LogoTicker from "@/components/LogoTicker";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoTicker />
      <Introduction />
    </>
  );
}
