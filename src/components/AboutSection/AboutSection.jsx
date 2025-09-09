import React from "react";
import { Box, Code, Rocket } from "lucide-react";
import "./AboutSection.css";

const AboutSection = () => {
  const cards = [
    {
      icon: <Box className="w-12 h-12 text-[#C084FC]" />,
      title: "Design",
      desc: "Conversion-first UI/UX that guides visitors to act. Every screen is optimized to turn clicks into signups and demos — not just look pretty.",
    },
    {
      icon: <Code className="w-12 h-12 text-[#C084FC]" />,
      title: "Development",
      desc: "Fast, scalable, and modern code built with React and Tailwind. We ensure your pages are fully responsive and optimized for performance.",
    },
    {
      icon: <Rocket className="w-12 h-12 text-[#C084FC]" />,
      title: "Growth",
      desc: "Optimized funnels, A/B-tested CTAs, and clear messaging. We help SaaS teams capture leads faster and convert traffic into paying customers.",
      fullOnSmall: true,
    },
  ];

  return (
    <section className="relative py-20 bg-[#0f0b1e] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-6xl headline-gradient font-extrabold text-[#C084FC] mb-4 tracking-wide">
            Here's what Flowbit can do for you
          </h2>
          <p className="text-gray-300 body_font max-w-2xl mx-auto text-lg">
            We help SaaS teams build landing pages that convert in under 5
            seconds. From sleek design to rock-solid development, we deliver
            premium experiences that drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`card-base rounded-3xl p-8 w-full group ${
                card.fullOnSmall ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="card-glow-purple" />
              <div className="flex items-center justify-center mb-6">
                {card.icon}
              </div>
              <h3 className="text-3xl font-bold text-[#C084FC] mb-3">
                {card.title}
              </h3>
              <p className="text-gray-300 body_font leading-relaxed">
                {card.desc}
              </p>
              <div className="card-bottom-bar" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
