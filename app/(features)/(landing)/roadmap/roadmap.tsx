import Image from "next/image";
import { motion } from "framer-motion";
import { FramerMotionWrapper } from "@/app/components/framer-motion-wrapper/framer-motion-wrapper";
import { wordAnimation } from "@/app/utils/animations";
import { bahiana } from "@/app/styles/fonts";
import roadmapBg from "@/public/roadmap-bg.webp";
import rock1Bg from "@/public/rock-1-bg.webp";
import rock2Bg from "@/public/rock-2-bg.webp";
import rock3Bg from "@/public/rock-3-bg.webp";
import rock4Bg from "@/public/rock-4-bg.webp";

export default function Roadmap() {
  return (
    <FramerMotionWrapper>
      <section
        id="roadmap"
        className="flex flex-col h-[2208px] relative bg-purple-dark"
      >
        <article className="flex flex-col w-full gap-4 px-14 sm:px-24 pt-[438px] z-10">
          <span className="text-8xl font-bold text-white self-center lg:self-end lg:mr-8">
            <motion.h1
              className={bahiana.className}
              initial="initial"
              whileInView="animate"
              exit="exit"
              variants={wordAnimation}
            >
              Voidlabs Roadmap v1
            </motion.h1>
          </span>
          <div className="flex flex-col sm:flex-row sm:justify-between relative">
            <motion.div
              className="flex flex-col w-[290px] sm:w-[490px] self-center sm:self-start gap-4"
              initial="initial"
              whileInView="animate"
              exit="exit"
              variants={wordAnimation}
            >
              <Image
                src={rock1Bg}
                alt="rock1Bg"
                className="w-[213px] h-[192px] sm:w-[313px] sm:h-[292px]"
                placeholder="blur"
                quality={100}
                sizes="100vw"
              />
              <p className="text-sm sm:text-base text-gray-gradient-light">
                Start Discord server and twitter ✓
                <br /> Website going live ✓
                <br /> Game logic and blueprint ready ✓
                <br /> Grow our family and start Twitter raids and collabs ✓
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col w-[290px] sm:w-[490px] self-center sm:self-end gap-4 sm:pt-32"
              initial="initial"
              whileInView="animate"
              exit="exit"
              variants={wordAnimation}
            >
              <Image
                src={rock2Bg}
                alt="rock2Bg"
                className="w-[196px] h-[210px] sm:w-[296px] sm:h-[310px]"
                placeholder="blur"
                quality={100}
                sizes="100vw"
              />
              <p className="text-sm sm:text-base text-gray-gradient-light">
                Whitepaper + doxxing certificate
                <br /> Game story and lore reveal
                <br /> AMA with the team
                <br /> Minting start
              </p>
            </motion.div>
          </div>
          <motion.div
            className="flex flex-col w-[290px] sm:w-[490px] self-center gap-4"
            initial="initial"
            whileInView="animate"
            exit="exit"
            variants={wordAnimation}
          >
            <Image
              src={rock3Bg}
              alt="rock3Bg"
              className="w-[151px] h-[158px] sm:w-[251px] sm:h-[258px]"
              placeholder="blur"
              quality={100}
              sizes="100vw"
            />
            <p className="text-sm sm:text-base text-gray-gradient-light">
              List Voidlabs on Magic Eden
              <br /> Verification for holders and gated chat
              <br /> Launch staking platform
              <br /> Game reveal and start
              <br /> Secret project in development reveal
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col w-[290px] sm:w-[490px] self-center sm:self-end gap-4"
            initial="initial"
            whileInView="animate"
            exit="exit"
            variants={wordAnimation}
          >
            <Image
              src={rock4Bg}
              alt="rock4Bg"
              className="w-[140px] h-[169px] sm:w-[240px] sm:h-[269px]"
              placeholder="blur"
              quality={100}
              sizes="100vw"
            />
            <p className="text-sm sm:text-base text-gray-gradient-light">
              Game improvement + new games
              <br /> New roadmap reveal
              <br /> art upgrade plan reveal
              <br /> New collection launch
              <br /> IRL utility reveal More on roadmap v2
            </p>
          </motion.div>
        </article>
        <Image
          src={roadmapBg}
          alt="roadmapBg"
          placeholder="blur"
          priority
          fill
          quality={100}
          sizes="100vw"
        />
      </section>
    </FramerMotionWrapper>
  );
}
