import React, { useEffect, useState } from "react";
import moment from "moment";

const TimeAgo = ({ publishTime }) => {
  const [timeAgo, setTimeAgo] = useState("");

  useEffect(() => {
    const calculateTimeAgo = () => {
      const now = moment();
      const uploadTime = moment(publishTime);

      const diffInMinutes = now.diff(uploadTime, "minutes");
      const diffInHours = now.diff(uploadTime, "hours");
      const diffInDays = now.diff(uploadTime, "days");

      // Check if older than a year
      if (diffInDays >= 365) {
        const diffInYears = Math.floor(diffInDays / 365);
        setTimeAgo(
          `${diffInYears} ${diffInYears === 1 ? "year" : "years"} ago`
        );
      }
      // Check if older than a month
      else if (diffInDays >= 30) {
        const diffInMonths = Math.floor(diffInDays / 30);
        setTimeAgo(
          `${diffInMonths} ${diffInMonths === 1 ? "month" : "months"} ago`
        );
      }
      // Display days
      else if (diffInDays < 30 && diffInDays !== 0) {
        setTimeAgo(`${diffInDays} ${diffInDays === 1 ? "day" : "days"} ago`);
      }
      //display hour
      else if (diffInHours < 24 && diffInHours !== 0) {
        setTimeAgo(
          `${diffInHours} ${diffInHours === 1 ? "hour" : "hours"} ago`
        );
      }
      //display minutes
      else {
        setTimeAgo(
          `${diffInMinutes} ${diffInMinutes === 1 ? "minute" : "minutes"} ago`
        );
      }
    };

    calculateTimeAgo();
  }, [publishTime]);

  return <span className="truncate">{timeAgo}</span>;
};

export default TimeAgo;
