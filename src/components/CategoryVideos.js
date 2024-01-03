import React from "react";
import { Link, useParams } from "react-router-dom";
import useGetCategoryByVideos from "../hooks/useGetCategoryByVideos";
import { useSelector } from "react-redux";
import CategoryVideoCard from "./CategoryVideoCard";

const CategoryVideos = () => {
  const { q } = useParams();
  useGetCategoryByVideos(q);

  const videos = useSelector((store) => store.search.categoryByVideos);
  if (!videos) return null;

  return (
    <div className="mt-28">
      <div>channel Detils</div>
      <div className="  flex flex-wrap">
        {videos.map((video, index) => (
          <Link to={"/watch?v=" + video.id} key={index}>
            <CategoryVideoCard video={video} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryVideos;
