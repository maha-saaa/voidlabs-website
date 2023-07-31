import Image from "next/image";
import aboutBg from "@/public/about-bg.webp";
import { bahiana } from "@/app/styles/fonts";

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col min-h-screen items-center justify-center sm:items-start sm:justify-end p-6 relative"
    >
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
      <article className="flex flex-col w-[80%] sm:w-[60%] items-center sm:items-start text-center sm:text-start sm:pl-14">
        <span className={bahiana.className}>
          <h1 className="text-6xl sm:text-8xl text-white mb-4">
            About our team
          </h1>
        </span>
        <p className="text-lg sm:text-xl text-gray-light mb-8">
          once you taste the space, going back to the earth is difficult. civic
          establishments end up spacefaring or being wiped out.
        </p>
        <button className="w-[151px] bg-orange-light rounded-[20px] px-4 py-2 sm:px-5 sm:py-3">
          <span className="text-lg sm:text-xl font-semibold text-white ">
            View more
          </span>
        </button>
      </article>
    </section>
  );
}
