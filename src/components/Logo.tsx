export default function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#home" aria-label="Eager Consulting & Training" className={`inline-block ${className}`}>
      <div className="flex items-end gap-2 leading-none">
        <span className="relative text-[34px] font-extrabold tracking-[0.04em] text-royal">
          E
          <span className="relative inline-block">
            A
            <svg
              viewBox="0 0 40 20"
              className="absolute left-[-2px] top-[16px] w-[26px]"
              aria-hidden="true"
            >
              <path d="M2 17 C 12 14, 22 8, 36 4 C 26 10, 16 14, 8 19 Z" fill="#4185F4" />
            </svg>
          </span>
          GER
        </span>
        <span className="pb-[3px] text-[15px] font-light tracking-wide text-royal">
          CONSULTING &amp; TRAINING
        </span>
      </div>
      <div className="mt-[5px] h-[2px] w-full bg-gradient-to-r from-royal to-azure/60" />
      <div className="mt-[3px] bg-gradient-to-r from-royal to-azure px-2 py-[3px] text-center text-[8.5px] font-medium uppercase tracking-[0.17em] text-white">
        Transforming Talent into Performance
      </div>
    </a>
  );
}
