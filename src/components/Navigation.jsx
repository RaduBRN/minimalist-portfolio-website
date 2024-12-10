import { data } from "@/static/portfolioData";
import Link from "next/link";
import IconArrowLeft from "@/components/icons/IconArrowLeft";
import IconArrowRight from "@/components/icons/IconArrowRight";

const Navigation = ({ id }) => {
  let firstIndex = 0;
  let lastIndex = data.length - 1;

  let previous;
  let current = Number(id);
  let next;

  if (current === firstIndex) {
    previous = lastIndex;
    next = current + 1;
  } else if (current === lastIndex) {
    previous = current - 1;
    next = firstIndex;
  } else {
    previous = current - 1;
    next = current + 1;
  }

  return (
    <div className="grid grid-cols-2 divide-x border-t border-b">
      <Link
        href={`/portfolio/${previous}`}
        className="flex flex-col md:flex-row gap-4 md:gap-7 md:items-center py-5"
      >
        <IconArrowLeft />
        <div className="flex flex-col">
          <h3 className="text-[24px] md:text-[32px]">{data[previous].title}</h3>
          <span className="text-[14px] md:text-[16px] opacity-50">
            Previous Project
          </span>
        </div>
      </Link>
      <Link
        href={`/portfolio/${next}`}
        className="flex flex-col md:flex-row-reverse gap-4 md:gap-7 items-end md:items-center py-5"
      >
        <IconArrowRight />
        <div className="flex flex-col items-end">
          <h3 className="text-[24px] md:text-[32px]">{data[next].title}</h3>
          <span className="text-[14px] md:text-[16px] opacity-50">
            Next Project
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Navigation;
