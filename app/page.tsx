"use client";
import { useEffect } from "react";
import PromoCountdownHeader from "@/components/PromoCountdown";
import SuccessHeroSlider from "@/components/SuccessHeroSlider";
import ReviewsTicker from "@/components/ReviewsTicker";
import { WhopCheckoutEmbed, useCheckoutEmbedControls } from "@whop/checkout/react";
import { gaEvent } from "./(lib)/ga";

async function trackEvent(event: string) {
  try {
    await fetch("https://emoneydeals.com/api/web-event", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        url: window.location.href,
        event,
      }),
    });
  } catch (error) {
    console.error("Failed to track event:", error);
  }
}

export default function Checkout() {
  const ref = useCheckoutEmbedControls();

  // ✅ Fire "view" when page loads
  useEffect(() => {
    trackEvent("view");
  }, []);

  // Track scroll events
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        trackEvent("scroll");
      }, 500); // Debounce to avoid too many events
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  function startTrial() {
    trackEvent("unlock_my_free_trial");
    gaEvent("start_trial");
    window.scrollTo({ top: document.getElementById("checkout")?.offsetTop, behavior: "smooth" });
  }

  return (
    <main className="page-bg min-h-screen px-4 pb-16 pt-15">
      <PromoCountdownHeader title="Your Spot is Reserved for the Next:" seconds={180} />
      <section className="mx-auto mt-6 w-full max-w-[720px] text-center">
        <h1 className="text-3xl font-extrabold tracking-tight leading-tight text-center">
          Get Our <span className="text-fuchsia-300">Secret Clearance</span>
          <br />
          AI Software
          <br />
          <span className="text-fuchsia-300">5,000+ Resellers</span> Use
        </h1>
        <p className="mt-2 text-sm text-white/75">
          $0 Upfront - Cancel Anytime - Join 5,000+ Active Users
        </p>
        <button
          onClick={startTrial}
          className="btn px-8 py-2 mt-4 cursor-pointer hover:border-brand-magenta/60 hover:shadow-glow hover:opacity-80 active:scale-95 transition-all duration-200"
        >
          Unlock My Free Trial 🔓
        </button>
      </section>
      <SuccessHeroSlider
        items={[
          { src: "/success/vanity.jpg", caption: "REDWAKE - $0.01 VANITY SOLD FOR $250" },
          { src: "/success/pokemon.jpg", caption: "RYAN - POKEMON $180 PROFIT SECURED" },
          { src: "/success/chairs.png.jpg", caption: "JEFFREY - $250 PROFIT FROM CHAIRS" },
          { src: "/success/garage.jpg", caption: "DEBRA - GARAGE DOOR OPENER FOR $0.01" },
          { src: "/success/pennyitem.jpg", caption: "ILIA - $600 DOWN TO $0.06" },
        ]}
      />
      <ReviewsTicker />
      <section className="mx-auto mt-6 w-full max-w-[720px]" id="checkout">
        <div className="card p-4">
          <div className="text-center text-lg font-semibold">7-Day Free Trial</div>
          <div className="mt-3 rounded-xl border border-white/10 bg-black/50 p-3">
            <WhopCheckoutEmbed
              ref={ref}
              planId="plan_6KwUKw1ckTGZQ"
              theme="dark"
              fallback={<>loading…</>}
              hidePrice={true}  // 👈 hides the price
            />
          </div>
          <p className="mt-3 text-center text-xs text-white/60">Secured by Whop • Encrypted checkout</p>
        </div>
      </section>
      <section className="mx-auto mt-6 w-full max-w-[720px]">
        <div className="rounded-2xl border border-white/12 bg-black/55 p-4 text-center">
          <div className="text-lg font-semibold">Risk Free Guarantee</div>
          <p className="mt-1 text-sm text-white/80">
            Try everything for 7 days. Cancel in two clicks. $50/m after trial.
          </p>
        </div>
      </section>
      <footer className="mx-auto mt-10 w-full max-w-[720px] text-center text-xs text-white/50">
        © {new Date().getFullYear()} eMoney Reselling • <a href="https://myworkspacebc004.myclickfunnels.com/tos">Terms</a> • <a href="https://myworkspacebc004.myclickfunnels.com/privacy-policy">Privacy</a>
      </footer>
    </main>
  );
}
