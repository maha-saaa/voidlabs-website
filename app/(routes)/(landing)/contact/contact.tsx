import Image from "next/image";
import { bahiana } from "@/app/styles/fonts";
import contactBg from "@/public/contact-bg.webp";
import twitterIcon from "@/public/twitter-icon.svg";
import telegramIcon from "@/public/telegram-icon.svg";
import facebookIcon from "@/public/facebook-icon.svg";
import pinterestIcon from "@/public/pinterest-icon.svg";
import discordIcon from "@/public/discord-icon.svg";
import linkedinIcon from "@/public/linkedin-icon.svg";

export default function Contact() {
  return (
    <section id="contact" className="flex flex-col min-h-screen relative">
      <article className="flex flex-col w-full min-h-screen justify-center items-center px-14 sm:px-24 ">
        <span className={bahiana.className}>
          <h1 className="text-5xl sm:text-8xl text-white text-center pb-4 sm:pb-96">
            stay connected with us
          </h1>
        </span>
        <p className="text-xl text-gray-gradient-light text-center pb-8">
          follow us on our social media to stay connected and up to date with
          all metastones news.
        </p>
        <div className="flex flex-row justify-between items-center gap-1 sm:gap-10 relative">
          <Image
            src={twitterIcon}
            alt="twitterIcon"
            priority
            quality={100}
            sizes="100vw"
          />
          <Image
            src={telegramIcon}
            alt="telegramIcon"
            priority
            quality={100}
            sizes="100vw"
          />
          <Image
            src={facebookIcon}
            alt="facebookIcon"
            priority
            quality={100}
            sizes="100vw"
          />
          <Image
            src={pinterestIcon}
            alt="pinterestIcon"
            priority
            quality={100}
            sizes="100vw"
          />
          <Image
            src={discordIcon}
            alt="discordIcon"
            priority
            quality={100}
            sizes="100vw"
          />
          <Image
            src={linkedinIcon}
            alt="linkedinIcon"
            priority
            quality={100}
            sizes="100vw"
          />
        </div>
      </article>
      <Image
        src={contactBg}
        alt="contactBg"
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
