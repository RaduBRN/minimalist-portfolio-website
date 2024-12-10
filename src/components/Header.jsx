"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./icons/Logo";
import IconHamburger from "./icons/IconHamburger";
import IconClose from "./icons/IconClose";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const menuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="flex justify-between items-center w-full max-w-[311px] md:max-w-[689px] lg:max-w-[1111px] mx-auto py-10">
      <div className="relative w-[60px] h-[32px]">
        <Logo fillColor="#33323D" />
      </div>
      <div className="hidden md:flex gap-10 text-grayBlue text-[12px] uppercase">
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
      <div className="relative block md:hidden">
        <button onClick={() => menuToggle()}>
          {showMenu ? <IconClose /> : <IconHamburger />}
        </button>
        {showMenu && (
          <div className="absolute right-0 top-16 z-10">
            <div className="flex flex-col py-5 bg-grayBlue items-center text-white uppercase [&>a]:px-16 [&>a]:py-[10px] [&>a]:text-[12px] [&>a]:tracking-[2px]">
              <Link className="hover:text-mint truncate" href="/">
                Home
              </Link>
              <Link className="hover:text-mint truncate" href="/portfolio">
                Portfolio
              </Link>
              <Link className="hover:text-mint truncate" href="/contact">
                Contact Me
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
