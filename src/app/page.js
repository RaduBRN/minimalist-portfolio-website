"use client";

import Hero from "@/components/Hero";

import mobileHeroImage from "../../public/images/homepage/mobile/image-homepage-hero@2x.jpg";
import mobileCardImage from "../../public/images/homepage/mobile/image-homepage-profile@2x.jpg";

import tabletHeroImage from "../../public/images/homepage/tablet/image-homepage-hero@2x.jpg";
import tabletCardImage from "../../public/images/homepage/tablet/image-homepage-profile@2x.jpg";

import desktopHeroImage from "../../public/images/homepage/desktop/image-homepage-hero@2x.jpg";
import desktopCardImage from "../../public/images/homepage/desktop/image-homepage-profile@2x.jpg";

import Card from "@/components/Card";
import { useWindowType } from "@/utils/window";

export default function Home() {
  const windowType = useWindowType();

  const heroText =
    "Hey, I'm Alex Spencer and I love building beautiful websites";
  const heroButtonText = "About Me";

  const cardTitle = "About Me";
  const cardDescription =
    "I'm a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I’m based in London, UK, but I’m happy working remotely and have experience in remote teams. When I’m not coding, you’ll find me outdoors. I love being out in nature whether that’s going for a walk, run or cycling. I’d love you to check out my work.";
  const cardButtonText = "Go to portfolio";
  const cardImageAltText = "profile picture";

  const returnImgToken = () => {
    if (windowType === "mobile") {
      return [mobileHeroImage, mobileCardImage];
    } else if (windowType === "tablet") {
      return [tabletHeroImage, tabletCardImage];
    } else {
      return [desktopHeroImage, desktopCardImage];
    }
  };

  return (
    <section className="flex flex-col gap-20 md:gap-32">
      <Hero
        image={returnImgToken()[0]}
        title={heroText}
        buttonText={heroButtonText}
        buttonLink={`#${cardTitle}`}
      />
      <Card
        title={cardTitle}
        image={returnImgToken()[1]}
        description={cardDescription}
        imageAltText={cardImageAltText}
        buttonText={cardButtonText}
        buttonLink="portfolio"
      />
    </section>
  );
}
