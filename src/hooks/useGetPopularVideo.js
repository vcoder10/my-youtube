import { useDispatch } from "react-redux";
import { GOOGLE_API_KEY } from "../utils/constant";
import { useEffect } from "react";
import { addPopularVideo } from "../utils/videoSlice";

const useGetPopularVideo = () => {
  const dispatch = useDispatch();

  const getPopularVideo = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`
    );
    const json = await data.json();
    dispatch(addPopularVideo(json.items));
  };
  useEffect(() => {
    getPopularVideo();
  }, []);
};

export default useGetPopularVideo;
