import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
const HackerNews = () => {
  //https://hn.algolia.com/apo/v1/search?query=react
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [url, setUrl] = useState(
    `https://hn.algolia.com/api/v1/search?query=${query}`
  );
  const handleFetchData = useRef();
  handleFetchData.current = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      console.log("Có Dữ liệu :", response);
      console.log(response.data);
      setHits(response.data?.hits || []);
      // console.log(response.data.hits);
      setLoading(false);
    } catch (error) {
      // nếu có lỗi cũng set loading = false
      setLoading(false);
      setErrorMessage(`có Lỗi ${error}`);
    }
  };
  useEffect(() => {
    handleFetchData.current();
  }, [url]);
  return (
    <div className="bg-white mx-auto mt-5 mb-5 p-5 rounded-lg shadow-md w-2/4">
      <div className="flex mb-4 gap-x-5">
        <input
          type="text"
          className="border border-gray-200 block w-full rounded-md focus:border-blue-400 transition-all p-4 "
          placeholder="Enter Your Key Word ..."
          defaultValue={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={() =>
            setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)
          }
          className="bg-blue-600 text-white font-semibold p-4 rounded-md flex-shrink-0"
        >
          Fetching
        </button>
      </div>
      {!loading && errorMessage && <p>{errorMessage}</p>}
      {loading && (
        <div className="loading w-8 h-8 rounded-full border-red-500 border-4 border-r-4 border-r-transparent animate-spin mx-auto my-10 "></div>
      )}
      <div className="flex flex-wrap gap-5">
        {!loading &&
          hits.length > 0 &&
          hits.map((item, index) => {
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

export default HackerNews;
