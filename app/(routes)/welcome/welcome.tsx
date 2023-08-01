"use client";
import React, { useState } from "react";
import Image from "next/image";
import Hero from "../(landing)/hero/hero";
import About from "../(landing)/about/about";
import Faq from "../(landing)/faq/faq";
import Roadmap from "../(landing)/roadmap/roadmap";
import Contact from "../(landing)/contact/contact";
import loadingBg from "@/public/loading-bg.webp";
import voidlabsLogo from "@/public/voidlabs-logo.svg";
import arrowDownIcon from "@/public/arrow-down-icon.svg";

type WelcomeProps = {};

export default function Welcome({}: WelcomeProps) {
  const [showWelcome, setShowWelcome] = useState(true);

  const displayWelcomeScreen = () => {
    setShowWelcome(false);
  };

  return (
    <>
      {showWelcome ? (
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
            <span className="text-white text-xl font-semibold">Enter the void</span>
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
          <Hero />
          <About />
          <Faq />
          <Roadmap />
          <Contact />
        </>
      )}
    </>
  );
}
