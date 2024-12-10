import Image from "next/image";
import Link from "next/link";
import DownArrows from "./icons/DownArrows";

function Hero({ image, title, buttonText, buttonLink, detail }) {
  const isSecondDiv = title || (buttonText && buttonLink);

  const detailPageStyle = detail ? `lg:!h-[500px]` : ``;
  return (
    <div className={`relative w-full lg:h-[600px] ${detailPageStyle}`}>
      <Image
        className="object-cover"
        src={image}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        alt="hero image"
      />
      {isSecondDiv && (
        <div className="md:absolute flex flex-col left-0 bottom-0 z-10 bg-white md:max-w-[514px] lg:max-w-[445px]">
          {title && <h1 className="py-7 md:py-14 md:pr-14">{title}</h1>}
          {buttonText && buttonLink && (
            <Link
              className="bg-darkBlue hover:bg-mint group flex items-center uppercase text-white text-xs tracking-[2px] gap-2 w-fit"
              href={buttonLink}
            >
              <div className="px-4 py-4 backdrop-brightness-[.90]">
                <DownArrows className="[&>g]:group-hover:stroke-[#fff]" />
              </div>
              <p className="px-8">{buttonText}</p>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

export default Hero;
