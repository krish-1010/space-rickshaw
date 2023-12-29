import Heading from "../components/Heading";
import Image from "next/image";

export default function TheProblem() {
  return (
    <div
      id="TheProblem"
      className="mt-16 flex flex-col justify-center items-center"
    >
      <Heading heading={"The Problem"} />
      <div className="flex flex-col md:flex-row w-[80%] justify-center items-center md:items-start mt-20">
        <div className="grid grid-cols-2 grid-rows-2 items-center justify-center justify-items-center sm:grid sm:grid-cols-2  xl:grid xl:grid-cols-2 xl:grid-rows-2 gap-8">
          <div>
            <Image src={""} alt="Image" width="200" height="200" />
          </div>
          <div>
            <Image src={""} alt="Image" width="200" height="200" />
          </div>
          <div>
            <Image src={""} alt="Image" width="200" height="200" />
          </div>
          <div>
            <Image src={""} alt="Image" width="200" height="200" />
          </div>
        </div>
        <div className="w-[60%] mt-10">
          <div>
            The payloads need other subsystems and infrastructures to function,
            like structure, power, computing, communication, orientation
            control, and propulsion as well as launch services, different
            licenses, legal requirements, and ground station infrastructure.
            Just like how people needed to set up their own servers, network,
            power, and infrastructures in the earlier days of the Internet. For
            Customers, It comes with a cost of a lot of additional
            responsibilities, and operations additionally apart from developing
            their payload, additional cost and time
          </div>
        </div>
      </div>
    </div>
  );
}
