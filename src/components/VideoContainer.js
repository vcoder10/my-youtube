import React from "react";
import VideoCard, { AdVideoCard } from "./VideoCard";
import useGetVideo from "../hooks/useGetVideo";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import RecomendedVideoCard from "./RecomendedVideoCard";

const VideoContainer = () => {
  useGetVideo();
  const videos = useSelector((store) => store.video.popularVideo);
  if (!videos) return null;
  return (
    <div className=" mt-[3rem] flex flex-wrap bg-pink-50 absolute">
      <AdVideoCard video={videos[0]} />
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <RecomendedVideoCard video={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;

// import React, { useCallback, useEffect, useRef } from "react";
// import VideoCard, { AdVideoCard } from "./VideoCard";
// import useGetVideo from "../hooks/useGetVideo";
// import { useSelector, useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
//nn //import { fetchMoreVideos } from "../redux/videoSlice"; // Assuming you have an action to fetch more videos

// const VideoContainer = () => {
//  h //const dispatch = useDispatch();
//   const containerRef = useRef();
//   useGetVideo();
//   const videos = useSelector((store) => store.video.popularVideo);

//   const handleScroll = useCallback(() => {
//     const container = containerRef.current;
//     if (
//       container &&
//       container.scrollTop + container.clientHeight >= container.scrollHeight
//     ) {
//       // User has scrolled to the bottom, fetch more videos
//       //dispatch(fetchMoreVideos()); // Make sure you have this action in your videoSlice
//
//     }
//   }, []);

//   useEffect(() => {
//     const container = containerRef.current;

//     if (container) {
//       container.addEventListener("scroll", handleScroll);

//       return () => {
//         container.removeEventListener("scroll", handleScroll);
//       };
//     }
//   }, [containerRef, handleScroll]);

//   if (!videos) return null;
//   return (
//     <div
//       className=" mt-[3rem] flex flex-wrap bg-pink-50 absolute"
//       ref={containerRef}
//       style={{ overflowY: "auto", maxHeight: "600px" }}
//     >
//       <AdVideoCard video={videos[0]} />
//       {videos.map((video) => (
//         <Link to={"/watch?v=" + video.id} key={video.id}>
//           <VideoCard video={video} ad={false} />
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default VideoContainer;
