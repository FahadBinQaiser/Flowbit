import React from "react";
import "./ProblemSection.css";
import { DollarSign, Users, Clock } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: DollarSign,
      title: "Traffic Investment Waste",
      problem: "You spend $$$ bringing in traffic.",
      impact: "80% of visitors bounce without leaving a trace.",
      iconColor: "text-[#C084FC]",
    },
    {
      icon: Clock,
      title: "Slow Lead Processing",
      problem: "Manual lead scoring takes days.",
      impact: "Hot leads go cold while you're still analyzing.",
      iconColor: "text-[#7C3AED]",
    },
    {
      icon: Users,
      title: "Legacy System Bottleneck",
      problem: "Legacy CRMs slow you down.",
      impact: "Your team fights the system instead of closing deals.",
      iconColor: "text-[#C084FC]",
    },
  ];

  return (
    <section className="problem-section relative py-24 px-4 sm:px-8 lg:px-0 overflow-hidden">
      <div className="mx-auto max-w-6xl text-center space-y-4">
        <div className="space-y-6">
          <h2 className="text-5xl py-3 md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#C084FC] via-[#7C3AED] to-[#C084FC] tracking-tight drop-shadow-lg">
            Your funnel is leaking revenue.
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#C084FC] to-[#7C3AED] mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-4 pt-4 max-w-5xl mx-auto">
          {problems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="problem-card relative rounded-2xl p-8 bg-gradient-to-br from-[#1e1932]/90 via-[#2d1a3a]/90 to-[#111827]/90 border border-[#C084FC]/30 backdrop-blur-lg transition-all duration-300 hover:scale-105 hover:border-[#C084FC]/60"
              >
                <div className="card-glow" />
                <div className="relative z-10 space-y-6">
                  <div className="flex justify-center">
                    <div className="p-4 rounded-full bg-gray-900/50 border border-[#7C3AED]/40">
                      <IconComponent
                        className={`w-8 h-8 ${item.iconColor} drop-shadow-2xl`}
                      />
                    </div>
                  </div>
                  <h3 className="text-3xl text-balance font-bold text-[#C084FC]">
                    {item.title}
                  </h3>
                  <div className=" text-xl text-pretty text-center">
                    <p className="text-[#C084FC]/80 text-lg font-medium">
                      {item.problem}
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {item.impact}
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#C084FC]/40 via-[#7C3AED]/40 to-transparent rounded-b-2xl opacity-70" />
              </div>
            );
          })}
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="result-highlight rounded-2xl p-8 bg-gradient-to-r from-[#1e1932]/90 via-[#2d1a3a]/90 to-[#111827]/90 border border-[#7C3AED]/30 backdrop-blur-lg">
            <p className="text-xl md:text-2xl font-bold text-gray-200 leading-relaxed">
              The result?{" "}
              <span className="text-[#C084FC] ">
                A pipeline full of noise and missed opportunities.
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="absolute top-10 left-10 w-32 h-32 bg-[#C084FC]/10 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#7C3AED]/10 rounded-full blur-3xl opacity-50" />
    </section>
  );
};

export default ProblemSection;
