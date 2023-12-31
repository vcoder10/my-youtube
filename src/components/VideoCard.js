import React from "react";

const VideoCard = ({ video, ad }) => {
  // destruction video details
  const { title, description, thumbnails, channelTitle } = video.snippet;
  const { viewCount, likeCount } = video.statistics;
  const { duration } = video.contentDetails;

  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        {!ad && <li>{channelTitle}</li>}
        {!ad && <li>{Math.floor(viewCount / 1000)}K views</li>}
        {ad && (
          <div className="flex justify-between mx-2">
            <li className="font-bold">Sponsored</li>
            <button className="text-blue-900 cursor-pointer text-lg bg-blue-200 px-4 py-1 rounded-full">
              Learn More
            </button>
          </div>
        )}
      </ul>
    </div>
  );
};

export const AdVideoCard = ({ video }) => {
  return <VideoCard video={video} ad={true} />;
};

export default VideoCard;
