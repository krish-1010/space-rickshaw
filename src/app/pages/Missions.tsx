import Heading from "../components/Heading";
import Image from "next/image";
import one from "./one.jpg";

export default function Missions() {
  //flex min-h-screen flex-col items-center justify-between p-24
  return (
    <div>
      <Heading heading={"Our Missions"} />
      <div className="flex flex-col  md:flex-row justify-center items-center mt-28 m-8 gap-10">
        <MissionCard missionTitle={"Near Space Launch Vehicles"} />
        <MissionCard missionTitle={"Suborbital Payloads"} />
        <MissionCard missionTitle={" Orbital Satellites"} />
      </div>
    </div>
  );
}

interface MissionProps {
  missionTitle: String;
}

const MissionCard = ({ missionTitle }: MissionProps) => {
  return (
    <div className="2xl:w-[500px] z-50 relative hover:shadow-[0_0px_62px_26px_rgba(10,100,150,0.7)] hover:shadow-cyan-500  bg-white 2xl:h-[400px]  gap-3 md:w-[500px] md:h-[400px] rounded-2xl xl:gap-8 xl:w-[380px] xl:h-[500px] h-[600px] w-[380px]">
      <Image
        alt={"image of missions"}
        src={one}
        sizes="full"
        className="h-full rounded-2xl opacity-90"
      />
      <div className="absolute bottom-10 left-5 z-50 text-white ">
        {missionTitle}
      </div>
    </div>
  );
};
