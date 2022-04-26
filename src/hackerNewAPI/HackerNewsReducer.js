import React, { useState, useEffect, useRef, useReducer } from "react";
import axios from "axios";

const initialState = {
  hits: [],
  query: "",
  loading: true,
  errorMessage: "",
  url: "https://hn.algolia.com/api/v1/search?query=''",
};
const hackerNewReducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA": {
      return { ...state, hits: action.payload };
    }
    case "SET_LOADING": {
      return { ...state, loading: action.payload };
    }
    case "SET_ERROR": {
      return {
        ...state,
        errorMessage: action.payload,
      };
    }
    case "SET_QUERY": {
      return {
        ...state,
        query: action.payload,
      };
    }
    case "SET_URL": {
      return {
        ...state,
        url: action.payload,
      };
    }
    default:
      break;
  }
};
const HackerNewsReducer = () => {
  //https://hn.algolia.com/apo/v1/search?query=react
  const [state, dispatch] = useReducer(hackerNewReducer, initialState);
  const handleFetchData = useRef({});
  handleFetchData.current = async () => {
    console.log("run");
    // setLoading(true);
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });
    try {
      const response = await axios.get(state.url);
      
      // console.log(response.data?.hits);
      // console.log("Có Dữ liệu :", response);
      // console.log(response.data);
      // setHits(response.data?.hits || []);
      // // console.log(response.data.hits);
      // setLoading(false);
    } catch (error) {
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });
      dispatch({
        type: "SET_ERROR",
        payload: `có Lỗi ${error}`,
      });
      // nếu có lỗi cũng set loading = false
      // setLoading(false);
      // setErrorMessage(`có Lỗi ${error}`);
    }
  };
  useEffect(() => {
    handleFetchData.current();
  }, [state.url]);
  return (
    <div className="bg-white mx-auto mt-5 mb-5 p-5 rounded-lg shadow-md w-2/4">
      <div className="flex mb-4 gap-x-5">
        <input
          type="text"
          className="border border-gray-200 block w-full rounded-md focus:border-blue-400 transition-all p-4 "
          placeholder="Enter Your Key Word ..."
          defaultValue={state.query}
          onChange={(e) =>
            dispatch({
              type: "SET_QUERY",
              payload: e.target.value,
            })
          }
        />
        <button
          onClick={() =>
            dispatch({
              type: "SET_URL",
              payload: `https://hn.algolia.com/api/v1/search?query=${state.query}`,
            })
          }
          disabled={state.loading}
          className="bg-blue-600 text-white font-semibold p-4 rounded-md flex-shrink-0"
          style={{
            opacity: state.loading ? "0.3" : "1",
          }}
        >
          Fetching
        </button>
      </div>
      {state.loading && (
        <div className="loading w-8 h-8 rounded-full border-red-500 border-4 border-r-4 border-r-transparent animate-spin mx-auto my-10 "></div>
      )}
      {!state.loading && state.errorMessage && <p>{state.errorMessage}</p>}
      <div className="flex flex-wrap gap-5">
        {!state.loading &&
          state.hits.length > 0 &&
          state.hits.map((item, index) => {
            if (!item.title || item.title.length <= 0) return null;
            return (
              <h3 className="p-3 bg-gray-100 rounded-sm" key={item.id}>
                {item.title}
              </h3>
            );
          })}
      </div>
    </div>
  );
};

export default HackerNewsReducer;
