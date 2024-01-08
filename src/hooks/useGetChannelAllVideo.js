import { useEffect } from "react";
import { GOOGLE_API_KEY, MAX_VIDEO_COUNT } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addChannelAllVideo } from "../utils/videoSlice";

const useGetChannelAllVideo = (channelId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getChannelAllVideo = async () => {
      try {
        const data = await fetch(
          `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=${channelId}&maxResults=${MAX_VIDEO_COUNT}&key=${GOOGLE_API_KEY}`
        );

        const json = await data.json();

        dispatch(addChannelAllVideo(json.items));
      } catch (error) {
        console.error("Error fetching video details:", error);
      }
    };

    // Only fetch details if movieId is provided

    getChannelAllVideo();
  }, []);
};

export default useGetChannelAllVideo;
