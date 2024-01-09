import { useEffect } from "react";
import { GOOGLE_API_KEY } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addChannelDetails } from "../utils/videoSlice";

const useGetChannelDetails = (channelId) => {
  const dispatch = useDispatch();
  const getChannelDetails = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${GOOGLE_API_KEY}`
    );
    const json = await data.json();
    dispatch(addChannelDetails(json.items[0]));
  };

  useEffect(() => {
    getChannelDetails();
  }, [channelId]);
};

export default useGetChannelDetails;
