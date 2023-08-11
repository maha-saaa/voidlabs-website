import Image from "next/image";
import { bahiana } from "@/app/styles/fonts";
import faqBg from "@/public/faq-bg.webp";
import Card from "./card";

export default function Faq() {
  return (
    <section id="faq" className="flex flex-col min-h-screen relative">
      <article className="flex flex-col w-full items-center sm:items-end px-14 sm:px-24 pt-56 gap-8 sm:gap-0">
        <div className="flex flex-col sm:flex-row w-full xl:w-[90%] xl:h-[10vh] justify-around items-center gap-8 sm:gap-0">
          <Card question={"What is Voidlabs?"} answer={"What is Voidlabs?"} />
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
          <Card
            question={"How do I get NFTs?"}
            answer={"How do I get NFTs?"}
            twolines={true}
          />
          <Card
            question={"How can we buy your NFTs?"}
            answer={"the Voidlabs is the next evolution of social connection."}
            twolines={true}
          />
        </div>

        <div className="flex flex-col sm:flex-row w-full xl:w-[80%] xl:h-[12vh] items-end justify-center sm:gap-[158px]">
          <div className="flex flex-col items-center gap-12">
            <div className="mr-20">
              <Card
                question={"What are the utilities?"}
                answer={"What are the utilities?"}
              />
            </div>
            <Card question={"Who are the team?"} answer={"Who are the team?"} />
          </div>
          <Card
            question={"Where can I find the NFTs?"}
            answer={"Where can I find the NFTs?"}
            twolines={true}
          />
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
