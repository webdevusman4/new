import { useEffect, useState } from "react";

const quotes = [
  {
    text: "Iftikhar didn’t hand us theory. He rebuilt how our sales team thinks, and our numbers followed within a quarter.",
    who: "Regional Sales Head, FMCG Company",
  },
  {
    text: "The most practical, high-energy training day our team has ever had. We left with a system, not just motivation.",
    who: "Training Attendee, Karachi",
  },
  {
    text: "His payment recovery framework unlocked cash we had written off. Clear, disciplined and deeply effective.",
    who: "Managing Director, Manufacturing Firm",
  },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let swap: ReturnType<typeof setTimeout>;
    const id = setInterval(() => {
      setVisible(false);
      swap = setTimeout(() => {
        setI((p) => (p + 1) % quotes.length);
        setVisible(true);
      }, 600);
    }, 4000);
    return () => {
      clearInterval(id);
      clearTimeout(swap);
    };
  }, []);

  return (
    <section className="bg-white py-32 md:py-40" aria-label="Testimonials">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
        <div className="flex min-h-[300px] flex-col items-center justify-center md:min-h-[260px]">
          <div
            className={`transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"}`}
            aria-live="polite"
          >
            <p className="text-[24px] italic leading-[1.5] text-ink md:text-[32px]">“{quotes[i].text}”</p>
            <p className="mt-10 text-[13px] font-bold uppercase tracking-[0.18em] text-royal">
              {quotes[i].who}
            </p>
          </div>
        </div>
        <div className="mt-8 flex justify-center gap-2">
          {quotes.map((_, n) => (
            <span
              key={n}
              className={`h-1 rounded-full transition-all duration-500 ${
                n === i ? "w-8 bg-azure" : "w-3 bg-gray-200"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
