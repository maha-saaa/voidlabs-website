import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.svg";

type HeaderProps = {};

export default function Header({}: HeaderProps) {
  return (
    <header className="w-full px-5 sm:px-16 py-10 fixed top-0 z-40">
      <div className="flex flex-row items-center justify-center md:justify-between gap-4">
        <Link
          href="/"
          className="flex flex-row items-center justify-between gap-2"
        >
          <Image src={logo} alt="website logo" priority />
          <span className="text-xl font-medium text-white">voidlabs</span>
        </Link>
        <nav className="hidden md:flex flex-row gap-10">
          <Link
            href="#home"
            className="group transition-all duration-300 ease-in-out"
          >
            <span className="text-xl font-medium text-white hover:text-orange-light bg-left-bottom bg-gradient-to-r from-orange-light to-orange-light bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              Home
            </span>
          </Link>
          <Link
            href="#about"
            className="group transition-all duration-300 ease-in-out"
          >
            <span className="text-xl font-medium text-white hover:text-orange-light bg-left-bottom bg-gradient-to-r from-orange-light to-orange-light bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              About
            </span>
          </Link>
          <Link
            href="#faq"
            className="group transition-all duration-300 ease-in-out"
          >
            <span className="text-xl font-medium text-white hover:text-orange-light bg-left-bottom bg-gradient-to-r from-orange-light to-orange-light bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              FAQ
            </span>
          </Link>
          <Link
            href="#roadmap"
            className="group transition-all duration-300 ease-in-out"
          >
            <span className="text-xl font-medium text-white hover:text-orange-light bg-left-bottom bg-gradient-to-r from-orange-light to-orange-light bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              roadmap
            </span>
          </Link>
        </nav>
        <div className="hidden md:flex w-[119px]" />
      </div>
    </header>
  );
}
