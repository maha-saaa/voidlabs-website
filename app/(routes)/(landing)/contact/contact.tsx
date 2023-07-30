import Image from "next/image";
import contactBg from "@/public/contact-bg.webp";

export default function Contact() {
  return (
    <section id="contact" className="flex flex-col min-h-screen relative">
      <Image
        src={contactBg}
        alt="contactBg"
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
