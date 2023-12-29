import Heading from "../components/Heading";
import Image from "next/image";

export default function TheProblem() {
  return (
    <div className="mt-16">
      <Heading heading={"The Problem"} />
      <div className="flex flex-col md:flex-row">
        <div className="grid">
          <Image src={""} alt="Image" width="500" height="500" />
        </div>
        <div></div>
      </div>
    </div>
  );
}
