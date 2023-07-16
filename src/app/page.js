import Image from "next/image";
import HeroSection from "./component/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection
        title={"LET`S WATCH MOVIES SERIRES"}
        imageURL={"/home.svg"}
      ></HeroSection>
    </>
  );
}
