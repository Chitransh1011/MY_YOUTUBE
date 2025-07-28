import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addPage } from "../utils/pageTokenSlice";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const [videos, setVidoes] = useState([]);
  const getApi = async () => {
    const res = await fetch(process.env.REACT_APP_YOUTUBE_API);
    const data = await res.json();
    dispatch(addPage(data.nextPageToken));
    setVidoes(data.items);
  };
  const pageToken = useSelector((store) => store.page);
  const getNextPage = async () => {
    const res = await fetch(process.env.REACT_APP_NEXT_PAGE_TOKEN + pageToken);
    const data = await res.json();
    setVidoes(data.items);
    dispatch(addPage(data.nextPageToken));
  };
  const handleBtn = () => {
    getNextPage();
  };
  useEffect(() => {
    getApi();
  }, []);
  return (
    <div>
      <div className="flex flex-wrap">
        {videos.map((video) => {
          return (
            <Link key={video.id} to={"/watch?v=" + video.id}>
              <VideoCard info={video} />
            </Link>
          );
        })}
      </div>
      <div className="flex flex-col justify-items-center">
        <button
          onClick={handleBtn}
          className="border bg-blue-300 p-4 mb-8 mx-auto"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default VideoContainer;
