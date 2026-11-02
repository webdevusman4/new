import Logo from "./Logo";

const quick = [
  { label: "Home", href: "#home" },
  { label: "The Journey", href: "#journey" },
  { label: "Services", href: "#services" },
  { label: "Eager Group", href: "#group" },
  { label: "Karachi Event", href: "#event" },
];

const social = [
  { label: "LinkedIn", href: "https://www.linkedin.com" },
  { label: "Facebook", href: "https://www.facebook.com" },
  { label: "Instagram", href: "https://www.instagram.com" },
  { label: "YouTube", href: "https://www.youtube.com" },
];

const linkCls = "text-[16px] text-body transition-colors duration-300 hover:text-azure";
const head = "mb-6 text-[13px] font-semibold uppercase tracking-[0.16em] text-ink";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 py-20 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Logo className="w-[260px]" />
          <p className="mt-6 max-w-xs text-[16px] leading-[1.6] text-body">
            Iftikhar Ahmed — CEO, corporate trainer and business expert helping people and
            organisations turn talent into performance.
          </p>
        </div>

        <div>
          <h4 className={head}>Quick Links</h4>
          <ul className="flex flex-col gap-3">
            {quick.map((l) => (
              <li key={l.href}>
                <a href={l.href} className={linkCls}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className={head}>Contact</h4>
          <ul className="flex flex-col gap-3">
            <li>
              <a href="tel:+923212123037" className={linkCls}>+92 321 212 3037</a>
            </li>
            <li>
              <a href="mailto:iftikhar.mkt@gmail.com" className={linkCls}>iftikhar.mkt@gmail.com</a>
            </li>
            <li className="text-[16px] text-body">Karachi, Pakistan</li>
          </ul>
        </div>

        <div>
          <h4 className={head}>Follow</h4>
          <ul className="flex flex-col gap-3">
            {social.map((l) => (
              <li key={l.label}>
                <a href={l.href} target="_blank" rel="noreferrer" className={linkCls}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 pb-10 text-[14px] text-gray-400 lg:px-8">
        © {new Date().getFullYear()} Eager Consulting &amp; Training. All rights reserved.
      </div>
    </footer>
  );
}
