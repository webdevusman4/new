import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

const steps = [
  {
    no: "01",
    title: "The Foundation",
    text: "Years on the front lines of sales and marketing inside leading corporations built a deep, practical understanding of how revenue is really won — and how teams really perform.",
    tag: "Early career & corporate expertise",
  },
  {
    no: "02",
    title: "The Trainer",
    text: "As a Certified Corporate Trainer and Motivational Speaker, Iftikhar turned hard-earned field lessons into programs that have equipped thousands of professionals across Pakistan.",
    tag: "Certified Corporate Trainer & Motivational Speaker",
  },
  {
    no: "03",
    title: "The Entrepreneur",
    text: "The leap from advising businesses to building them: today Iftikhar is the Founder & CEO of multiple ventures across packaging, property and professional development.",
    tag: "Founder & CEO",
  },
];

export default function Journey() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState<boolean[]>([false, false, false]);

  useEffect(() => {
    const update = () => {
      const wrap = wrapRef.current;
      if (!wrap) return;
      const rect = wrap.getBoundingClientRect();
      const trigger = window.innerHeight * 0.6;
      const p = Math.min(1, Math.max(0, (trigger - rect.top) / rect.height));
      setProgress(p);
      setActive(
        nodeRefs.current.map((n) => (n ? n.getBoundingClientRect().top < trigger : false))
      );
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section id="journey" className="bg-mist py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto mb-24 max-w-3xl text-center">
          <p className="mb-5 text-[14px] font-medium uppercase tracking-[0.14em] text-azure">
            From 0 to 100
          </p>
          <h2 className="h2-section">A Journey of 15+ Years</h2>
        </Reveal>

        <div ref={wrapRef} className="relative">
          {/* base line */}
          <div className="absolute bottom-0 left-[11px] top-0 w-px bg-royal/15 md:left-1/2 md:-translate-x-1/2" />
          {/* progress line */}
          <div
            className="absolute left-[11px] top-0 w-px bg-royal md:left-1/2 md:-translate-x-1/2"
            style={{ height: `${progress * 100}%` }}
          />

          <div className="flex flex-col gap-24 md:gap-40">
            {steps.map((s, i) => {
              const left = i % 2 === 0;
              const on = active[i];
              return (
                <div
                  key={s.no}
                  ref={(el) => {
                    nodeRefs.current[i] = el;
                  }}
                  className="relative grid grid-cols-1 md:grid-cols-2"
                >
                  {/* node */}
                  <div className="absolute left-0 top-2 z-10 md:left-1/2 md:-translate-x-1/2">
                    <div
                      className={`h-[23px] w-[23px] rounded-full border border-royal transition-all duration-700 ${
                        on ? "scale-110 bg-royal" : "bg-mist"
                      }`}
                      style={on ? { boxShadow: "0 0 0 8px rgba(65,133,244,0.18)" } : undefined}
                    />
                  </div>

                  <div
                    className={`pl-14 transition-all duration-700 md:pl-0 ${
                      left ? "md:col-start-1 md:pr-24 md:text-right" : "md:col-start-2 md:pl-24"
                    } ${on ? "translate-y-0 opacity-100" : "translate-y-6 opacity-30"}`}
                  >
                    <span className="mb-4 block text-[14px] font-medium tracking-[0.14em] text-azure">
                      {s.no}
                    </span>
                    <h3 className="h3-title !text-[32px]">{s.title}</h3>
                    <p className="mt-2 text-[14px] font-medium uppercase tracking-[0.1em] text-royal">
                      {s.tag}
                    </p>
                    <p className="body-text mt-5">{s.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
