"use client";
import React, { useState } from "react";
import Image from "next/image";
import Home from "../home/home";
import About from "../about/about";
import Faq from "../faq/faq";
import Roadmap from "../roadmap/roadmap";
import Contact from "../contact/contact";
import loadingBg from "@/public/loading-bg.webp";
import voidlabsLogo from "@/public/voidlabs-logo.svg";
import arrowDownIcon from "@/public/arrow-down-icon.svg";

type PreloaderProps = {};

export default function Preloader({}: PreloaderProps) {
  const [showPreloader, setShowPreloader] = useState(true);

  const displayWelcomeScreen = () => {
    setShowPreloader(false);
  };

  return (
    <>
      {showPreloader ? (
        <section className="flex flex-col min-h-screen items-center justify-center p-6 relative z-50">
          <Image
            src={voidlabsLogo}
            alt="voidlabs logo"
            priority
            className="mb-8"
          />
          <button
            onClick={displayWelcomeScreen}
            className="px-4 py-2 sm:px-12 sm:py-5 mb-6 rounded-[20px] bg-orange-light"
          >
            <span className="text-white text-xl font-semibold">
              Enter the void
            </span>
          </button>
          <Image src={arrowDownIcon} alt="arrow-down" />
          <Image
            src={loadingBg}
            alt="loading background image"
            className="-z-10"
            placeholder="blur"
            priority
            fill
            quality={100}
            sizes="100vw"
          />
        </section>
      ) : (
        <>
          <Home />
          <About />
          <Faq />
          <Roadmap />
          <Contact />
        </>
      )}
    </>
  );
}
