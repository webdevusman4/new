import { useState } from "react";
import Reveal from "./Reveal";
import training from "../assets/training.jpg";
import consultancy from "../assets/consultancy.jpg";
import advisory from "../assets/advisory.jpg";

const services = [
  {
    no: "01",
    title: "Corporate Training",
    items: ["Advanced Sales Strategies", "Leadership Development", "Team Performance"],
    img: training,
  },
  {
    no: "02",
    title: "Business Consultancy",
    items: ["Revenue Growth Strategy", "Sales System Development", "Payment Recovery"],
    img: consultancy,
  },
  {
    no: "03",
    title: "Specialized Advisory",
    items: ["Stock Market Investment", "Financial Planning", "Career Counseling"],
    img: advisory,
  },
];

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <h2 className="h2-section max-w-2xl">Current Stages &amp; Core Capabilities</h2>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-16 lg:grid-cols-5">
          <ul className="lg:col-span-3">
            {services.map((s, i) => {
              const on = active === i;
              return (
                <li
                  key={s.no}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  tabIndex={0}
                  className="group cursor-pointer py-10 outline-none"
                >
                  <div className="flex items-start gap-8 md:gap-12">
                    <span
                      className={`pt-3 text-[16px] font-medium tracking-wider transition-colors duration-500 ${
                        on ? "text-azure" : "text-gray-300"
                      }`}
                    >
                      {s.no}
                    </span>
                    <div>
                      <h3
                        className={`text-[34px] font-semibold leading-tight tracking-[-0.01em] transition-all duration-500 md:text-[48px] ${
                          on ? "translate-x-2 text-ink" : "text-gray-300"
                        }`}
                      >
                        {s.title}
                      </h3>
                      <div
                        className={`grid transition-all duration-500 ${
                          on ? "mt-6 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="flex flex-wrap gap-x-8 gap-y-2 pb-1">
                            {s.items.map((it) => (
                              <span key={it} className="body-text flex items-center gap-3">
                                <span className="h-1.5 w-1.5 rounded-full bg-azure" />
                                {it}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="relative hidden aspect-[4/5] self-start overflow-hidden rounded-[32px] bg-mist lg:col-span-2 lg:block">
            {services.map((s, i) => (
              <img
                key={s.no}
                src={s.img}
                alt={s.title}
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out ${
                  active === i ? "scale-100 opacity-100" : "scale-105 opacity-0"
                }`}
              />
            ))}
          </div>

          {/* mobile image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] bg-mist lg:hidden">
            {services.map((s, i) => (
              <img
                key={s.no}
                src={s.img}
                alt={s.title}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                  active === i ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
