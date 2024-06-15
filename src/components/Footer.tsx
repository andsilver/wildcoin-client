import Image from "next/image";

import WildcoinLogo from "@/assets/logo.png";
import Coingecko from "@/assets/icons/coingecko.ico";
import Twitter from "@/assets/icons/x.svg";
import Telegram from "@/assets/icons/telegram.png";
import Dex from "@/assets/icons/dex.png";
import BSCScan from "@/assets/icons/bscscan.svg";
import Link from "next/link";

const links = [
  {
    link: "https://swap.wild-coin.info",
    title: "WiLD Swap",
    icon: WildcoinLogo,
  },
  {
    link: "https://twitter.com/lodgecapital",
    title: "Twitter",
    icon: Twitter,
  },
  {
    link: "https://t.me/WildCoin_Chat",
    title: "TG Chat",
    icon: Telegram,
  },
  {
    link: "https://t.me/lodgecapitald",
    title: "TG Channel",
    icon: Telegram,
  },
  {
    link: "https://www.coingecko.com/en/coins/wild-2",
    title: "Coingecko",
    icon: Coingecko,
  },
  {
    link: "https://bscscan.com/token/0xAD9a1e7B34dA8A17DeC7328b151A4D3627F21D6B",
    title: "Contract",
    icon: BSCScan,
  },
];

export default function Footer() {
  return (
    <footer>
      <div className="footer-area">
        <div className="max-w-7xl mx-auto px-4 pt-20">
          <div className="flex justify-between">
            <div className="max-w-[400px]">
              <Image src={WildcoinLogo} className="size-16" alt="" />
              <div className="text-sm leading-relaxed font-light mt-8 text-slate-300">
                Artificial intelligence-based WiLD Coin will move to the WLD
                Network and create its own Mainnet in the future. It is a
                Community coin with a network that aims to facilitate
                transactions with low transaction fees and Fast Transfers.
              </div>
              <div className="mt-8 flex md:space-x-2">
                {links.map((link) => (
                  <Link
                    key={link.title}
                    title={link.title}
                    href={link.link}
                    target="_blank"
                    className="md:border-2 bg-transparent border-[#719ed6] rounded-full p-2 transition-all hover:bg-[#719ed6]"
                  >
                    <Image src={link.icon} className="size-6" alt="" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="py-6 mt-12 text-center font-medium text-sm border-t border-[hsla(0,0%,100%,.06)]">
            Copyright © 2024. <br className="sm:hidden"></br> All Rights Reserved WiLD Coin
          </div>
        </div>
      </div>
    </footer>
  );
}
