import { MapPin } from "lucide-react";
// import styles from "./HeroSection.module.css";
import HeroSectionFilter from "./HeroSectionFilter";

const HeroSection = () => {
  return (
    // className={`${styles.banner} relative w-full h-screen flex flex-col items-center justify-center text-center bg-cover bg-center`}
    <div
      className={`w-full h-80 flex flex-col items-center justify-center text-center bg-cover bg-center bg-[#149777]`}
    >
      <div className="inset-0 bg-[#374B5C] bg-opacity-50 backdrop-blur-[5px]"></div>

      <div className="z-10">
        <div className="flex justify-center">
          <h1 className="text-white text-2xl md:text-2xl font-bold bg-[#10846F] w-[380px] text-center p-2 rounded-3xl flex items-center">
            <MapPin className="mr-1" /> PuronoBazar Bangladesh
          </h1>
        </div>
        <div>
          <HeroSectionFilter />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
