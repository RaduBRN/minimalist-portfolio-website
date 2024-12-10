import Button from "./Button";

function ContactComponent() {
  return (
    <div className="flex flex-col md:flex-row gap-10 md:gap-0 justify-between max-w-[311px] md:max-w-[689px] lg:max-w-[1110px] mx-auto items-center pt-20 w-full">
      <div className="min-w-[350px] text-center px-6 md:px-0">
        <h2>Interested in doing a project together?</h2>
      </div>
      <div className="w-full h-px mx-10 bg-grayBlue/15 hidden md:block" />
      <div>
        <Button buttonLink={"/contact"} buttonText="Contact me" />
      </div>
    </div>
  );
}

export default ContactComponent;
