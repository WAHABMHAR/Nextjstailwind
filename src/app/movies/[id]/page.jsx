import Image from "next/image";
import Link from "next/link";

const Id = async ({ params }) => {
  const id = params.id;
  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "102dbd4fd9msh3fc43870e0ecbd2p1ec7a6jsn469b3a1919d9",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };
  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data[0].details;
  const { title, type, synopsis } = main_data;
  return (
    <>
      <div className="pl-32 w-auto flex flex-col gap-y-6 mt-8">
        <h2 className="font-bold text-3xl">
          Netflix <span className="text-red-700"> \ {type}</span>
        </h2>
        <Image
          className="w-[50vw] h-[50vh] object-cover"
          src={main_data.backgroundImage.url}
          alt="netflix_image"
          width={500}
          height={500}
        ></Image>
        <h2 className="font-bold text-4xl">{title}</h2>
        <p>{synopsis}</p>
        <Link href="/movies">
          <button className="p-4 mt-3 bg-black text-white rounded-full font-medium hover:bg-white hover:border hover:border-black hover:text-black ">
            Explore Movies
          </button>
        </Link>
      </div>
      ;
    </>
  );
};

export default Id;
