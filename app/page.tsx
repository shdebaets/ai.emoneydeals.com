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
    <main className="page-bg min-h-screen px-4 pb-16 pt-6">
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
          { src: "/success/906214d1-f74a-427a-9745-0d76e76ce16b.png", caption: "BOXES TO BANK IN 24H" },
          { src: "/success/78bd80e2-2c2b-4a68-ac30-89ce9dbed60d.png", caption: "PRO TOOLS AT PENNY PRICES" },
          { src: "/success/949ca9d4-5f82-4a40-9c87-2a61e22d27c0.jpg", caption: "SEALED POKÉMON MOVING CHEAP" },
          { src: "/success/659a7d01-ff20-4a5a-9710-358b841ac6df.png", caption: "FIRE TV BULK AT PENNY-LEVEL" },
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
