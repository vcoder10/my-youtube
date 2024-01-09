import { useEffect } from "react";
import { GOOGLE_API_KEY, MAX_VIDEO_COUNT } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addChannelAllVideo } from "../utils/videoSlice";

const useGetChannelAllVideo = (channelId) => {
  const dispatch = useDispatch();
  const getChannelAllVideo = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=${MAX_VIDEO_COUNT}&type=video&key=${GOOGLE_API_KEY}`
    );
    const json = await data.json();
    dispatch(addChannelAllVideo(json.items));
  };

  useEffect(() => {
    getChannelAllVideo();
  }, [channelId]);
};

export default useGetChannelAllVideo;
