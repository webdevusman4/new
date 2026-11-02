import Reveal from "./Reveal";

const companies = [
  { name: "Eager Packaging", suffix: "Pvt Ltd", desc: "Innovative packaging solutions" },
  { name: "Eager Properties", suffix: "Pvt Ltd", desc: "Property investment" },
  { name: "Eager Teaching & Trainings", suffix: "Pvt Ltd", desc: "Professional development" },
];

export default function Group() {
  return (
    <section id="group" className="bg-royal py-32 text-white md:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <p className="mb-8 text-[14px] font-medium uppercase tracking-[0.14em] text-white/70">
            The Eager Group
          </p>
          <blockquote className="font-serif text-[44px] italic leading-[1.1] tracking-[-0.01em] text-white sm:text-[64px] lg:text-[88px]">
            “I don’t just train businesses. I build and grow them.”
          </blockquote>
        </Reveal>

        <div className="mt-24 grid grid-cols-1 gap-14 md:grid-cols-3 md:gap-10">
          {companies.map((c, i) => (
            <Reveal key={c.name} delay={i * 120}>
              <div className="border-t border-white/30 pt-8">
                <h3 className="text-[24px] font-semibold leading-[1.3] text-white">{c.name}</h3>
                <p className="mt-1 text-[14px] font-light uppercase tracking-[0.18em] text-white/70">
                  {c.suffix}
                </p>
                <p className="mt-6 text-[18px] leading-[1.6] text-white/85">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
