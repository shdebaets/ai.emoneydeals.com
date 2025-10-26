"use client";
import PromoCountdownHeader from "@/components/PromoCountdown";
import SuccessHeroSlider from "@/components/SuccessHeroSlider";
import ReviewsTicker from "@/components/ReviewsTicker";
import { WhopCheckoutEmbed, useCheckoutEmbedControls } from "@whop/checkout/react";
import { gaEvent } from "./(lib)/ga";

export default function Checkout() {
  const ref = useCheckoutEmbedControls();

  function startTrial() {
    gaEvent("start_trial");
    window.scrollTo({ top: document.getElementById("checkout")?.offsetTop, behavior: "smooth" })
  }

  return (
    <main className="page-bg min-h-screen px-4 pb-16 pt-15">
      <PromoCountdownHeader title="Your Spot is Reserved for the Next:" seconds={180} />

      <section className="mx-auto mt-6 w-full max-w-[720px] text-center">
        <h1 className="text-3xl font-extrabold tracking-tight leading-tight text-center">
          Get Our <span className="block text-fuchsia-300">Secret Clearance</span>
          <span className="block text-fuchsia-300">AI Software</span>
          <span className="block text-fuchsia-300">5,000+</span> Resellers Use
        </h1>
        <p className="mt-2 text-sm text-white/75">
          $0 Upfront - Cancel Anytime - Join 5,000+ Active Users
        </p>

        <button onClick={startTrial} className="btn px-8 py-2 mt-4 cursor-pointer hover:border-brand-magenta/60 hover:shadow-glow hover:opacity-80 active:scale-95 transition-all duration-200">
          Unlock My Free Trial 🔓
        </button>
      </section>

      <SuccessHeroSlider
        items={[
          { src: "/success/vanity.jpg", caption: "REDWAKE - $0.01 VANITY SOLD FOR $250" },
          { src: "/success/pokemon.jpg", caption: "RYAN - POKEMON $180 PROFIT SECURED" },
          { src: "/success/chairs.png.jpg", caption: "JEFFREY - $250 PROFIT FROM CHAIRS" },
          { src: "/success/garage.jpg", caption: "DEBRA - GARAGE DOOR OPENER FOR $0.01" },
          { src: "/success/pennyitem.png", caption: "ILIA - $600 DOWN TO $0.06" },
        ]}
      />

      <ReviewsTicker />

      <section className="mx-auto mt-6 w-full max-w-[720px]" id="checkout">
        <div className="card p-4">
          <div className="text-center text-lg font-semibold">Free Trial</div>
          <div className="mt-3 rounded-xl border border-white/10 bg-black/50 p-3">
            <WhopCheckoutEmbed
              ref={ref}
              planId="plan_QOk7Ldw02rMJH"
              theme="dark"
              fallback={<>loading…</>}
              skipRedirect
            />
          </div>
          <p className="mt-3 text-center text-xs text-white/60">Secured by Whop • Encrypted checkout</p>
        </div>
      </section>

      <section className="mx-auto mt-6 w-full max-w-[720px]">
        <div className="rounded-2xl border border-white/12 bg-black/55 p-4 text-center">
          <div className="text-lg font-semibold">Risk Free Guarantee</div>
          <p className="mt-1 text-sm text-white/80">
            Try everything for 3 days. Cancel in two clicks. No hidden charges.
          </p>
        </div>
      </section>

      <footer className="mx-auto mt-10 w-full max-w-[720px] text-center text-xs text-white/50">
        © {new Date().getFullYear()} eMoney Reselling • Terms • Privacy
      </footer>
    </main>
  );
}
