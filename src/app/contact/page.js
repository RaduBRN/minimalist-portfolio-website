import IconGithub from "@/components/icons/IconGithub";
import IconLinkedin from "@/components/icons/IconLinkedin";
import IconTwitter from "@/components/icons/IconTwitter";
import FormComponent from "@/components/FormComponent";

function page() {
  return (
    <section className="flex flex-col pt-6">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-20 border-t border-grayBlue/15 py-6 lg:py-12">
        <h2 className="min-w-[350px]">Get in Touch</h2>
        <div className="flex flex-col gap-6">
          <p className="text-grayBlue/80">
            I&apos;d love to hear about what you&apos;re working on and how I
            could help. I&apos;m currently looking for a new role and am open to
            a wide range of opportunities. My preference would be to find a
            position in a company in London. But I&apos;m also happy to hear
            about opportunities that don&apos;t fit that description. I&apos;m a
            hard-working and positive person who will always approach each task
            with a sense of purpose and attention to detail. Please do feel free
            to check out my online profiles below and get in touch using the
            form.
          </p>
          <div className="flex gap-4 items-center">
            <IconGithub fillColor="#33323D" />
            <IconTwitter fillColor="#33323D" />
            <IconLinkedin fillColor="#33323D" />
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-20 border-t border-grayBlue/15 pt-8">
        <h2 className="min-w-[350px]">Contact Me</h2>
        <div className="flex flex-col gap-10 w-full">
          <FormComponent />
        </div>
      </div>
    </section>
  );
}

export default page;
