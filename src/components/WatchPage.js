import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import RecomendedVideo from "./RecomendedVideo";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");
  console.log(id);
  const dispatch = useDispatch();
  const live = useSelector((store) => store.app.live);

  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="flex  mx-20">
      <div className=" flex flex-col">
        <div className="mt-24 rounded-xl">
          <iframe
            className="rounded-lg"
            width="900"
            height="600"
            src={`https://www.youtube.com/embed/${id}?autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <CommentsContainer />
      </div>
      <div className="w-full">
        {live ? <LiveChat /> : <RecomendedVideo vieoId={id} />}
      </div>
    </div>
  );
};

export default WatchPage;
