import { useEffect } from "react";
import { GOOGLE_API_KEY } from "../utils/constant";

const useGetVideoDetail = ({ movieId }) => {
  const getDetails = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${movieId}=${GOOGLE_API_KEY}`
    );

    const json = data.json();
    console.log(json);
  };
  useEffect(() => {
    getDetails();
  }, []);
};

export default useGetVideoDetail;
