import classNames from "classnames";

interface Props {
  item: any;
  index: number;
}

const RoadmapItem = ({ item, index }: Props) => (
  <div
    className={classNames(
      "flex flex-col w-[370px] h-[305px] justify-start flex-[0_0_auto]",
      index % 2 ? "self-start flex-col-reverse mt-[-10px]" : "self-end"
    )}
    style={{
      marginLeft: index > 0 ? "-155px" : "",
    }}
  >
    <div
      style={{ color: item.color }}
      className={classNames(
        "font-bold text-lg tracking-widest uppercase",
        index % 2 > 0 ? "mt-[22px]" : "mb-[22px]"
      )}
    >
      {item.title}
    </div>
    <div
      style={{
        marginLeft: 41,
        paddingLeft: 17,
        paddingTop: ((index + 1) % 2) * 110,
        paddingBottom: (index % 2) * 110,
      }}
      className="relative"
    >
      <span
        className="top-0 w-[1px] left-0 absolute h-full"
        style={{ background: item.color }}
      />
      <span
        style={{ background: item.color }}
        className={classNames(
          "rounded-full absolute h-[16px] left-[-8px] w-[16px]",
          index % 2 ? "bottom-0" : "top-0"
        )}
      >
        <span
          style={{
            background: item.color,
            transform: "translateX(-25%) translateY(-50%)",
          }}
          className="rounded-full absolute w-[32px] h-[32px] opacity-10 top-[50%]"
        />
      </span>
      <h4 className={classNames("font-medium min-h-12", index % 2 ? "mt-2" : "mb-2")}>
        {item.text}
      </h4>
    </div>
  </div>
);

const roadmap = [
  {
    title: "Q1 2024",
    color: "#5dd400",
    text: "Project planning and development",
  },
  {
    title: "Q2 2024",
    color: "#00c4f4",
    text: "Creating a Website and Social Networks",
  },
  {
    title: "Q3 2024",
    color: "#ff9700",
    text: "Strategic Partnership and Offer Receiving",
  },
  {
    title: "Q4 2024",
    color: "#f72585",
    text: "ICO and Airdrop Launch",
  },
  {
    title: "Q5 2024",
    color: "#007ff4",
    text: "Private Sale",
  },
  {
    title: "Q6 2024",
    color: "#D0005E",
    text: "Public Sale",
  },
  {
    title: "Q7 2024",
    color: "#9B58CD",
    text: "DEX Stock Exchange Listing and Advertising Work",
  },
  {
    title: "Q8 2024",
    color: "#5dd400",
    text: "WiLDswap Testing and Integration",
  },
  {
    title: "Q9 2024",
    color: "#f72585",
    text: "CEX Exchange Listing and WiLD Coin Launch",
  },
];

export default function Roadmap() {
  return (
    <div className="flex justify-start min-h-[490px] relative">
      <div
        className="absolute opacity-10 w-[2080px]"
        style={{
          background: "linear-gradient(294.72deg,#ff4581 9.05%,#4388dd 79.28%)",
          height: 8,
          transform: "translateY(-50%)",
          top: "calc(50% - 6px)",
        }}
      />
      {roadmap.map((item, index) => (
        <RoadmapItem key={index} index={index} item={item} />
      ))}
    </div>
  );
}
