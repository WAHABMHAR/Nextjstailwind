import { resolve } from "styled-jsx/css";
import MovieCard from "../component/MovieCard";

const movies = async () => {
  const url =
    "https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "102dbd4fd9msh3fc43870e0ecbd2p1ec7a6jsn469b3a1919d9",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;
  // console.log(data);

  return (
    <>
      <h1 className="text-center font-extrabold text-5xl pt-3 pb-6 ">
        MOVIES & SERIRES
      </h1>
      <div className="flex w-full flex-wrap justify-center gap-1">
        {main_data.map((item) => {
          return <MovieCard key={item.id} {...item}></MovieCard>;
        })}
      </div>
    </>
  );
};

export default movies;
