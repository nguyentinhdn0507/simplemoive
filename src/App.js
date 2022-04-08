import "./App.css";
import { Navlink, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

// import Banner from "./components/banner/Banner";
import "swiper/scss";
import Main from "./components/layout/Main";
import Banner from "./components/banner/Banner";
// import HomePage from "./page/HomePage";
// import MoviePage from "./page/MoviePage";
// import MovieDetailPage from "./page/MovieDetailPage";
// import FetchingData from "./components/highordercomponent/FetchingData";
// import Header from "./components/layout/Header";
// import HomePage from "./page/HomePage";

// import Button from "./button/Button";

// import HackerNews from "./hackerNewAPI/HackerNews";
// import HackerNewsReducer from "./hackerNewAPI/HackerNewsReducer";
const HomePage = lazy(() => import("./page/HomePage"));
const MovieDetailPage = lazy(() => import("./page/MovieDetailPage"));
const MoviePage = lazy(() => import("./page/MoviePage"));

{
  /* <FetchingData></FetchingData> */
}
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
{
  /* <HackerNewsReducer></HackerNewsReducer> */
}

{
  /* <Header></Header>
  <Banner></Banner>
  <HomePage></HomePage> */
}

export default App;
