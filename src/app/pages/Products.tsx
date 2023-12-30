import Image from "next/image";
import earth from "../images/earth.jpg";
import Heading from "../components/Heading";

export default function Products() {
  return (
    <div className="grid justify-items-center mt-32">
      <Heading heading={"Product"} />
      <div className="flex mt-16 flex-col items-center w-[80%] bg-black  bg-gradient-to-b from-blue-800 via-black to-black rounded-lg shadow md:flex-row md:max-w-[80%] xl:max-w-[80%] hover:shadow-[0_0px_62px_26px_rgba(10,100,150,0.7)] hover:shadow-cyan-500  ">
        <div className="w-[100%] md:w-[40%] h-full rounded-3xl">
          <Image
            className="object-cover w-full rounded-3xl h-96 md:h-full md:w-full md:rounded-xl"
            src={earth}
            alt="image"
            sizes="full"
          />
        </div>
        <div className="flex ml-10 mt-10 flex-col justify-between leading-normal w-[80%]  md:w-[60%]">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            Our Platform Provides you with:
          </h5>
          <p className="mb-3 font-normal text-white mt-10">
            LEO Platform - Providing quick access to low earth orbit on an
            already proven platform our satellite buses Re-Entry Capsule
            Platform: Providing access to unique and underserved Re-Entry and
            Sample Return Market like never before for advanced customers with
            unique requirements for biological samples, material research, etc,.
            Lunar Platform - Our flagship platform providing quick access to
            Lunar Orbit and tap the Lunar Economy
          </p>
        </div>
      </div>
    </div>
  );
}
