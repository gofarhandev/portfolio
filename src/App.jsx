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
import { Helmet, HelmetProvider } from "react-helmet-async";

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
    <HelmetProvider>
      {/* SEO Helmet */}
      <Helmet>
        <title>Farhan Sadik | Full Stack Developer | Portfolio</title>
        <meta
          name="description"
          content="ফারহান সাদিক একজন ফুল স্ট্যাক ডেভেলপার। তিনি ফ্রিল্যান্সিং সার্ভিস দিয়ে থাকেন। তার পোর্টফোলিও দেখতে ভিজিট করুন।"
        />
        <meta
          name="keywords"
          content="Farhan Sadik, md Farhan, md Farhan Sadik, Farhan, Full stack developer, fullstack developer, web developer, software developer, freelance developer, MERN stack, React developer, Node.js, Express.js, MongoDB, JavaScript, Tailwind CSS, portfolio website, custom web applications, ফ্রিল্যান্সার, ফ্রিল্যান্সিং, পোর্টফোলিও, ওয়েব ডেভেলপার, ওয়েবসাইট তৈরি, ওয়েবসাইট ডিজাইন, ওয়েব ডিজাইন, সফটওয়্যার ডেভেলপার, ফ্রন্টএন্ড ডেভেলপার, ব্যাকএন্ড ডেভেলপার, ফ্রিল্যান্সিং সার্ভিস, ফুল স্ট্যাক ডেভেলপার বাংলাদেশ"
        />
      </Helmet>

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

          {/* Services Section */}
          <Services id="services">
            <h2>Services</h2>
            <p>
              I provide frontend & backend development services using modern
              tech stack like React, Node.js, Tailwind CSS, and more.
            </p>
          </Services>

          {/* About Section */}
          <About id="about">
            <h1>About Me</h1>
            <p>
              Farhan Sadik is a Fullstack Web Developer specializing in frontend
              & backend development using React, Node.js, Tailwind CSS, and
              modern technologies.
            </p>
          </About>

          {/* Works / Projects Section */}
          <Works id="work">
            <h2>Projects & Works</h2>
            <p>
              Check out some of my React and fullstack projects demonstrating
              modern web development and clean code practices.
            </p>
          </Works>

          {/* Contact Section */}
          <ContactSummary id="contact-summary" />
          <Contact id="contact">
            <h2>Contact Me</h2>
            <p>
              Get in touch for collaborations, freelance projects, or queries.
            </p>
          </Contact>
        </ReactLenis>
      )}
    </HelmetProvider>
  );
};

export default App;
