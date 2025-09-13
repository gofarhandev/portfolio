import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const ServiceSummary = () => {
  useGSAP(() => {
    gsap.to("#title-service-1", {
      xPercent: 20,
      scrollTrigger: {
        target: "#title-service-1",
        scrub: true,
      },
    });
    gsap.to("#title-service-2", {
      xPercent: -30,
      scrollTrigger: {
        target: "#title-service-2",
        scrub: true,
      },
    });
    gsap.to("#title-service-3", {
      xPercent: 100,
      scrollTrigger: {
        target: "#title-service-3",
        scrub: true,
      },
    });
    gsap.to("#title-service-4", {
      xPercent: -100,
      scrollTrigger: {
        target: "#title-service-4",
        scrub: true,
      },
    });
  });

  return (
    <section className="mt-20 overflow-hidden font-light leading-snug text-center mb-42 contact-text-responsive space-y-6">
      {/* Service 1 */}
      <div id="title-service-1">
        <p className="">Architecture</p>
      </div>

      {/* Service 2 */}
      <div
        id="title-service-2"
        className="flex flex-row items-center justify-center gap-2 sm:gap-3 md:translate-x-16"
      >
        <p className="font-normal">Development</p>
        <div className="w-10 h-1 md:w-32 bg-gold shrink-0" />
        <p>Deployment</p>
      </div>

      {/* Service 3 */}
      <div
        id="title-service-3"
        className="flex flex-row items-center justify-center gap-2 sm:gap-3 md:-translate-x-24 lg:-translate-x-48"
      >
        <p className="italic">Frontends</p>
        <div className="w-10 h-1 md:w-32 bg-gold  shrink-0" />
        <p>Responsive</p>
      </div>

      {/* Service 4 */}
      <div
        id="title-service-4"
        className="flex flex-row items-center justify-center gap-2 sm:gap-3 md:translate-x-24 lg:translate-x-48"
      >
        <p>APIs</p>
        <div className="w-10 h-1 md:w-32 bg-gold  shrink-0" />
        <p className="italic">Backends</p>
      </div>
    </section>
  );
};

export default ServiceSummary;
