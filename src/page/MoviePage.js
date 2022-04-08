import React, { useEffect, useState } from "react";
import useSWR from "swr";
import MovieCard, { MovieCardSkeleton } from "../components/movie/MovieCard";
import ReactPaginate from "react-paginate";
import useSWRInfinite from "swr/infinite";
import { fetcher, tmdbAPI } from "../config";
import useDebounce from "../hook/useDebounce";
import { v4 } from "uuid";
import Button from "../components/button/Button";
const itemsPerPage = 20; //movies item
const MoviePage = () => {
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [filter, setFilter] = useState("");
  const [nextPage, setNextPage] = useState(1);
  const [url, setUrl] = useState(tmdbAPI.getMovieList("popular", nextPage));
  const filterDebounce = useDebounce(filter, 1000);
  // const { data, error, size, setSize } = useSWRInfinite(
  //   (index) => url.replace("page=1", `page=${index + 1}`),
  //   fetcher
  // );
  const handelFilterChange = (e) => {
    setFilter(e.target.value);
  };
  const { data, error } = useSWR(url, fetcher);
  console.log("data", data);
  // const pageCount = 5;
  const movies = data?.results || [];
  // const movies = data ? data.reduce((a, b) => a.concat(b.results), []) : [];
  // console.log("movies", movies);
  const loading = !data && !error;
  // const isEmpty = data?.[0]?.results.length === 0;
  // const isReachingEnd =
  //   isEmpty || (data && data[data.length - 1]?.results.length < itemsPerPage);
  // console.log("isReachingEnd", isReachingEnd);
  useEffect(() => {
    if (filterDebounce) {
      setUrl(tmdbAPI.getMovieSearch(filterDebounce, nextPage));
    } else {
      setUrl(tmdbAPI.getMovieList("popular", nextPage));
    }
  }, [filterDebounce, nextPage]);
  useEffect(() => {
    if (!data || !data.total_results) return;
    setPageCount(Math.ceil(data.total_results / itemsPerPage));
  }, [data, itemOffset]);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.total_results;
    setItemOffset(newOffset);
    setNextPage(event.selected + 1);
  };

  return (
    <div className="py-10 page-container">
      <div className="flex mb-10">
        <div className="flex-1">
          <input
            onChange={handelFilterChange}
            className="input rounded-l-lg w-full p-4 bg-slate-800 text-white outline-none"
            type="text"
            placeholder="Type Here To Search..."
          />
        </div>
        <button className="rounded-r-lg p-4 bg-primary text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
      {/* {loading && (
        <div className="w-10 h-10 rounded-full border-4 border-primary border-t-transparent border-t-4 mx-auto animate-spin"></div>
      )} */}
      {loading && (
        <div className="grid grid-cols-4 gap-10">
          {new Array(itemsPerPage).fill(0).map(() => (
            <MovieCardSkeleton key={v4()}></MovieCardSkeleton>
          ))}
        </div>
      )}
      <div className="grid grid-cols-4 gap-10">
        {!loading &&
          movies.length > 0 &&
          movies.map((item) => (
            <MovieCard key={item.id} item={item}></MovieCard>
          ))}
      </div>
      {/* Pagination */}
      <div className="mt-10">
        <ReactPaginate
          className="pagination"
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
        />
      </div>

      {/* Load More */}
      {/* <div className="mt-10 text-center">
        <Button
          onClick={() => (isReachingEnd ? {} : setSize(size + 1))}
          disabled={isReachingEnd}
          className={`${isReachingEnd ? "bg-slate-700" : ""}`}
        >
          Load More
        </Button>
      </div> */}
    </div>
  );
};

export default MoviePage;
