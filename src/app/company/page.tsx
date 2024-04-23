import Button from "@/components/ui/button";
import Image from "next/image";
import SectionHeading from "./section-heading";
export default function Company() {
  return (
    <div className="mt-8 flex flex-col gap-4 lg:gap-8">
      {/* COVER AND PROFILE */}
      <header className="relative lg:mb-16">
        <div className="flex items-center justify-center">
          <Image
            src={"/assets/company/cover.png"}
            alt="cover photo"
            width={1600}
            height={456}
          />
        </div>
        <Image
          src={"/assets/company/profile.png"}
          alt="profile"
          width={150}
          height={150}
          className="absolute top-96 left-8 rounded-full"
        />
      </header>
      {/* NAMES */}
      <div className="flex lg:gap-8 mt-14">
        <h4 className="text-black font-sans lg:text-4xl font-bold">
          Company Name
        </h4>
        <Button text="Follow" />
        <Button text="Get Emails About New Jobs" value={"primary"} />
      </div>
      {/* BIO */}
      <p className="font-sans lg:text-xl text-gray-500">Silicon Valley</p>
      <span className="border border-gray-200" />
      {/* ABOUT */}
      <>
        <SectionHeading text="About" />
        <p className="font-sans text-base text-gray-500">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
          fugiat in totam nisi! Tempore reprehenderit quibusdam quasi voluptas.
          Laboriosam nesciunt libero quod commodi facilis rerum recusandae
          veritatis. Placeat, quos dolorum?
        </p>
        <p className="font-sans text-base text-gray-500">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
          fugiat in totam nisi! Tempore reprehenderit quibusdam quasi voluptas.
          Laboriosam nesciunt libero quod commodi facilis rerum recusandae
          veritatis. Placeat, quos dolorum? Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Commodi minima incidunt inventore quod
          quaerat provident numquam voluptatibus maxime velit atque quis,
          impedit tempore autem dolores? Officiis qui quos distinctio sequi!
        </p>
      </>
      {/* Technologies */}
      <SectionHeading text="What Technologies We Use" />
      {/* Team */}
      <SectionHeading text="Our Team" />
      <div className="flex flex-col lg:gap-2">
        <Image
          className="rounded-md"
          src={"/assets/company/cover.png"}
          alt="This"
          width={150}
          height={150}
        />
      </div>
    </div>
  );
}
