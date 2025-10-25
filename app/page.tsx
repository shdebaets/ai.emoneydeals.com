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
      <PromoCountdownHeader title="Your Free Trial is Secure for:" seconds={180} />

      <section className="mx-auto mt-6 w-full max-w-[720px] text-center">
        <h1 className="text-3xl font-extrabold tracking-tight leading-tight">
          Get <span className="text-fuchsia-300">INSTANT</span> Access to Hidden Clearance Deals near you.
        </h1>

        <p className="mt-2 text-sm text-white/75">
          $0 Upfront - Cancel Anytime - Join 10,000+ Clearance Hunters
        </p>

        <button onClick={startTrial} className="btn px-8 py-2 mt-4 cursor-pointer hover:border-brand-magenta/60 hover:shadow-glow hover:opacity-80 active:scale-95 transition-all duration-200">
          Start free trial
        </button>
      </section>

      <SuccessHeroSlider
        items={[
          { src: "/success/vanitysold.png", caption: "REDWAKE - $0.01 Items Sold For $250" },
          { src: "/success/tools.png", caption: "VLAD - 80% OFF TOOLKITS ($600 profit)" },
          { src: "/success/pokemonprofit.png", caption: "RYAN - POKEMON $180 PROFIT" },
          { src: "/success/chairs.png.jpg", caption: "JEFFREY - $250 FROM CHAIRS" },
          { src: "/success/garagedoor.png", caption: "DEBRA - GARAGE DOOR OPENER FOR $0.01" },
          { src: "/success/pennyitem.png", caption: "ILIA - $600 DOWN TO $0.06" },
        ]}
      />

      <ReviewsTicker />

      <section className="mx-auto mt-6 w-full max-w-[720px]" id="checkout">
        <div className="card p-4">
          <div className="text-center text-lg font-semibold">Checkout</div>
          <div className="mt-3 rounded-xl border border-white/10 bg-black/50 p-3">
            <WhopCheckoutEmbed
              ref={ref}
              planId="plan_jsROYnKAs4HoZ"
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
          <div className="text-lg font-semibold">Zero-risk guarantee</div>
          <p className="mt-1 text-sm text-white/80">
            Try everything for 3 days. Cancel in two clicks. You will not be charged today.
          </p>
        </div>
      </section>

      <footer className="mx-auto mt-10 w-full max-w-[720px] text-center text-xs text-white/50">
        © {new Date().getFullYear()} eMoney Reselling • Terms • Privacy
      </footer>
    </main>
  );
}
