import Link from "next/link";

function Button({ buttonLink, buttonText }) {
  return (
    <div className="flex">
      <Link
        href={buttonLink}
        className="bg-transparent hover:bg-grayBlue hover:text-[#fff] border border-grayBlue w-fit py-4 px-8"
      >
        <p className="uppercase text-xs tracking-[2px] truncate">{buttonText}</p>
      </Link>
    </div>
  );
}

export default Button;
