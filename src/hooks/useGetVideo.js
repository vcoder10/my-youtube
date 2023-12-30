import { useDispatch } from "react-redux";

import { YOUTUBE_VIDEOS_API } from "../utils/constant";
import { useEffect } from "react";
import { addPopularVideo } from "../utils/videoSlice";

const useGetVideo = () => {
  const dispatch = useDispatch();

  const getVideo = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    dispatch(addPopularVideo(json.items));
  };
  useEffect(() => {
    getVideo();
  }, []);
};

export default useGetVideo;
