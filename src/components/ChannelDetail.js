import React from "react";
import useGetChannelDetail from "../hooks/useGetChannelDetail";
import { useDispatch } from "react-redux";
import { openMenu } from "../utils/appSlice";

const ChannelDetail = ({ channelId }) => {
  const dispatch = useDispatch();
  dispatch(openMenu());
  useGetChannelDetail(channelId);
  return <div className="mt-28">channel</div>;
};

export default ChannelDetail;
