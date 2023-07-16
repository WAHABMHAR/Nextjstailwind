import Image from "next/image";
import Link from "next/link";

const HeroSection = ({ title, imageURL }) => {
  return (
    <>
      <main>
        <div className="flex justify-center items-center relative bg-gradient-to-br bg-gradient-45 from-green-300 via-blue-500 to-gray-800 ">
          <div className="w-3/4 flex justify-between items-center h-[650px]">
            <div>
              <h1 className="font-extrabold text-5xl">{title}</h1>
              <p className="w-4/5 font-light mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur dolore magni, voluptas, itaque cum perferendis ullam
                quas rerum fugiat qui officiis architecto nesciunt.
              </p>
              <Link href="/movies">
                <button className="p-4 mt-3 bg-black text-white rounded-full font-medium hover:bg-white hover:border hover:border-black hover:text-black ">
                  Explore Movies
                </button>
              </Link>
            </div>
            <div>
              <Image
                src={imageURL}
                alt="aboutImage"
                width={500}
                height={500}
              ></Image>
            </div>
          </div>
          <div className={"custom-shape-divider-bottom-1689249251"}>
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className={"shape-fill"}
              ></path>
            </svg>
          </div>
        </div>
      </main>
    </>
  );
};

export default HeroSection;
