import AnimatedHeaderSection from "../components/AnimatedHeaderSection";

const Hero = () => {
  return (
    <section id="home" className="flex flex-col justify-end min-h-screen ">
      <AnimatedHeaderSection
        subTitle={`404 No Bugs Found`}
        title={`MD Farhan`}
        text={`I empower growing brands & startups with 
                    high-performing, design-driven websites 
                    that create an unfair advantage.`}
                    textColor={`text-black border-black`}
      />
    </section>
  );
};

export default Hero;
