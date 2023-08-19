import Image from "next/image";
import { motion } from "framer-motion";
import { FramerMotionWrapper } from "@/app/shared/components/framer-motion-wrapper/framer-motion-wrapper";
import { wordAnimation } from "@/app/shared/animations";
import { bahiana } from "@/app/styles/fonts";
import aboutBg from "@/public/about-bg.webp";

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col min-h-screen items-center justify-center sm:items-start sm:justify-end p-6 relative"
    >
      <article className="flex flex-row items-center justify-center sm:justify-start sm:pl-14 sm:pb-20">
        <div className="hidden sm:flex flex-col gap-4">
          <div className="h-[44px] w-2 inline-block m-0 rounded bg-orange-gradient-light" />
          <div className="h-[88px] w-2 inline-block m-0 rounded bg-orange-light" />
          <div className="h-[44px] w-2 inline-block m-0 rounded bg-orange-gradient-light" />
        </div>
        <FramerMotionWrapper>
          <div className="flex flex-col  items-center sm:items-start text-center sm:text-start sm:pl-28">
            <span className={bahiana.className}>
              <motion.h1
                className="text-6xl sm:text-8xl text-white mb-4"
                initial="initial"
                whileInView="animate"
                exit="exit"
                variants={wordAnimation}
              >
                About our team
              </motion.h1>
            </span>
            <motion.p
              className="text-lg sm:text-xl text-gray-gradient-light mb-8"
              initial="initial"
              whileInView="animate"
              exit="exit"
              variants={wordAnimation}
            >
              once you taste the space, going back to the
              <br /> earth is difficult. civic establishments end up
              <br /> spacefaring or being wiped out.
            </motion.p>
            <button className="w-[151px] bg-orange-light rounded-[20px] px-4 py-2 sm:px-5 sm:py-3">
              <span className="text-lg sm:text-xl font-semibold text-white ">
                View more
              </span>
            </button>
          </div>
        </FramerMotionWrapper>
      </article>
      <Image
        src={aboutBg}
        alt="aboutBg"
        className="-z-10"
        placeholder="blur"
        priority
        fill
        quality={100}
        sizes="100vw"
      />
    </section>
  );
}
