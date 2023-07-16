import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav";
import HeroSection from "./HeroSection";

const Header = () => {
  return (
    <>
      <header className="flex justify-between items-center  pl-10 pr-10 pt h-20 drop-shadow-lg shadow-lg ">
        <div>
          <Link href="/">
            <Image
              src="/logo.png"
              alt="my_logoImage"
              width={150}
              height={150}
            ></Image>
          </Link>
        </div>
        <Nav></Nav>
      </header>
    </>
  );
};

export default Header;
