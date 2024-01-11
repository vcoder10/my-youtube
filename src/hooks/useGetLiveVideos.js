import { useEffect } from "react";
import { GOOGLE_API_KEY, MAX_VIDEO_COUNT } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addLiveVideos } from "../utils/searchSlice";

const useGetLiveVideos = () => {
  const dispatch = useDispatch();
  const getLiveVideos = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&eventType=live&location=28.7041%2C77.1025&locationRadius=1000km&maxResults=${MAX_VIDEO_COUNT}&q=live&regionCode=IN&relevanceLanguage=hi&type=video&key=${GOOGLE_API_KEY}`
    );
    const json = await data.json();

    dispatch(addLiveVideos(json.items));
  };
  useEffect(() => {
    getLiveVideos();
  }, []);
};

export default useGetLiveVideos;
