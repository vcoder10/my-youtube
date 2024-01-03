import React from "react";
import SearchCard from "./SearchCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SearchResult = () => {
  const searchedVideos = useSelector((store) => store.search.searchedResults);

  return (
    <div className="grow w-full h-full overflow-y-auto mt-24 ml-24">
      <div className="grid grid-cols-1 gap-2 p-5">
        {searchedVideos &&
          searchedVideos?.map((video) => (
            <Link to={"/watch?v=" + video.id.videoId} key={video.id.videoId}>
              <SearchCard result={video} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default SearchResult;
