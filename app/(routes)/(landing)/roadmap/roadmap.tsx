import Image from "next/image";
import roadmapBg from "@/public/roadmap-bg.webp";

export default function Roadmap() {
  return (
    <section id="roadmap" className="flex flex-col min-h-screen relative">
      <Image
        src={roadmapBg}
        alt="roadmapBg"
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
