import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVidoes] = useState([]);
  const getApi = async () => {
    const res = await fetch(YOUTUBE_API);
    const data = await res.json();
    setVidoes(data.items);
  };
  useEffect(() => {
    getApi();
  }, []);
  return (
    <div className="flex flex-wrap">
      {videos.map((video) => {
        return <Link to={"/watch?v="+video.id}><VideoCard key={video.id} info={video} /></Link>;
      })}
    </div>
  );
};

export default VideoContainer;
