import Image from "next/image";
import Link from "next/link";

const MovieCard = ( item ) => {
  const { id, title, synopsis } = item.jawSummary;
  return (
    <>
      <div className="shadow-md w-52 h-fit rounded-xl mb-4">
        <div className="w-fit h-fit ">
          <Image
            className="object-contain rounded-xl"
            src={item.jawSummary.backgroundImage.url}
            alt="moviePic"
            width={250}
            height={200}
          ></Image>
        </div>
        <div className="p-3 gap-y-5">
          <h4 className="text-md font-bold line-clamp-1">{title}</h4>
          <p className="text-xs overflow-hidden line-clamp-3">{synopsis}</p>
          <Link href={`/movies/${id}`}>
            <button className="p-2 mt-3 mb-5 bg-black text-white rounded-full text-sm hover:bg-white hover:border hover:border-black hover:text-black ">
              Read More
            </button>
          </Link>
        </div>
      </div>
      ;
    </>
  );
};

export default MovieCard;
