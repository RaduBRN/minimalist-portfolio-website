"use client";

import ContactComponent from "./ContactComponent";
import IconGithub from "./icons/IconGithub";
import IconLinkedin from "./icons/IconLinkedin";
import IconTwitter from "./icons/IconTwitter";
import Logo from "./icons/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Footer() {
  const path = usePathname();

  const renderContactSection = () => {
    return path === "/contact" ? false : true;
  };

  return (
    <footer className="flex flex-col w-full">
      {renderContactSection() && <ContactComponent />}
      <div className="bg-grayBlue h-fit md:h-[80px] mt-28 py-12 md:py-0">
        <div className="flex flex-col gap-8 md:flex-row justify-between items-center max-w-[311px] md:max-w-[689px] lg:max-w-[1110px] h-full mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-14">
            <div className="relative w-[60px] h-[32px]">
              <Logo fillColor="#fff" />
            </div>
            <div className="flex flex-col md:flex-row text-white text-xs text-center md:text-start uppercase gap-8 md:gap-14">
              <Link className="hover:text-mint" href="/">
                Home
              </Link>
              <Link className="hover:text-mint" href="/portfolio">
                Portfolio
              </Link>
              <Link className="hover:text-mint" href="/contact">
                Contact Me
              </Link>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <IconGithub fillColor="#fff" />
            <IconTwitter fillColor="#fff" />
            <IconLinkedin fillColor="#fff" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
