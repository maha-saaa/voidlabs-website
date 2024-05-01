"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { wordAnimation } from "@/utils/animations";
import { DISCORD } from "@/utils/constants";
import { bahiana } from "@/styles/fonts";
import Card from "./card";
import faqBg from "../../../public/faq-bg.webp";

export default function Faq() {
  const [selectedCardId, setSelectedCardId] = useState(0);

  const onCardClick = (id: number) => {
    setSelectedCardId(selectedCardId === id ? 0 : id);
  };

  return (
    <section id="faq" className="flex flex-col min-h-screen relative">
      <article className="flex flex-col w-full px-14 xl:px-40 gap-8 xl:gap-0 z-10">
        <div className="flex flex-row xl:h-[28vh] xl:items-end justify-center xl:justify-end xl:pr-40">
          <span className={bahiana.className}>
            <motion.h1
              className="text-8xl text-white"
              initial="initial"
              whileInView="animate"
              exit="exit"
              variants={wordAnimation}
            >
              FAQs
            </motion.h1>
          </span>
        </div>
        <div className="flex flex-row xl:h-[1vh] items-center xl:pl-10">
          <Card
            question={<>What is Voidlabs goal?</>}
            answer={
              <>
                We aim to create fun
                <br /> P2E games that are
                <br /> connected to real
                <br /> world and real
                <br /> utility.
              </>
            }
            id={1}
            selectedCardId={selectedCardId}
            onClick={onCardClick}
          />
        </div>

        <div className="flex flex-col xl:flex-row xl:h-[40vh] items-center xl:justify-start xl:gap-[170px] xl:pt-44">
          <Card
            question={
              <>
                Where can I learn
                <br /> more about the
                <br /> project?
              </>
            }
            answer={
              <>
                Please join our
                <br />
                <Link
                  href={DISCORD}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Discord
                </Link>
                <br />
                for full details.
              </>
            }
            twolines={true}
            id={2}
            selectedCardId={selectedCardId}
            onClick={onCardClick}
          />
          <Card
            question={<>How does the P2E game work?</>}
            answer={
              <>
                You can stake the NFTs to earn
                <br /> or also play the game
                <br /> and earn the prizes.
              </>
            }
            twolines={true}
            id={3}
            selectedCardId={selectedCardId}
            onClick={onCardClick}
          />
        </div>

        <div className="flex flex-col xl:flex-row xl:h-[30vh] items-center xl:justify-end xl:gap-[158px] xl:pr-4">
          <div className="flex flex-col items-center gap-12">
            <Card
              question={<>Will there be art upgrade later?</>}
              answer={
                <>
                  Yes, we will provide 3D <br /> art upgrades.
                </>
              }
              id={4}
              selectedCardId={selectedCardId}
              onClick={onCardClick}
            />
            <Card
              question={<>Who are the Team?</>}
              answer={
                <>
                  You can view each
                  <br /> team member in
                  <br /> the about Team
                  <br /> section.
                </>
              }
              id={5}
              selectedCardId={selectedCardId}
              onClick={onCardClick}
            />
          </div>
          <Card
            question={<>Where can I buy?</>}
            answer={
              <>
                Link for the
                <br /> Marketplace
                <br /> will be posted
                <br /> after mint.
              </>
            }
            twolines={true}
            id={6}
            selectedCardId={selectedCardId}
            onClick={onCardClick}
          />
        </div>
      </article>
      <Image
        src={faqBg}
        alt="faqBg"
        placeholder="blur"
        priority
        fill
        quality={100}
        sizes="100vw"
      />
    </section>
  );
}
