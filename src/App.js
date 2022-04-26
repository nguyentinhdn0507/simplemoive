import "./App.css";
import {Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import "swiper/scss";
import Main from "./components/layout/Main";
import Banner from "./components/banner/Banner";
const HomePage = lazy(() => import("./page/HomePage"));
const MovieDetailPage = lazy(() => import("./page/MovieDetailPage"));
const MoviePage = lazy(() => import("./page/MoviePage"));
function App() {
  return (
    <>
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/" element={<Main></Main>}>
            <Route
              path="/"
              element={
                <>
                  <Banner></Banner>
                  <HomePage></HomePage>
                </>
              }
            ></Route>
            <Route path="/movies" element={<MoviePage></MoviePage>}></Route>
            <Route
              path="/movie/:movieID"
              element={<MovieDetailPage></MovieDetailPage>}
            ></Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
export default App;
{/* <HackerNews></HackerNews> */}
{
  /* <HackerNewsReducer></HackerNewsReducer> */
}

{
  /* <Header></Header>
  <Banner></Banner>
  <HomePage></HomePage> */
}

