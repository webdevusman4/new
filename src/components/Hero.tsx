import portrait from "../assets/hero.jpg";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white">
      <div className="mx-auto grid min-h-[90vh] max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 md:grid-cols-2 lg:px-8">
        <div className="relative z-10">
          <p className="mb-6 text-[14px] font-medium uppercase tracking-[0.14em] text-azure">
            Iftikhar Ahmed | CEO &amp; Corporate Trainer
          </p>
          <h1 className="h1-hero">
            Empowering People, <span className="text-azure">Transforming</span> Businesses.
          </h1>
          <p className="body-text mt-8 max-w-xl">
            Unlock hidden potential, drive exponential growth, and achieve lasting success with
            Pakistan's leading Sales, Marketing, and Business Expert.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-8">
            <a href="#services" className="btn-pill">
              Explore Training
            </a>
            <a
              href="#journey"
              className="group inline-flex items-center gap-2 text-[16px] font-medium text-ink transition-colors duration-300 hover:text-azure"
            >
              View My Journey
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>

        <div className="relative mx-auto flex h-[520px] w-full max-w-[560px] items-end justify-center md:h-[640px]">
          {/* Soft abstract blob */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 top-10 bg-gradient-to-br from-[#dbe8ff] via-[#eaf1ff] to-[#f5f9ff]"
            style={{ borderRadius: "62% 38% 55% 45% / 48% 58% 42% 52%" }}
          />
          <div
            aria-hidden="true"
            className="absolute -right-6 top-0 h-32 w-32 rounded-full bg-azure/15 blur-2xl"
          />
          <img
            src={portrait}
            alt="Iftikhar Ahmed, CEO and Corporate Trainer"
            className="relative z-10 -mb-8 h-[110%] w-auto max-w-none object-contain mix-blend-multiply md:-mb-10"
            style={{
              maskImage: "linear-gradient(to bottom, #000 82%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, #000 82%, transparent 100%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
