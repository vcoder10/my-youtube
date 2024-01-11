import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu, openMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "../components/CommentsContainer";
import LiveChat from "../components/LiveChat";

import VideoDetails from "../components/VideoDetails";
import RelatedVideo from "../components/RelatedVideo";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");

  const dispatch = useDispatch();
  // dispatch(clearVideoDetails());
  const live = useSelector((store) => store.app.live);

  useEffect(() => {
    dispatch(closeMenu());

    return () => {
      dispatch(openMenu());
    };
  }, []);
  return (
    <div className="flex-col flex md:flex-row  md:ml-20 ">
      <div className=" flex flex-col mt-24 h-full ">
        <div className="">
          <iframe
            className="rounded-xl w-screen h-[250px] md:h-[500px] md:w-[900px] md:mt-0 "
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
        {live ? <LiveChat /> : <RelatedVideo videoId={id} />}
      </div>
    </div>
  );
};

export default WatchPage;
