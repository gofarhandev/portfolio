import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import AnimatedTextLines from "./AnimatedTextLines";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const AnimatedHeaderSection = ({
  subTitle,
  title,
  text,
  textColor,
  withScrollTrigger = false,
}) => {
  const contextRef = useRef(null);
  const headerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: withScrollTrigger
        ? {
            trigger: contextRef.current,
          }
        : undefined,
    });

    tl.from(contextRef.current, {
      y: "50vh",
      duration: 0.8,
      ease: "circ.out",
    });
    tl.from(
      headerRef.current,
      {
        opacity: 0,
        y: "200",
        duration: 0.8,
        ease: "circ.out",
      },
      "<+0.2"
    );
  }, []);

  return (
    <div ref={contextRef}>
      <div style={{ clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)" }}>
        <div
          ref={headerRef}
          className="flex flex-col justify-center gap-12 pt-16 sm:gap-16"
        >
          <p
            className={`text-sm font-light tracking-[0.5rem] uppercase px-10 ${textColor}`}
          >
            {subTitle}
          </p>
          <div className="px-10">
            <h1
              className={`flex flex-col flex-nowrap gap-6 sm:gap-12 md:gap-16 uppercase banner-text-responsive sm:block leading-tight sm:leading-[4rem] md:leading-[5rem] lg:leading-[5rem] -ml-2 ${textColor}`}
            >
              {title}
            </h1>
          </div>
        </div>
      </div>

      <div className={`relative px-10  ${textColor}`}>
        <div
          className={`absolute border-t-2 border-black w-screen left-0 ${textColor}`}
        />
        <div className="py-12 sm:py-16 text-end">
          <AnimatedTextLines
            text={text}
            className="font-light uppercase value-text-responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default AnimatedHeaderSection;
