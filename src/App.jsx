import React, { useState, useEffect } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import ServiceSummary from "./sections/ServiceSummary";
import Services from "./sections/Services";
import ReactLenis from "lenis/react";
import About from "./sections/About";
import Works from "./sections/Works";
import ContactSummary from "./sections/ContactSummary";
import Contact from "./sections/Contact";
import gsap from "gsap";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setProgress((old) => {
        if (old >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 800);
          return 100;
        }
        return old + 2;
      });
    }, 50);
  }, []);

  // GSAP Text Animation
  useEffect(() => {
    if (loading) {
      gsap.fromTo(
        ".loader-text span",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          ease: "power3.out",
          duration: 0.6,
        }
      );
    }
  }, [loading]);

  return (
    <>
      {/* Loader */}
      {loading && (
        <div
          className={`fixed inset-0 z-[999] flex flex-col items-center justify-center 
          bg-black text-white font-light transition-opacity duration-700`}
        >
          {/* Animated Text */}
          <p className="loader-text mb-6 flex gap-1 text-2xl tracking-[0.2em] uppercase overflow-hidden">
            {"Assalamu Alaikum".split("").map((char, i) => (
              <span key={i}>{char}</span>
            ))}
          </p>

          {/* Progress Text */}
          <p className="mb-4 text-sm tracking-widest">
            Loading {Math.floor(progress)}%
          </p>

          {/* Progress Bar */}
          <div className="relative h-1 overflow-hidden rounded w-60 bg-white/20">
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-white via-gray-200 to-white 
              animate-[shine_1.5s_linear_infinite]"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      )}

      {/* Main App */}
      {!loading && (
        <ReactLenis
          root
          className="relative w-screen min-h-screen overflow-x-hidden"
        >
          <Navbar />
          <Hero />
          <ServiceSummary />
          <Services />
          <About />
          <Works />
          <ContactSummary />
          <Contact />
        </ReactLenis>
      )}
    </>
  );
};

export default App;
