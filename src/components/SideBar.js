import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const toggleSideBar = useSelector((store) => store.app.menuToggle);
  if (!toggleSideBar) return null;
  return (
    <div className="w-40 p-5 shadow-xl">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <div className="mt-4">
        <ul>
          <h1 className="font-bold">Subscriptions</h1>
          <li>Movies</li>
          <li>Music</li>
          <li>Sports</li>
          <li>Games</li>
        </ul>
      </div>
      <div className="mt-4">
        <ul>
          <h1 className="font-bold">Watch Later</h1>
          <li>Movies</li>
          <li>Music</li>
          <li>Sports</li>
          <li>Games</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
