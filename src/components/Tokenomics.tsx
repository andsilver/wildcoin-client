"use client";

import { data } from "./TokenDistribution";

export default function Tokenomics() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      {data.map((item) => (
        <div
          key={item.name}
          className="font-medium text-lg flex items-center space-x-2"
        >
          <span className="size-3 rounded-full" style={{ background: item.color }} />
          <span>{item.name}: {item.value}%</span>
        </div>
      ))}
    </div>
  );
}
