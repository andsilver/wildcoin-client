"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "@/assets/logo.png";
import Button from "./elements/Button";
import Link from "next/link";
import { Slide } from "react-awesome-reveal";
import { useAuth } from "@/contexts/AuthContext";
import { useAccount } from "wagmi";
import { useWeb3Modal } from "@web3modal/wagmi/react";

export default function Header() {
  const { address } = useAccount();
  const { login, logout, loading, user } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const { open } = useWeb3Modal();

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 400);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky w-full transition-all duration-500 ${
        isScrolled ? "shadow-b animate-slide-down top-0" : "bg-transparent"
      } z-50 `}
    >
      <Slide triggerOnce direction="down">
        <div
          className={`w-full transition-all duration-500 px-4 ${
            isScrolled
              ? "bg-dark-purple"
              : "bg-[linear-gradient(#070816_0%,rgba(3,11,21,0.42)_81.9%)]"
          }`}
        >
          <div className="mx-auto max-w-7xl flex items-center py-3 justify-between">
            <Link href="/">
              <Image
                width={64}
                height={64}
                src={Logo}
                alt={""}
                className="rounded-full"
              />
            </Link>
            <div className="md:flex hidden space-x-8 uppercase font-medium ml-auto mr-24">
              <Link href="#about" className="transition-all hover:text-primary">
                About
              </Link>
              <Link
                href="#tokenomics"
                className="transition-all hover:text-primary"
              >
                Tokenomics
              </Link>
              <Link
                href="#roadmap"
                className="transition-all hover:text-primary"
              >
                Roadmap
              </Link>
            </div>
            <div>
              {user ? (
                <Button disabled={loading} onClick={logout}>
                  Logout
                </Button>
              ) : (
                <Button
                  disabled={loading}
                  onClick={() => (address ? login() : open())}
                >
                  {address ? "Sign in" : "Connect"}
                </Button>
              )}
            </div>
          </div>
        </div>
      </Slide>
    </nav>
  );
}
