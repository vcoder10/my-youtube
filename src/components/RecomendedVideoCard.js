import React from "react";

const RecomendedVideoCard = ({ video }) => {
  // destruction video details
  const { title, description, thumbnails, channelTitle } = video.snippet;
  const { viewCount, likeCount } = video.statistics;
  const { duration } = video.contentDetails;

  return (
    <div className={`p-2 m-2 w-72 shadow-lg flex`}>
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{Math.floor(viewCount / 1000)}K views</li>
      </ul>
    </div>
  );
};

export default RecomendedVideoCard;
