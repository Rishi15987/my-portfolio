"use client"
import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import Navigation from "@/components/Navigation";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [showNav, setShowNav] = useState(false);
  const introRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowNav(!entry.isIntersecting);
      },
      { threshold: 0.1}
    );
    if (introRef.current) {
      observer.observe(introRef.current);
    }

    return () => {
      if (introRef.current) {
        observer.unobserve(introRef.current);
      }
    };
  }, []);
  return (
    <div className="relative">
      {showNav && <Navigation/>}
      <div ref={introRef} id="intro">
        <Intro/>
      </div>
      <div id="about">
        <About/>
      </div>
      <div id="work">
        <Work/>
      </div>
      <div id="skills">
        <Skills/>
      </div>
      <div id="experience">
        <Experience/>
      </div>
      <div id="contact">
        <Contact/>
      </div>
      <Footer/>
    </div>
  );
}
