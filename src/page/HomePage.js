import React from "react";
import MovieList from "../components/movie/MovieList";

const HomePage = () => {
  return (
    <>
      <section className="movie-layout page-container page-container pb-10">
        <h2 className="capitalize text-white mb-10 text-2xl font-bold">
          now playing
        </h2>
        <MovieList></MovieList>
      </section>
      <section className="movie-layout page-container page-container pb-10">
        <h2 className="capitalize text-white mb-10 text-2xl font-bold">
          top rated
        </h2>
        <MovieList type="top_rated"></MovieList>
      </section>
      <section className="movie-layout page-container page-container pb-10">
        <h2 className="capitalize text-white mb-10 text-2xl font-bold">
          trending
        </h2>
        <MovieList type="popular"></MovieList>
      </section>
    </>
  );
};

export default HomePage;
