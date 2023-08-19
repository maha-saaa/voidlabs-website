import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FramerMotionWrapper } from "@/app/shared/components/framer-motion-wrapper/framer-motion-wrapper";
import { wordAnimation } from "@/app/shared/animations";
import { bahiana } from "@/app/styles/fonts";
import { TWITTER, DISCORD, INSTAGRAM } from "@/app/shared/constants";
import contactBg from "@/public/contact-bg.webp";
import twitterIcon from "@/public/twitter-icon.svg";
import discordIcon from "@/public/discord-icon.svg";
import instagramIcon from "@/public/instagram-icon.svg";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col min-h-screen relative bg-purple-gradient-dark"
    >
      <FramerMotionWrapper>
        <article className="flex flex-col w-full min-h-screen justify-center items-center px-14 sm:px-24">
          <span className={bahiana.className}>
            <motion.h1
              className="text-5xl sm:text-8xl text-white text-center pb-4 sm:pb-96"
              initial="initial"
              whileInView="animate"
              exit="exit"
              variants={wordAnimation}
            >
              stay connected with us
            </motion.h1>
          </span>
          <motion.p
            className="text-xl text-gray-gradient-light text-center pb-8"
            initial="initial"
            whileInView="animate"
            exit="exit"
            variants={wordAnimation}
          >
            follow us on our social media to stay connected and up to date with
            all metastones news.
          </motion.p>
          <motion.div
            className="flex flex-row justify-between items-center gap-1 sm:gap-10 relative"
            initial="initial"
            whileInView="animate"
            exit="exit"
            variants={wordAnimation}
          >
            <Link href={TWITTER} target="_blank" rel="noopener noreferrer">
              <Image
                src={twitterIcon}
                alt="twitterIcon"
                priority
                quality={100}
                sizes="100vw"
              />
            </Link>
            <Link href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
              <Image
                src={instagramIcon}
                alt="instagramIcon"
                priority
                quality={100}
                sizes="100vw"
              />
            </Link>
            <Link href={DISCORD} target="_blank" rel="noopener noreferrer">
              <Image
                src={discordIcon}
                alt="discordIcon"
                priority
                quality={100}
                sizes="100vw"
              />
            </Link>
          </motion.div>
        </article>
      </FramerMotionWrapper>
      <Image
        src={contactBg}
        alt="contactBg"
        className="-z-10 w-full h-[750px] absolute bottom-0"
        placeholder="blur"
        priority
        quality={100}
        sizes="100vw"
      />
    </section>
  );
}
