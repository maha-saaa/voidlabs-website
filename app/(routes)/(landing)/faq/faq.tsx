import Image from "next/image";
import faqBg from "@/public/faq-bg.webp";

export default function Faq() {
  return (
    <section id="faq" className="flex flex-col min-h-screen relative">
      <Image
        src={faqBg}
        alt="faqBg"
        className="object-cover -z-10"
        placeholder="blur"
        priority
        fill
        quality={100}
        sizes="100vw"
      />
    </section>
  );
}
