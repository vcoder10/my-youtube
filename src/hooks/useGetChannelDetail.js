import { useEffect } from "react";
import { CHANNEL_VIDEO_COUNT, GOOGLE_API_KEY } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addChannelDetails } from "../utils/videoSlice";

const useGetChannelDetail = (channelId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getDetails = async () => {
      try {
        const data = await fetch(
          `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=${channelId}&maxResults=${CHANNEL_VIDEO_COUNT}&key=${GOOGLE_API_KEY}`
        );

        const json = await data.json();
        //console.log(json);
        dispatch(addChannelDetails(json.items));
      } catch (error) {
        console.error("Error fetching video details:", error);
      }
    };

    // Only fetch details if movieId is provided

    getDetails();
  }, []);
};

export default useGetChannelDetail;
