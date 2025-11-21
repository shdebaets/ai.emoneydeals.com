"use client";

import Image from "next/image";
import { useMemo, useEffect } from "react";

// ✅ Tracking helper
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

export default function TelegramJoinPage() {
  const year = useMemo(() => new Date().getFullYear(), []);

  // ✅ Fire view on page load
  useEffect(() => {
    trackEvent("telegram_join_view");
  }, []);

  const handleJoinTelegram = () => {
    trackEvent("telegram_open_channel_click");

    const tgDeepLink = "tg://resolve?domain=emoneyreselling";
    const webLink = "https://t.me/emoneyreselling";

    const start = Date.now();
    window.location.href = tgDeepLink;

    setTimeout(() => {
      if (Date.now() - start < 1200) {
        window.location.href = webLink;
      }
    }, 600);
  };

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-[#667eea] to-[#764ba2] text-slate-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="rounded-3xl bg-white/95 backdrop-blur border border-white/60 shadow-xl px-6 py-7 md:px-8 md:py-8">
          {/* Logo */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <Image
              src="/success/favicon.ico"
              alt="eMoney Logo"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="text-base font-semibold tracking-tight">eMoney</span>
          </div>

          {/* Title */}
          <h1 className="text-center text-xl font-extrabold tracking-tight text-slate-800">
            FOLLOW THE STEPS TO GET ACCESS
          </h1>
          <p className="mt-2 text-center text-xs text-slate-600">
            Join our FREE Telegram alerts channel for hidden clearance & flips.
          </p>

          {/* Steps */}
          <ul className="mt-5 space-y-3">
            {/* Step 1 */}
            <li className="flex items-start rounded-2xl bg-slate-50 border border-slate-200 px-3.5 py-3">
              <div className="mr-3 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500 text-xs font-bold text-white">
                1
              </div>
              <div className="text-xs">
                <div className="font-semibold text-slate-800">
                  Download Telegram
                </div>
                <p className="mt-1 text-slate-600">
                  If you don&apos;t have the app yet, install it below:
                </p>
                <div className="mt-2 flex flex-col gap-2">
                  <a
                    href="https://apps.apple.com/app/telegram-messenger/id686449807"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => trackEvent("telegram_download_ios_click")}
                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-center text-xs font-semibold text-slate-800 hover:bg-slate-50 transition"
                  >
                    Download for iPhone
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=org.telegram.messenger"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => trackEvent("telegram_download_android_click")}
                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-center text-xs font-semibold text-slate-800 hover:bg-slate-50 transition"
                  >
                    Download for Android
                  </a>
                </div>
              </div>
            </li>

            {/* Step 2 */}
            <li className="flex items-start rounded-2xl bg-slate-50 border border-slate-200 px-3.5 py-3">
              <div className="mr-3 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500 text-xs font-bold text-white">
                2
              </div>
              <div className="text-xs w-full">
                <div className="font-semibold text-slate-800">
                  Already have Telegram?
                </div>
                <p className="mt-1 text-slate-600">
                  Tap the button to open the eMoney channel.
                </p>
                <button
                  onClick={handleJoinTelegram}
                  className="mt-2 w-full rounded-xl bg-blue-600 px-3 py-2 text-xs font-semibold text-white hover:bg-blue-700 transition"
                >
                  Open eMoney Telegram Channel
                </button>
                <p className="mt-2 text-[10px] text-slate-500">
                  If you see &quot;address is invalid&quot;, finish installing
                  Telegram, then come back and tap again.
                </p>
              </div>
            </li>

            {/* Step 3 */}
            <li className="flex items-start rounded-2xl bg-amber-50 border border-amber-200 px-3.5 py-3">
              <div className="mr-3 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-amber-400 text-xs font-bold text-slate-900">
                3
              </div>
              <div className="text-xs">
                <div className="font-semibold text-slate-800">
                  If the button doesn&apos;t work
                </div>
                <p className="mt-1 text-slate-600">
                  Open Telegram and search for this username:
                </p>
                <span
                  className="mt-2 inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 font-mono text-[11px] text-slate-800"
                  onClick={() => trackEvent("telegram_username_pill_click")}
                >
                  @emoneyreselling
                </span>
              </div>
            </li>
          </ul>

          {/* Proof */}
          <div className="mt-4 border-t border-slate-200 pt-3 text-[11px] text-slate-600 space-y-1">
            <div>• 1,800+ 5-star reviews from resellers</div>
            <div>• $10,000,000+ profit found by members</div>
            <div>• 100% free to join, no credit card required</div>
          </div>
        </div>

        <p className="mt-4 text-center text-[10px] text-white/80">
          © {year} eMoney Reselling · Not affiliated with Telegram, Walmart, or
          Home Depot.
        </p>
      </div>
    </main>
  );
}
