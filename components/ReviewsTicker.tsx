"use client";

import { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

type Review = {
  name: string;
  stars: number;
  text: string;
  ago: string;
};

const DATA: Review[] = [
  {
    name: "Bobby Johnny",
    stars: 5,
    text: "Definitely recommend — you will make your money back.",
    ago: "1h ago"

  },
  {
    name: "Jaco Stampes",
    stars: 4,
    text: "A bit confusing at first, once you figure it out… amazing.",
    ago: "1h ago"
  },
  {
    name: "Mira D.",
    stars: 5,
    text: "$0.01 Dysons. Paid for itself day one.",
    ago: "2h ago"

  },
  {
    name: "Alejandro V.",
    stars: 5,
    text: "$1,246 → $2,225 in 24h. No joke.",
    ago: "today"
  },
];

const star = (n: number) => "★★★★★☆☆☆☆☆".slice(5 - Math.round(n), 10 - Math.round(n));

export default function ReviewsTicker() {
  const items = useMemo(() => DATA.map((r, i) => ({
    ...r,
    avatar: `https://api.dicebear.com/7.x/thumbs/svg?seed=${encodeURIComponent(r.name)}&radius=50`
  })), []);
  return (
    <section className="mx-auto mt-6 w-full max-w-[720px]">
      <div className="rounded-2xl border border-white/12 bg-black/55 p-4">
        <div className="mb-2 text-center text-lg font-semibold">Reviews</div>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2200, disableOnInteraction: false }}
          slidesPerView={1}
          loop
          className="!w-full"
        >
          {items.map((r, i) => (
            <SwiperSlide key={i}>
              <div className="flex items-start gap-3">
                <img src={r.avatar} alt="" className="h-10 w-10 rounded-full ring-1 ring-white/15" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold">{r.name}</div>
                    <div className="text-[11px] text-white/50">{r.ago}</div>
                  </div>
                  <div className="text-amber-300 text-xs">{star(r.stars)}</div>
                  <p className="mt-1 text-sm text-white/85">{r.text}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
