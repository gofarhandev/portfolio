import React from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { socials } from "../constants";
import { Marquee } from "../components/Marquee";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Contact = () => {
  const items = [
    "Just imagin, I code",
    "Just imagin, I code",
    "Just imagin, I code",
    "Just imagin, I code",
    "Just imagin, I code",
  ];

  useGSAP(() => {
    gsap.from(".social-link", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.3,
      ease: "back.out",
      scrollTrigger: {
        trigger: ".social-link",
      },
    });
  }, []);

  return (
    <section
      id="contact"
      className="flex flex-col justify-between min-h-screen bg-black"
    >
      <div>
        <AnimatedHeaderSection
          subTitle={`You Dream It, I Code It`}
          title={`Contact`}
          text={`Got a question, how or project Idea? 
            WE'D love to hear from you 
            and discus further!`}
          textColor={`text-white border-white`}
          withScrollTrigger={true}
        />

        {/* connect */}
        <div className="flex px-10 font-light text-white uppercase lg:text-[32px] text-[26px] leading-none mb-10">
          <div className="flex flex-col w-full gap-10">
            <div className="social-link">
              <h2>E-mail</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <p className="text-xl tracking-wider md:text-2xl lg:text-3xl lowercase">
                farhansadik0760@gmail.com
              </p>
            </div>

            <div className="social-link">
              <h2>Phone</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <p className="text-xl tracking-wider md:text-2xl lg:text-3xl lowercase">
                +880 1703 022276
              </p>
            </div>

            <div className="social-link">
              <h2>Social Media</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <div className="flex flex-wrap gap-2">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    aria-label={`Visit my ${social.name} profile`}
                    className="text-xs leading-loose tracking-widest uppercase md:text-sm hover:text-white/80 transition-colors duration-200"
                  >
                    {"{ "}
                    {social.name} {" }"}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Marquee
        items={items}
        className="text-white bg-transparent"
        icon="material-symbols-light:square"
        iconClassName="stroke-gold stroke-2 text-primary"
      />
    </section>
  );
};

export default Contact;
