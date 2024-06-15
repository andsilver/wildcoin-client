"use client";

import Header from "@/components/Header";
import TokenSaleProgress from "@/components/TokenSaleProgress";
import Button from "@/components/elements/Button";
import { ArrowTrendingUpIcon, DocumentIcon } from "@heroicons/react/24/outline";
import TokenSaleTimer from "@/components/TokenSaleTimer";
import Image from "next/image";
import BuyNowButton from "@/components/elements/BuyNowButton";
import SectionHeader from "@/components/elements/SectionHeader";
import TokenDistribution from "@/components/TokenDistribution";
import Tokenomics from "@/components/Tokenomics";
import Roadmap from "@/components/Roadmap";
import {
  Slide,
  Fade,
  Zoom,
  Flip,
  Bounce,
  JackInTheBox,
} from "react-awesome-reveal";
import Footer from "@/components/Footer";

import BannerImage from "@/assets/screen2.jpg";
import WildcoinImage from "@/assets/wildcoin.png";
import WildcoinImage1 from "@/assets/wildcoin1.png";
import WildcoinLogo from "@/assets/logo.png";
import BannerImage1 from "@/assets/screen6.jpg";
import AppearTransition from "@/components/elements/AppearTransition";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mt-[-87px]">
        <div
          className="home-banner px-2 bg-no-repeat bg-cover pt-[87px]"
          style={{
            backgroundImage: `url(${BannerImage1.src})`,
          }}
        >
          <Fade triggerOnce duration={400}>
            <div className="flex flex-col items-center justify-center px-2 pt-20 md:pt-40 md:pb-20 relative">
              <h1 className="font-bold text-primary leading-snug text-3xl md:text-6xl text-center max-w-3xl">
                Powering Data for the new equity blockchain.
              </h1>
              <div className="flex space-x-4 mt-20 pb-10">
                <Button variant="contained" size="lg">
                  <ArrowTrendingUpIcon className="size-5 mr-1" />
                  How it works
                </Button>
                <Button size="lg">
                  <DocumentIcon className="size-5 mr-1" /> Whitepaper
                </Button>
              </div>
            </div>
          </Fade>

          <Slide direction="down">
            <div className="shadow-md w-full px-4 flex items-center flex-col mb-20">
              <TokenSaleProgress />
            </div>
          </Slide>

          <Image
            src={WildcoinImage1}
            alt=""
            className="hidden lg:block rounded-full transition-all animate-pulse absolute bottom-32 left-24 opacity-70 size-80"
          />
        </div>

        <div className="pb-24 relative">
          <Slide direction="down" triggerOnce>
            <TokenSaleTimer />

            <div className="flex justify-center">
              <BuyNowButton size="lg" />
            </div>
          </Slide>

          <Fade>
            <Image
              style={{
                left: "calc(50% + 300px)",
              }}
              src={WildcoinLogo}
              alt=""
              className="hidden lg:block transition-all animate-bounce absolute top-[22%] size-32"
            />
          </Fade>
        </div>

        <div className="bg-dark">
          <div
            className="py-8 max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-x-8"
            id="about"
          >
            <div className="flex-1 flex justify-start">
              <JackInTheBox triggerOnce>
                <Image
                  src={WildcoinImage}
                  alt=""
                  className="rounded-full"
                ></Image>
              </JackInTheBox>
            </div>
            <div className="flex-1">
              <Slide triggerOnce direction="right">
                <SectionHeader title="ICO Token" />
                <h1 className="font-bold text-3xl lg:text-5xl">
                  What is <span className="text-primary">WiLD Coin?</span>
                </h1>
                <p className="my-6 font-light text-slate-300">
                  Artificial intelligence-based WiLD Coin will move to the WLD
                  Network and create its own Mainnet in the future. It is a
                  Community coin with a network that aims to facilitate
                  transactions with low transaction fees and Fast Transfers.
                </p>
                <BuyNowButton />
              </Slide>
            </div>
          </div>
          <div
            className="flex flex-col lg:flex-row items-center max-w-7xl mx-auto px-4 space-y-4 lg:space-x-8 py-8"
            id="tokenomics"
          >
            <div className="flex-1">
              <Slide triggerOnce>
                <SectionHeader title="Tokenomics" />
                <div className="sm:flex lg:block justify-between items-center">
                  <div className="basis-1/2">
                    <h1 className="font-bold text-3xl lg:text-5xl">
                      1 WiLD = 0.123 BNB
                    </h1>
                    <p className="my-6 font-light text-slate-300">
                      Artificial intelligence-based WiLD Coin will move to the
                      WLD Network and create its own Mainnet in the future. It
                      is a Community coin with a network that aims to facilitate
                      transactions with low transaction fees and Fast Transfers.
                    </p>
                  </div>
                  <Tokenomics />
                </div>
              </Slide>
            </div>
            <div className="flex-1 hidden lg:block">
              <Zoom triggerOnce>
                <TokenDistribution />
              </Zoom>
            </div>
          </div>
        </div>

        <div
          id="roadmap"
          className="roadmap-area"
          style={{
            background: `url(${BannerImage.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="max-w max-w-7xl lg:mt-12 mx-auto px-4 py-10 lg:py-20">
            <div className="flex flex-col lg:items-center justify-center">
              <Bounce triggerOnce>
                <SectionHeader title="Our Roadmap" />
                <h1 className="font-bold text-3xl lg:text-5xl lg:text-center leading-normal">
                  <span className="text-primary">WiLD Coin</span> Strategy and
                  Project Plan
                </h1>
              </Bounce>
            </div>
            <div className="overflow-x-auto scroll-container lg:mt-12">
              <Slide triggerOnce>
                <Roadmap />
              </Slide>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
