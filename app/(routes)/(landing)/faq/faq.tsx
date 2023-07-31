import Image from "next/image";
import { bahiana } from "@/app/styles/fonts";
import faqBg from "@/public/faq-bg.webp";

export default function Faq() {
  return (
    <section id="faq" className="flex flex-col min-h-screen relative">
      <Image
        src={faqBg}
        alt="faqBg"
        className="-z-10"
        placeholder="blur"
        priority
        fill
        quality={100}
        sizes="100vw"
      />
      <article className="flex flex-col w-full px-14 sm:px-24 pt-56">
        <div className="flex flex-row justify-between items-center">
          <div></div>
          <div className="flex flex-col w-[443px] text-white">
            <span className={bahiana.className}>
              <h1 className="text-8xl text-white">FAQs</h1>
            </span>
            <p className="text-gray-light font-normal">
              the metaverse is the next evolution of social connection. our
              company’s vision is to help bring the Metaverse.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}
