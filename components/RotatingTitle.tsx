"use client";
import { useEffect, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function RotatingTitle({
    title
}: {
    title: string;
}) {
    const phrase = useMemo(() => title, [title]);

    return (
        <h1 className="text-2xl font-black leading-[1.05] tracking-tight break-words">
            <span className="relative inline-block max-w-full whitespace-normal">
                <AnimatePresence mode="wait">
                    <motion.span
                        key={phrase}
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: "0%", opacity: 1 }}
                        exit={{ y: "-100%", opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="bg-gradient-to-r from-brand-purple to-brand-magenta bg-clip-text text-transparent"
                    >
                        {phrase}
                    </motion.span>
                </AnimatePresence>
            </span>
        </h1>
    );
}