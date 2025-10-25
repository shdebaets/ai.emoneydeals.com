import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Props = { title: string; seconds?: number };

export default function PromoCountdownHeader({ title, seconds = 180 }: Props) {
    const [left, setLeft] = useState(seconds);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let raf = 0;
        const start = performance.now();
        const end = start + seconds * 1000;

        const tick = (t: number) => {
            const pct = Math.min(1, (t - start) / (end - start));
            setProgress(pct);
            setLeft(Math.ceil(Math.max(0, end - t) / 1000));
            if (pct < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [seconds]);

    const mm = String(Math.floor(left / 60)).padStart(2, "0");
    const ss = String(left % 60).padStart(2, "0");

    const [compact, setCompact] = useState(false);
    useEffect(() => {
        const onScroll = () => setCompact(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            {/* <div className="mx-auto w-full max-w-[720px] px-3">
                <div className="relative overflow-hidden rounded-2xl border border-white/12 bg-black/60 p-4 text-center shadow-[0_0_40px_rgba(160,0,255,.22)] backdrop-blur-md">
                    <div className="text-[11px] uppercase tracking-[.18em] text-white/70">Trial only available for</div>
                    <div className="mt-1 font-mono text-3xl font-extrabold tracking-tight">
                        <span className="rounded-md bg-black/70 px-2 py-1">{mm}:{ss}</span>
                    </div>
                    <div className="mt-2 text-xs text-white/75">then <b>$50/mo</b> after · <b>cancel anytime</b></div>
                    <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                        <motion.div
                            animate={{ width: `${progress * 100}%` }}
                            transition={{ type: "tween", ease: "linear", duration: 0.1 }}
                            className="h-full bg-gradient-to-r from-fuchsia-400 to-pink-500"
                        />
                    </div>
                </div>
            </div> */}

            {/* <motion.div
                initial={false}
                animate={compact ? "hide" : "show"}
                variants={{ show: { y: 0, opacity: 1 }, hide: { y: -12, opacity: 0 } }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                className="pointer-events-none inset-x-0 top-0 z-[70] px-3"
            >
                <div className="pointer-events-auto mx-auto mt-2 max-w-screen-lg">
                    <div className="flex items-center gap-3 overflow-hidden rounded-xl border border-white/10 bg-[rgb(14,13,20)/.7] px-3 py-2 shadow-[0_10px_30px_rgba(0,0,0,.35)] backdrop-blur-md">
                        <div className="h-6 w-6 shrink-0 rounded-md bg-gradient-to-br from-brand-purple to-brand-magenta" />
                        <div className="min-w-0 flex-1">
                            <div className="truncate text-sm font-semibold text-white/90">{title}</div>
                            <div className="mt-1 h-1 w-full overflow-hidden rounded bg-white/10">
                                <motion.div
                                    animate={{ width: `${progress * 100}%` }}
                                    transition={{ type: "tween", ease: "linear", duration: 0.1 }}
                                    className="h-full bg-gradient-to-r from-fuchsia-400 to-pink-500"
                                />
                            </div>
                        </div>
                        <div className="font-mono text-base font-bold tabular-nums">{mm}:{ss}</div>
                    </div>
                </div>
            </motion.div> */}

            <motion.div
                initial={false}
                // animate={compact ? "show" : "hide"}
                animate="show"
                variants={{ show: { y: 0, opacity: 1 }, hide: { y: -12, opacity: 0 } }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                className="pointer-events-none fixed inset-x-0 top-0 z-[70] px-3"
            >
                <div className="pointer-events-auto mx-auto mt-2 max-w-screen-lg">
                    <div className="flex items-center gap-3 overflow-hidden rounded-xl border border-white/10 bg-[rgb(14,13,20)/.7] px-3 py-2 shadow-[0_10px_30px_rgba(0,0,0,.35)] backdrop-blur-md">
                        <div className="h-6 w-6 shrink-0 rounded-md bg-gradient-to-br from-brand-purple to-brand-magenta" />
                        <div className="min-w-0 flex-1">
                            <div className="truncate text-sm font-semibold text-white/90">{title}</div>
                            <div className="mt-1 h-1 w-full overflow-hidden rounded bg-white/10">
                                <motion.div
                                    animate={{ width: `${progress * 100}%` }}
                                    transition={{ type: "tween", ease: "linear", duration: 0.1 }}
                                    className="h-full bg-gradient-to-r from-fuchsia-400 to-pink-500"
                                />
                            </div>
                        </div>
                        <div className="font-mono text-base font-bold tabular-nums">{mm}:{ss}</div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}