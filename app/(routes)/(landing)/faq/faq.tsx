import Image from "next/image";
import { bahiana } from "@/app/styles/fonts";
import faqBg from "@/public/faq-bg.webp";
import Card from "./card";

export default function Faq() {
  return (
    <section id="faq" className="flex flex-col min-h-screen relative">
      <article className="flex flex-col w-full items-center sm:items-end px-14 sm:px-24 pt-56 gap-8 sm:gap-0">
        <div className="flex flex-col sm:flex-row w-full xl:w-[90%] xl:h-[10vh] justify-around items-center gap-8 sm:gap-0">
          <Card text={"What is Voidlabs?"} />
          <div className="flex flex-col w-full sm:w-[443px] text-white">
            <span className={bahiana.className}>
              <h1 className="text-4xl xl:text-8xl text-white">FAQs</h1>
            </span>
            <p className="text-gray-gradient-light font-normal">
              the metaverse is the next evolution of social connection. our
              company’s vision is to help bring the Metaverse.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row w-full xl:w-[96%] xl:h-[45vh] justify-start items-center sm:gap-[178px]">
          <Card text={"How do I get NFTs?"} twolines={true} />
          <div className="flex flex-row items-center">
            <div className="flex flex-col items-center mr-[-3px] mt-[88px]">
              <div className="w-0.5 h-20 bg-gray-light" />
              <div className="w-2 h-2 rounded bg-gray-light" />
            </div>
            <div className="w-20 h-0.5 bg-gray-light" />
            <div className="flex flex-col gap-3 px-6 py-3 rounded-[20px] border-2 border-gray-light">
              <h2 className="text-xl font-medium text-gray-light">
                How can we buy your NFTs?
              </h2>
              <div className="w-full h-0.5 bg-shadow-gradient-light" />
              <h3 className="text-xl font-normal text-gray-gradient-light">
                the Voidlabs is the next
                <br /> evolution of social connection.
              </h3>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row w-full xl:w-[80%] xl:h-[12vh] items-end justify-center sm:gap-[158px]">
          <div className="flex flex-col items-center gap-12">
            <div className="mr-20">
              <Card text={"What are the utilities?"} />
            </div>
            <Card text={"Who are the team?"} />
          </div>
          <Card text={"Where can I find the NFTs?"} twolines={true} />
        </div>
      </article>
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
    </section>
  );
}
