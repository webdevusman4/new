import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";

export default function Event() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="event" className="bg-mist py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-1 items-center gap-12 rounded-[40px] bg-white p-8 md:p-14 lg:grid-cols-2 lg:gap-20 lg:p-20">
            <div>
              <span className="inline-block rounded-full bg-azure/10 px-4 py-2 text-[13px] font-semibold uppercase tracking-[0.14em] text-azure">
                Upcoming Event
              </span>
              <h3 className="mt-8 text-[32px] font-semibold leading-[1.25] text-ink md:text-[40px]">
                Full-Day Intensive Sales &amp; Marketing Training
              </h3>
              <p className="body-text mt-6">
                Karachi, Pakistan <span className="mx-2 text-gray-300">|</span> Fee:{" "}
                <span className="font-semibold text-ink">20,000 PKR</span>
              </p>
            </div>

            <div>
              {sent ? (
                <div className="py-10 text-center lg:text-left">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-azure text-2xl text-white">
                    ✓
                  </div>
                  <h4 className="text-[28px] font-semibold text-ink">
                    You’re on the list, {form.name.split(" ")[0] || "friend"}.
                  </h4>
                  <p className="body-text mt-3">
                    We’ll reach out on WhatsApp shortly to confirm your seat in Karachi.
                  </p>
                </div>
              ) : (
                <form onSubmit={submit} className="flex flex-col gap-4">
                  <label className="sr-only" htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    required
                    className="field"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                  <label className="sr-only" htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    required
                    type="email"
                    className="field"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                  <label className="sr-only" htmlFor="phone">WhatsApp Number</label>
                  <input
                    id="phone"
                    required
                    type="tel"
                    className="field"
                    placeholder="WhatsApp Number"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                  <button type="submit" className="btn-pill is-azure mt-2 w-full">
                    Secure My Seat
                  </button>
                </form>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
