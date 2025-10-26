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
    name: "Hugo King",
    stars: 5,
    text: "This is honestly one of the best reselling groups. I got a 1 on 1 call with a great advisor, and everything is played out super well. I've already made $800 profit!",
    ago: "15 Days After Joining"
  },
  {
    name: "Mira D.",
    stars: 5,
    text: "$0.01 Dysons. Paid for itself day one.",
    ago: "2 Hours After Joining"

  },
  {
    name: "ShinBoi",
    stars: 5,
    text: "Look it’s the truth I’ve joined eMoney 2 days ago and I’ve already found a lead on a discount item at Home Depot. So I’m looking forward with more in the future but enough said the support team fire they were super helpful",
    ago: "2 Days After Joining"
  },
  {
    name: "dabexx",
    stars: 5,
    text: "Trust eMoney definitely worth it, i got a membership with my last money, after a few days i already covered it and made profit by just chilling at home. easiest money in my life, i feel bad i did not start this before.",
    ago: "28 Days After Joining"

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
          autoplay={{ delay: 4000, disableOnInteraction: false }}
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
