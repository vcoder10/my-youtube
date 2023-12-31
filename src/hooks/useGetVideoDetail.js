import { useEffect } from "react";
import { GOOGLE_API_KEY } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addVideoDetails } from "../utils/videoSlice";

const useGetVideoDetail = (movieId) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getDetails = async () => {
      try {
        const data = await fetch(
          `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${movieId}&key=${GOOGLE_API_KEY}`
        );

        const json = await data.json();
        dispatch(addVideoDetails(json.items[0]));
      } catch (error) {
        console.error("Error fetching video details:", error);
      }
    };

    // Only fetch details if movieId is provided

    getDetails();
  }, []);
};

export default useGetVideoDetail;
