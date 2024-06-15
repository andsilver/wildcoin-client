"use client";

import { useState } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Sector } from "recharts";

export const data = [
  { name: "Airdrop", value: 5, color: "#005f73" },
  { name: "Team", value: 10, color: "#5dd400" },
  { name: "Private Sale", value: 5, color: "#00c4f4" },
  { name: "Ecosystem", value: 25, color: "#ff9700" },
  { name: "Public Sale", value: 5, color: "#f72585" },
  { name: "Liquidity", value: 20, color: "#007ff4" },
  { name: "Cex/Dex", value: 20, color: "#D0005E" },
  { name: "Partners/Marketing", value: 10, color: "#9B58CD" },
];

export default function TokenDistribution() {
  const renderActiveShape = (props: any) => {
    const RADIAN = Math.PI / 180;
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      percent,
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";

    return (
      <g>
        {payload.name === "Team" && (
          <text
            strokeWidth={3}
            x={cx}
            y={cy}
            dy={8}
            textAnchor="middle"
            fill="#dd9933"
          >
            WiLD Coin
          </text>
        )}
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path
          d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
          stroke={fill}
          fill="none"
        />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          textAnchor={textAnchor}
          fill={payload.color}
        >
          {payload.name}
        </text>
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          dy={18}
          textAnchor={textAnchor}
          fill="#999"
        >
          {`${(percent * 100).toFixed(2)}%`}
        </text>
      </g>
    );
  };

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="bg-[#0b1d3355] py-12 px-6 rounded-2xl">
      <ResponsiveContainer width="100%" aspect={1.5}>
        <PieChart width={360}>
          <Pie
            activeIndex={[0, 1, 2, 3, 4, 5, 6, 7]}
            activeShape={renderActiveShape}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={100}
            paddingAngle={3}
            dataKey="value"
            onMouseEnter={(_, index) => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(-1)}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={activeIndex === index ? `${entry.color}bb` : entry.color}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
