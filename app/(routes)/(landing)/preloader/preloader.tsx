"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FramerMotionWrapper } from "@/app/shared/components/framer-motion-wrapper/framer-motion-wrapper";
import { motion } from "framer-motion";
import Header from "@/app/shared/components/header/header";
import Home from "../home/home";
import About from "../about/about";
import Faq from "../faq/faq";
import Roadmap from "../roadmap/roadmap";
import Contact from "../contact/contact";
import preloaderBg from "@/public/preloader-bg.webp";
import stars1Bg from "@/public/stars-1-bg.webp";
import stars2Bg from "@/public/stars-2-bg.webp";
import preloaderRock from "@/public/preloader-rock-bg.svg";
import voidlabsLogo from "@/public/voidlabs-logo.svg";
import arrowDownIcon from "@/public/arrow-down-icon.svg";

type PreloaderProps = {};

export default function Preloader({}: PreloaderProps) {
  const [showPreloader, setShowPreloader] = useState(true);

  const displayWelcomeScreen = () => {
    setShowPreloader(false);
  };

  return (
    <FramerMotionWrapper>
      {showPreloader ? (
        <motion.section
          key="preloaderAnimation"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.5, ease: "circOut" },
          }}
          exit={{
            opacity: 0,
            transition: { duration: 1, ease: "circIn", delay: 2 },
          }}
          className="flex flex-col min-h-screen items-center relative z-50"
        >
          <article className="flex flex-col items-center px-6 pt-48">
            <motion.div
              key="logoAnimation"
              initial={{ y: 0 }}
              animate={{
                y: 0,
                transition: { duration: 0.5, ease: "circOut" },
              }}
              exit={{
                y: 500,
                transition: { duration: 1, ease: "circIn", delay: 2 },
              }}
            >
              <Image
                src={voidlabsLogo}
                alt="voidlabsLogo"
                priority
                className="mb-4 sm:mb-8"
              />
            </motion.div>
            <motion.button
              key="buttonAnimation"
              initial={{ y: 0 }}
              animate={{
                y: 0,
                transition: { duration: 0.5, ease: "circOut" },
              }}
              exit={{
                y: 500,
                transition: { duration: 2, ease: "circIn" },
              }}
              onClick={displayWelcomeScreen}
              className="px-6 py-3 mb-6 rounded-[20px] z-10 bg-gradient-to-b from-orange-light to-orange-medium"
            >
              <span className="text-xl font-semibold text-white ">
                Enter the void
              </span>
            </motion.button>
            <motion.div
              key="arrowAnimation"
              initial={{ y: 0 }}
              animate={{
                y: 0,
                transition: { duration: 0.5, ease: "circOut" },
              }}
              exit={{
                y: 500,
                transition: { duration: 1, ease: "circIn", delay: 0.5 },
              }}
            >
              <Image src={arrowDownIcon} alt="arrowDownIcon" />
            </motion.div>
          </article>
          <Image
            src={preloaderBg}
            alt="preloaderBg"
            className="-z-10"
            placeholder="blur"
            priority
            fill
            quality={100}
            sizes="100vw"
          />
          <motion.div
            key="stars1Animation"
            initial={{ rotate: 0 }}
            animate={{
              rotate: 360,
              transition: { duration: 80, ease: "circOut" },
            }}
            exit={{
              rotate: 0,
              transition: { duration: 1, ease: "circIn" },
            }}
            className="w-[1243px] h-[368px] absolute top-0 right-10"
          >
            <Image
              src={stars1Bg}
              alt="stars1Bg"
              priority
              quality={100}
              sizes="100vw"
            />
          </motion.div>
          <motion.div
            key="stars2Animation"
            initial={{ rotate: 0 }}
            animate={{
              rotate: 360,
              transition: { duration: 100, ease: "circOut" },
            }}
            exit={{
              rotate: 0,
              transition: { duration: 1, ease: "circIn" },
            }}
            className="w-[558px] h-[223-x] absolute bottom-32 right-60"
          >
            <Image
              src={stars2Bg}
              alt="stars2Bg"
              priority
              quality={100}
              sizes="100vw"
            />
          </motion.div>
          <motion.div
            key="rockAnimation"
            initial={{ y: 0 }}
            animate={{
              y: 0,
              transition: { duration: 0.5, ease: "circOut" },
            }}
            exit={{
              y: 500,
              transition: { duration: 1, ease: "circIn", delay: 1 },
            }}
            className="w-full absolute bottom-0 left-0 right-0"
          >
            <Image
              src={preloaderRock}
              alt="preloaderRock"
              className="w-full absolute bottom-0 left-0 right-0 -z-10"
              priority
              quality={100}
              sizes="100vw"
            />
          </motion.div>
        </motion.section>
      ) : (
        <>
          <motion.div
            key="homeAnimation"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 1, ease: "circOut", delay: 3 },
            }}
            exit={{
              opacity: 1,
              transition: { duration: 1, ease: "circIn" },
            }}
          >
            <Header />
            <Home />
          </motion.div>
          <About />
          <Faq />
          <Roadmap />
          <Contact />
        </>
      )}
    </FramerMotionWrapper>
  );
}
