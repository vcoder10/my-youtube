import React, { useEffect, useState } from "react";
import hamburger from "../images/hamburger-menu.svg";
import logo from "../images/logo.jpg";
import userIcon from "../images/userIcon.jpg";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { GOOGLE_API_KEY, YOUTUBE_SEARCH_API } from "../utils/constant";
import { addSearchedMovie, cacheResults } from "../utils/searchSlice";
import { useNavigate } from "react-router-dom";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);

  const navigate = useNavigate();
  const cache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setTimeout(() => {
      if (cache[searchQuery]) {
        setShowSuggestions(cache[searchQuery]);
      } else {
        getSerchSugestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSerchSugestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    dispatch(cacheResults({ [searchQuery]: json[1] }));
    setSuggestions(json[1]);
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  const handleSearchVideo = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchQuery}&type=video&key=${GOOGLE_API_KEY}`
    );
    const json = await data.json();
    dispatch(addSearchedMovie(json.items));
    setShowSuggestions(false);
    setSelectedSuggestionIndex(-1);
    navigate(`searchResult/${searchQuery}`);
  };
  const handleSearchBasedOnSuggestion = (selectedSuggestion) => {
    setSearchQuery(selectedSuggestion);
    handleSearchVideo();
  };
  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (selectedSuggestionIndex > 0) {
        setSelectedSuggestionIndex(selectedSuggestionIndex - 1);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (selectedSuggestionIndex < suggestions.length - 1) {
        setSelectedSuggestionIndex(selectedSuggestionIndex + 1);
      }
    }
  };

  const handleEnterKeyPress = (e) => {
    if (e.key === "Enter") {
      if (selectedSuggestionIndex !== -1) {
        // Handle search based on the selected suggestion
        handleSearchBasedOnSuggestion(suggestions[selectedSuggestionIndex]);
      } else {
        // Handle regular search
        handleSearchVideo();
      }
    }
  };

  return (
    <div className="fixed w-full bg-orange-100 grid grid-flow-col p-5 mt-0 z-20">
      <div className="flex col-span-1">
        <img
          className="h-8 cursor-pointer"
          alt="hamburger"
          src={hamburger}
          onClick={toggleMenuHandler}
        />
        <a href="/">
          <img className="h-8 mx-2" alt="logo" src={logo} />
        </a>
      </div>
      <div className="flex flex-col col-span-10 px-20 ">
        <div>
          <input
            className="px-5 w-2/3 border border-gray-400 p-2 rounded-l-full"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            onKeyDown={(e) => {
              handleEnterKeyPress(e);
              handleKeyDown(e);
            }}
          />
          <button
            className="border border-gray-400 py-2 px-5 rounded-r-full bg-gray-100"
            onClick={handleSearchVideo}
          >
            🔍
          </button>
        </div>
        {showSuggestions && suggestions.length >= 1 && (
          <div className="fixed bg-white py-2 px-2 w-[41rem] mt-12 border border-gray-200 rounded-lg shadow-lg ">
            <ul>
              {suggestions.map((s, index) => (
                <li
                  key={index}
                  className={`py-2 px-4 hover:bg-gray-200 ${
                    index === selectedSuggestionIndex ? "bg-gray-200" : ""
                  }`}
                  onClick={() => handleSearchBasedOnSuggestion(s)}
                >
                  <span className="mr-3">🔍</span> {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1">
        <img className="h-8" alt="user-icon" src={userIcon} />
      </div>
    </div>
  );
};

export default Head;
