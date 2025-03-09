import About from "@/components/About";
import Intro from "@/components/Intro";
import Navigation from "@/components/Navigation";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
      <Navigation/>
      <Intro/>
      <About/>
    </div>
  );
}
