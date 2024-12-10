"use client";

import { data } from "@/static/portfolioData";
import Hero from "@/components/Hero";
import Button from "@/components/Button";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import { useWindowType } from "@/utils/window";
import { useParams } from "next/navigation";

export default function PortfolioItemPage() {
  const params = useParams();
  const { id } = params;
  const windowType = useWindowType();

  const project = data.find((item) => item.id.toString() === id);

  if (!project) {
    return (
      <section className="h-[calc(100vh-468px)] flex justify-center items-center">
        <h1>No Project Found</h1>
      </section>
    );
  }

  const returnImgToken = () => {
    if (windowType === "mobile") {
      return ["detailMobileImage", "staticMobileImages"];
    } else if (windowType === "tablet") {
      return ["detailTabletImage", "staticTabletImages"];
    } else {
      return ["detailDesktopImage", "staticDesktopImages"];
    }
  };

  return (
    <section className="flex flex-col gap-10 md:gap-20">
      <div>
        <Hero image={project[returnImgToken()[0]]} detail={true} />
      </div>
      <div className="flex flex-col md:flex-row justify-evenly gap-10 md:gap-20">
        <div className="flex flex-col gap-7 justify-center text-grayBlue border-y border-[#979797/15] md:min-w-[350px] py-6 md:py-10 max-h-fit">
          <h2>{project.title}</h2>
          <div className="flex flex-col gap-6 body2">
            <p className="opacity-80">{project.description}</p>
            <div className="flex flex-col md:gap-3 text-[13px] md:text-[16px]">
              <p className="text-mint font-bold">
                Interaction Design / Front End Development
              </p>
              <span className="text-mint font-bold uppercase">
                {project.tags.join(" / ")}
              </span>
            </div>
            <Button buttonLink="#" buttonText="View Website" />
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-8">
            <h3>Project Background</h3>
            <p className="leading-[30px] text-grayBlue/80">
              {project.detailedDescription}
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <h3>Static Previews</h3>
            {project[returnImgToken()[1]].map((image, index) => (
              <Image
                key={index}
                className="object-cover object-center"
                src={image}
                height={400}
                width={635}
                alt="Static preview image"
              />
            ))}
          </div>
        </div>
      </div>
      <Navigation id={id} />
    </section>
  );
}
