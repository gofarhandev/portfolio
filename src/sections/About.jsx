import React, { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import AnimatedTextLines from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  const imgRef = useRef(null);

  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
      },
      ease: "power1.inOut",
    });

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  });

  return (
    <section id="about" className="min-h-screen bg-black rounded-b-4xl">
      <AnimatedHeaderSection
        subTitle={`Code with purpose, Built to scale`}
        title={`About`}
        text={`Passionate about clean architecture I build 
        scalable high-performance solutions 
        from prototype to production`}
        textColor={`text-white border-white`}
        withScrollTrigger={true}
      />

      <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/80">
        <img
          ref={imgRef}
          src="https://ik.imagekit.io/iura/Portfolio-project/portfolio.jpg?updatedAt=1759214808426"
          alt="Farhan Sadik"
          className="w-md rounded-3xl"
        />
        <AnimatedTextLines
          text={`Obsessed with building fast, intuitive web experiences—from sleek, pixel-perfect React UIs to reliable, scalable backends. Every line of code is a promise: quality that users feel.
  Beyond coding, you’ll find me:
⚡ Innovating through open-source projects (or collaborating on yours)
🎥 Sharing knowledge with developers on Twitch & YouTube—because growth is collective
🧗 Tackling challenges in rock climbing (problem-solving with real stakes)
🎸 Jamming on guitar while CI pipelines run (multitasking at its finest)`}
          className={`w-full`}
        />
      </div>
    </section>
  );
};

export default About;
