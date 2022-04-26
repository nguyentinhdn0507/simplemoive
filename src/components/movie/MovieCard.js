import React from "react";
import { useNavigate } from "react-router-dom";
import { tmdbAPI } from "../../config";
import Button from "../button/Button";
import LoadingSkeleton from "../loading/LoadingSkeleton";

const MovieCard = ({ item }) => {
  const navigate = useNavigate();
  if (!item) return null;
  const { title, vote_average, release_date, poster_path, id } = item;
  console.log("item", item);
  // console.log(title);
  return (
    <div className="movie-card flex flex-col rounded-lg p-3 bg-slate-800 text-white h-full select-none">
      <img
        src={tmdbAPI.imgMovieCard(poster_path)}
        alt=""
        className="w-full h-[250px] object-cover rounded-lg mb-5 flex-shrink-0"
      />
      <div className="flex flex-col flex-1">
        <h3 className="text-xl font-bold mb-3 flex-1">{title}</h3>
        <div className="flex items-center justify-between text-sm opacity-50 mb-10 flex-shrink-0">
          <span>{new Date(release_date).getFullYear()}</span>
          <span>{vote_average}</span>
        </div>
        <Button
          full
          bgColor="secondary"
          onClick={() => navigate(`/movie/${id}`)}
        >
          watch now
        </Button>
      </div>
    </div>
  );
};
export default MovieCard;

export const MovieCardSkeleton = () => {
  return (
    <div className="movie-card flex flex-col rounded-lg p-3 bg-slate-800 text-white h-full select-none">
      <LoadingSkeleton
        width="100%"
        height="250px"
        radius="8px"
        className="mb-5"
      ></LoadingSkeleton>
      <div className="flex flex-col flex-1">
        <h3 className="text-xl font-bold mb-3 flex-1">
          <LoadingSkeleton
            width="100%"
            height="100%"
            radius="8px"
            className="mb-5"
          ></LoadingSkeleton>
        </h3>
        <div className="flex items-center justify-between text-sm opacity-50 mb-10 flex-shrink-0">
          <span>
            <LoadingSkeleton width="50px" height="10px"></LoadingSkeleton>
          </span>
          <span>
            <LoadingSkeleton width="30px" height="10px"></LoadingSkeleton>
          </span>
        </div>
        <LoadingSkeleton
          width="100%"
          height="45px"
          radius="6px"
        ></LoadingSkeleton>
      </div>
    </div>
  );
};
