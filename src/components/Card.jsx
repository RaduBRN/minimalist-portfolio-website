import Image from "next/image";
import Button from "./Button";

function Card({
  title,
  description,
  buttonText,
  image,
  imageAltText,
  portfolioPage,
  direction,
  buttonLink,
}) {
  const portfolioStyle = portfolioPage
    ? `!h-[288px] md:!h-[314px] lg:!h-[500px]`
    : ``;

  return (
    <section
      id={title}
      className={`flex flex-col md:flex-row ${
        direction && "md:flex-row-reverse"
      } md:items-center lg:items-stretch gap-10 md:gap-16 lg:gap-28 w-full`}
    >
      <div
        className={`relative w-full md:w-[339px] lg:w-[540px] h-[346px] md:h-[600px] ${portfolioStyle}`}
      >
        <Image className={`object-cover`} src={image} alt={imageAltText} fill />
      </div>
      <div className="flex flex-col gap-7 justify-center text-grayBlue border-y border-[#979797/15] md:max-w-[281px] lg:max-w-[350px] py-8 lg:py-10">
        <h2>{title}</h2>
        <div className="flex flex-col gap-6">
          <p className="opacity-80">{description}</p>
          <Button buttonLink={buttonLink} buttonText={buttonText} />
        </div>
      </div>
    </section>
  );
}

export default Card;
