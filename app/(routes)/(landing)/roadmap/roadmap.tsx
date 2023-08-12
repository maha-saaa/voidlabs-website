import Image from "next/image";
import { bahiana } from "@/app/styles/fonts";
import roadmapBg from "@/public/roadmap-bg.webp";
import rock1Bg from "@/public/rock-1-bg.webp";
import rock2Bg from "@/public/rock-2-bg.webp";
import rock3Bg from "@/public/rock-3-bg.webp";
import rock4Bg from "@/public/rock-4-bg.webp";

export default function Roadmap() {
  return (
    <section id="roadmap" className="flex flex-col h-[2208px] relative bg-purple-dark">
      <article className="flex flex-col w-full gap-4 px-14 sm:px-24 pt-[438px] z-10">
        <span className="text-8xl font-bold text-white self-center lg:self-end lg:mr-80">
          <h1 className={bahiana.className}>Roadmap</h1>
        </span>
        <div className="flex flex-col sm:flex-row sm:justify-between relative">
          <div className="w-[290px] sm:w-[490px] self-center sm:self-start">
            <Image
              src={rock1Bg}
              alt="rock1Bg"
              className="w-[319px] h-[303px]"
              placeholder="blur"
              priority
              quality={100}
              sizes="100vw"
            />
            <p className="text-gray-gradient-light">
              creating a community where like-minded indivisuals can connect and
              speak freely palm & astrology readings center within nft worlds.
            </p>
          </div>
          <div className="w-[290px] sm:w-[490px] self-center sm:self-end sm:pt-32">
            <Image
              src={rock2Bg}
              alt="rock2Bg"
              className="w-[319px] h-[303px]"
              placeholder="blur"
              priority
              quality={100}
              sizes="100vw"
            />
            <p className="text-gray-gradient-light">
              creating a community where like-minded indivisuals can connect and
              speak freely palm & astrology readings center within nft worlds.
            </p>
          </div>
        </div>
        <div className="w-[290px] sm:w-[490px] self-center">
          <Image
            src={rock3Bg}
            alt="rock3Bg"
            className="w-[319px] h-[303px]"
            placeholder="blur"
            priority
            quality={100}
            sizes="100vw"
          />
          <p className="text-gray-gradient-light">
            creating a community where like-minded indivisuals can connect and
            speak freely palm & astrology readings center within nft worlds.
          </p>
        </div>
        <div className="w-[290px] sm:w-[490px] self-center sm:self-end">
          <Image
            src={rock4Bg}
            alt="rock4Bg"
            className="w-[319px] h-[303px]"
            placeholder="blur"
            priority
            quality={100}
            sizes="100vw"
          />
          <p className="text-gray-gradient-light">
            creating a community where like-minded indivisuals can connect and
            speak freely palm & astrology readings center within nft worlds.
          </p>
        </div>
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
  );
}
