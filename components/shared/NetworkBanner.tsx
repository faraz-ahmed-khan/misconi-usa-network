export default function NetworkBanner() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#0b2d6b] pt-16 sm:pt-20"
      aria-labelledby="network-banner-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.45) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.45) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_70%_at_50%_45%,rgba(96,165,250,0.28),transparent_72%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_50%,transparent_40%,rgba(5,20,55,0.55)_100%)]" />

      <div className="relative mx-auto flex min-h-[240px] max-w-[1600px] flex-col items-center justify-center px-6 py-14 sm:min-h-[300px] sm:px-10 sm:py-16 lg:min-h-[340px]">
        <div
          className="absolute right-4 top-4 flex h-[88px] w-[88px] flex-col items-center justify-center rounded-full border-2 border-white text-white sm:right-8 sm:top-6 sm:h-[104px] sm:w-[104px]"
          aria-hidden
        >
          <span className="text-[26px] font-extrabold leading-none sm:text-[30px]">M</span>
          <span className="mt-1 text-[8px] font-bold tracking-[0.08em] sm:text-[9px]">MISCONI</span>
          <span className="text-[6px] font-semibold tracking-[0.06em] sm:text-[7px]">USA NETWORK</span>
        </div>

        <div className="max-w-3xl text-center text-white">
          <p className="text-[clamp(22px,3.2vw,36px)] font-bold leading-tight tracking-tight">
            Welcome to the
          </p>
          <h1
            id="network-banner-heading"
            className="mt-1 text-[clamp(26px,4vw,44px)] font-bold leading-tight tracking-tight"
          >
            Misconi USA Network
          </h1>
          <div className="mx-auto my-4 h-px w-full max-w-xl bg-white/90" />
          <p className="font-serif text-[clamp(18px,2.4vw,28px)] italic leading-snug text-white/95">
            Your Gateway to Readiness
          </p>
        </div>
      </div>
    </section>
  );
}
