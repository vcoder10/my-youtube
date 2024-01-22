import React, { useEffect, useRef } from "react";
//import { useSelector } from "react-redux";
import useGetPopularVideo from "../hooks/useGetPopularVideo";
//import VideoContainer from "./VideoContainer";
import ShimmerVideoContainer from "./ShimmerVideoContainer";
//import { ThemeContext } from "@emotion/react";
import { Link } from "react-router-dom";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { useSelector } from "react-redux";

const PopularVideo = () => {
  const theme = useSelector((store) => store.app.theme);
  //const { theme } = useContext(ThemeContext);

  const { getPopularVideo } = useGetPopularVideo();
  const containerRef = useRef();
  //const theme = useSelector((store) => store.app.theme);
  const videos = useSelector((store) => store.video.popularVideo);

  const handleScroll = () => {
    const container = containerRef.current;

    // Check if the user has scrolled to the bottom and if there is no ongoing loading
    if (
      container &&
      container.scrollTop + container.clientHeight >=
        container.scrollHeight - 50
    ) {
      getPopularVideo();
    }
  };

  useEffect(() => {
    const container = containerRef.current;

    // Attach the scroll event listener
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      // Detach the scroll event listener when the component unmounts
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [getPopularVideo]);

  if (!videos.length) {
    return <ShimmerVideoContainer type={"popular"} />;
  }

  return (
    <div
      className={`absolute justify-center flex flex-wrap overflow-y-auto pt-12 ${
        !theme ? "bg-black" : "bg-white"
      }`}
      ref={containerRef}
      style={{ maxHeight: "80vh" }}
    >
      {<AdVideoCard video={videos[0]} />}
      {videos.map((video, index) => (
        <Link to={`/watch?v=${video.id}`} key={index}>
          <VideoCard video={video} ad={false} type={"popular"} />
        </Link>
      ))}
      {/* {loading && <ShimmerVideoContainer type={"popular"} />} */}
    </div>
  );
};

export default PopularVideo;
