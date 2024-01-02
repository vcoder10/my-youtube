import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import RecomendedVideo from "./RecomendedVideo";
import VideoDetails from "./VideoDetails";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");

  const dispatch = useDispatch();
  const live = useSelector((store) => store.app.live);

  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="flex  mx-10 mt-24">
      <div className=" flex flex-col">
        <div className=" ">
          <iframe
            className="rounded-xl"
            width="900"
            height="600"
            src={`https://www.youtube.com/embed/${id}?autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex flex-col overflow-hidden">
          <VideoDetails movieId={id} />

          <CommentsContainer />
        </div>
      </div>
      <div className="w-full">
        {live ? <LiveChat /> : <RecomendedVideo vieoId={id} />}
      </div>
    </div>
  );
};

export default WatchPage;
