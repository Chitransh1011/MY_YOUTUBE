import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sideBarToggle } from "../utils/appSlice";
import { cacheResults } from "../utils/searchSlice";
const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(sideBarToggle());
  };
  const getSearchSuggestion = async () => {
    const res = await fetch(
      process.env.REACT_APP_AUTO_COMPLETE_API + searchQuery
    );
    const data = await res.json();
    setSuggestions(data[1]);
    dispatch(cacheResults({
        [searchQuery]:data[1]
    }))
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setShowSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  return (
    <div className="grid grid-flow-col p-5 shadow-xl">
      <div className="flex col-span-1 px-5">
        <img
          onClick={() => handleToggle()}
          className="h-8 cursor-pointer"
          alt="handburger"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/800px-Hamburger_icon.svg.png"
        ></img>
        <img
          className="h-8 mx-2"
          alt="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png"
        ></img>
      </div>

      <div className="col-span-10 px-10">
        <div>
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border border-gray-600 w-1/2 p-2 rounded-l-full"
            type="text"
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          ></input>
          <button className="border border-gray-600 p-2 rounded-r-full">
            Search
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed bg-white py-2 px-5 w-[34rem] border border-gray-400 rounded-xl">
            <ul>
              {suggestions.map((s, index) => (
                <li key={index} className="p-2 hover:bg-gray-300">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div>
        <img
          className="h-8"
          alt="user-icon"
          src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
        ></img>
      </div>
    </div>
  );
};

export default Header;
