"use client";

import { data } from "@/static/portfolioData";
import Card from "@/components/Card";
import { useWindowType } from "@/utils/window";

function page() {
  const renderedCard = data.map((item) => {
    const direction = item.id % 2 && "right";
    const windowType = useWindowType();

    const returnImgToken = () => {
      if (windowType === "mobile") {
        return "mobileImgUrl";
      } else if (windowType === "tablet") {
        return "tabletImgUrl";
      } else {
        return "desktopImgUrl";
      }
    };

    return (
      <Card
        key={item.id}
        title={item.title}
        description={item.description}
        buttonText="View Project"
        image={item[returnImgToken()]}
        imageAltText="Portfolio image"
        portfolioPage={true}
        direction={direction}
        buttonLink={`portfolio/${item.id}`}
      />
    );
  });

  return (
    <section className="flex flex-col gap-16 md:gap-24">{renderedCard}</section>
  );
}

export default page;
