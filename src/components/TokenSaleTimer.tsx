"use client";

import { useEffect, useState } from "react";
import dayjs from "dayjs";

const endDate = dayjs().add(3, "d");

export default function TokenSaleTimer() {
  const [timeLeft, setTimeLeft] = useState({
    d: 0,
    h: 0,
    m: 0,
    s: 0,
  });
  const setCountdown = () => {
    setInterval(() => {
      const min = 60;
      const hour = 60 * min;
      const day = 24 * hour;

      const now = dayjs();
      const diff = endDate.diff(now, "s");
      const d = Math.floor(diff / day);
      const h = Math.floor((diff - d * day) / hour);
      const m = Math.floor((diff - d * day - h * hour) / min);
      const s = Math.floor(diff - d * day - h * hour - m * min);

      setTimeLeft({
        d,
        h,
        m,
        s,
      });
    }, 1000);
  };

  useEffect(() => {
    setCountdown();
  }, []);

  return (
    <div className="max-w-xl mx-auto py-8 px-4">
      <div className="font-bold text-2xl sm:text-3xl text-center mb-8">
        Token Sale Ends In...
      </div>
      <div className="flex space-x-1 sm:space-x-4 mb-6 md:mb-12">
        {["Days", "Hours", "Minutes", "Seconds"].map((unit) => (
          <div
            key={unit}
            className="rounded-lg bg-slate-300 border border-slate-600 text-dark flex-1 text-center py-3"
          >
            <div className="text-2xl sm:text-3xl font-bold">
              {(timeLeft as any)[unit[0].toLowerCase()]}
            </div>
            <div className="text-xs md:text-sm font-semibold">{unit}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
