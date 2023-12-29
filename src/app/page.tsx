import Introduction from "./pages/Introduction";
import Team from "./pages/Team";
import Competition from "./pages/Competition";
import Missions from "./pages/Missions";
import RModel from "./pages/RModel";
import TheProblem from "./pages/TheProblem";
import Products from "./pages/Products";
import Timeline from "./pages/Timeline";
import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import { TeamPersons } from "./data/data";
import Navbar from "./components/Navbar";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const raleway = Raleway({
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Space Rickshaw",
  description: "Space Rickshaw by SpacekidzIndia",
};

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <div
        className={`${raleway.className} font-Raleway font-semibold in bg-[url('./images/bg.webp')] bg-cover bg-blend-none bg-opacity-90 bg-center h-screen relative w-screen flex justify-center items-center`}
      >
        <div className="absolute w-screen h-screen bg-gradient-to-t from-black    "></div>
        <div className="">
          <div className="flex flex-row  items-center justify-center">
            <h1 className="text-center relative text-5xl md:text-5xl xl:text-6xl 2xl:text-7xl">
              Space Rickshaw
            </h1>
          </div>
          <h2 className="relative font-Inter font-normal text-center mt-9 text-lg sm:text-lg md:text-xl 2xl:text-2xl">
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
