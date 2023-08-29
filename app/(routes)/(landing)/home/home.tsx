import Image from "next/image";
import homeBg from "@/public/home-bg.webp";
import voidlabsLogo from "@/public/voidlabs-logo.svg";

export default function Home() {
  return (
    <section
      id="home"
      className="flex flex-col min-h-screen items-center justify-center relative"
    >
      <article className="flex flex-col min-h-screen gap-4 items-center text-center px-6 pt-48">
        <h1 className="text-xl font-semibold text-gray-gradient-light">
          Welcome to
        </h1>
        <Image src={voidlabsLogo} alt="voidlabs logo" priority />
        <p className="text-xl text-gray-gradient-light">
          where the full potential of blockchain data is unleashed
        </p>
      </article>
      <Image
        src={homeBg}
        alt="heroBg"
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
