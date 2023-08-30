import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FramerMotionWrapper } from "@/app/shared/components/framer-motion-wrapper/framer-motion-wrapper";
import { wordAnimation } from "@/app/shared/animations";
import { bahiana } from "@/app/styles/fonts";
import faqBg from "@/public/faq-bg.webp";
import Card from "./card";

export default function Faq() {
  return (
    <section id="faq" className="flex flex-col min-h-screen relative">
      <article className="flex flex-col w-full px-14 xl:px-40 gap-8 xl:gap-0 z-10">
        <div className="flex flex-row xl:h-[28vh] xl:items-end justify-center xl:justify-end xl:pr-40">
          <FramerMotionWrapper>
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
          </FramerMotionWrapper>
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
                  href="https://discord.gg/sEgthVRPRM"
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
