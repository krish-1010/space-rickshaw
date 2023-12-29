import Introduction from "./pages/Introduction";
import Team from "./pages/Team";
import Competition from "./pages/Competition";
import Missions from "./pages/Missions";
import RModel from "./pages/RModel";
import TheProblem from "./pages/TheProblem";
import Products from "./pages/Products";
import Timeline from "./pages/Timeline";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Space Rickshaw",
  description: "Space Rickshaw by SpacekidzIndia",
};

export default function Home() {
  const TeamPersons = [
    {
      name: "Srimathy Kesan ",
      role: "Founder & CEO",
      experience:
        "Spearheading and Forges Short- & Long-Term Strategies, First-ever Indian Ambassador for NASA, ESA, and GCTC Space Camps. Mission Director for 25+ Space Missions including 4 Orbital Satellites. Expert in InternationalCollaborations, PR and Business Development. Ex. NCC Cadet, Former National Level Basketball Player. 15+ Years of Experience in various businesses. Goldman Sachs - ISB Fellowship. Hons. Doctorate from Cosmopolitan University, USA for innovations in Education. Featured in Forbes Magazine",
      image: "image path",
    },
    {
      name: "RIFATH SHAAROOK ",
      role: "CTO & Lead Scientist ",
      experience:
        "Young Technologist, Innovator & Entrepreneur, 7+ Years of Experience with Nano Satellites and Space Missions. National Awardee by Govt. of India, Forbes Panellist, BBC Top 4 Young Innovators in the World, Mission Lead for 25+ Missions including Project Director for 4 Orbital Satellites, Small Spacecraft Solutions Architect with expertise in Embedded Systems and RF Communications. Masters' Thesis done under Dr. Mylswami Anndurai (PD-Chandrayaan 1 and MOM), Ph.D. Researcher in COTS Small Satellite based Deep Space Missions at Ariel University, Israel.",
      image: "image path",
    },
    {
      name: "MR. PRAKASH RAO",
      role: "Advisor",
      experience:
        "30+ years of experience in ISRO, working as a former Directory for Quality and Systems reliability, Space Infrastructure Program Office. Project Director for Numerous GEO & LEO Missions. Advises on Quality, Reliability, Mission Success, and technical strategy.",
      image: "image path",
    },
  ];

  return (
    <main className="overflow-hidden">
      <div className=" bg-[url('./images/1.jpg')] bg-gray-600 bg-cover bg-blend-overlay bg-center h-screen w-screen flex justify-center items-center">
        {/* <div className="absolute w-[98.3vw] h-[100vh] backdrop-blur-sm mix-blend-darken"></div> */}
        <div className="">
          <div className="flex flex-row max-sm:text-xl items-center justify-center">
            <h1 className="text-center relative max-sm:text-5xl z-10 text-7xl 2xl:text-9xl">
              Space Rickshaw
            </h1>
          </div>
          <h2 className="relative text-center text-xl mt-9 max-sm:text-base max-sm:mt-4  2xl:text-3xl">
            A Revolutionary Space as a Service Platform
          </h2>
        </div>
      </div>
      <Team persons={TeamPersons} />
      <TheProblem />
      <Introduction />
      <Missions />
      <Products />
      <Competition />
      <RModel />
      <Timeline />
    </main>
  );
}
