// import { useDispatch, useSelector } from "react-redux";
// import { GOOGLE_API_KEY, MAX_VIDEO_COUNT } from "../utils/constant";
// import { useEffect } from "react";
// import { addPopularVideo } from "../utils/videoSlice";

// const useGetPopularVideo = () => {
//   const dispatch = useDispatch();
//   const popularVideo = useSelector((store) => store.video.popularVideo);

//   const getPopularVideo = async () => {
//     const data = await fetch(
//       `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=${MAX_VIDEO_COUNT}&regionCode=IN&key=${GOOGLE_API_KEY}`
//     );
//     const json = await data.json();
//     dispatch(addPopularVideo(json.items));
//   };
//   useEffect(() => {
//     !popularVideo && getPopularVideo();
//   }, []);
// };

// export default useGetPopularVideo;

// useGetPopularVideo.js

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GOOGLE_API_KEY } from "../utils/constant";
import { addPopularVideo } from "../utils/videoSlice";

const useGetPopularVideo = () => {
  const dispatch = useDispatch();
  const popularVideo = useSelector((store) => store.video.popularVideo);
  const [loading, setLoading] = useState(false);
  const [pageToken, setPageToken] = useState(null);

  const getPopularVideo = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=IN&key=${GOOGLE_API_KEY}&pageToken=${
          pageToken || ""
        }`
      );

      const json = await response.json();
      dispatch(addPopularVideo(json.items));

      // Update the page token for the next request
      setPageToken(json.nextPageToken || null);
    } catch (error) {
      console.error("Error fetching popular videos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch popular videos when the component mounts
    if (!popularVideo.length) {
      getPopularVideo();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return { popularVideo, loading, getPopularVideo };
};

export default useGetPopularVideo;
