import React from "react";
import { useParams } from "react-router-dom";
import useGetCategoryByVideos from "../hooks/useGetCategoryByVideos";
import { useSelector } from "react-redux";

import VideoContainer from "../components/VideoContainer";

const CategoryVideos = () => {
  const { q } = useParams();

  useGetCategoryByVideos(q);

  const videos = useSelector((store) => store.search.categoryByVideos);

  return (
    <div className="">
      <div>
        <VideoContainer videos={videos} type={"category"} />
      </div>
    </div>
  );
};

export default CategoryVideos;
