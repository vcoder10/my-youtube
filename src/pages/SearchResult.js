import React from "react";
// import SearchCard from "./SearchCard";
import { useSelector } from "react-redux";
//import { Link } from "react-router-dom";
import VideoContainer from "../components/VideoContainer";
import ShimmerVideoContainer from "../components/ShimmerVideoContainer";

const SearchResult = () => {
  const searchedVideos = useSelector((store) => store.search.searchedResults);
  if (!searchedVideos) return <ShimmerVideoContainer type={"search"} />;
  return (
    <div className="grow w-full h-full overflow-y-auto pl-4 fixed">
      <div>
        <VideoContainer videos={searchedVideos} type={"search"} />
      </div>
    </div>
  );
};

export default SearchResult;
