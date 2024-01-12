import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GOOGLE_API_KEY, YOUTUBE_SEARCH_API } from "../utils/constant";
import { addSearchedMovie, cacheResults } from "../utils/searchSlice";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import Button from "./Button";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);

  const navigate = useNavigate();
  const cache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  const theme = useSelector((store) => store.app.theme);
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
    <>
      <div>
        <input
          className={`w-2/3 ml-4 md:ml-24 px-3 border border-gray-300 py-1 md:py-2 rounded-l-full ${
            !theme ? "bg-black text-white" : "text-black bg-white"
          }`}
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
          className={`border border-gray-300 py-1 md:py-2 px-2 md:px-5 rounded-r-full ${
            !theme ? "text-white" : "text-black"
          }`}
          onClick={handleSearchVideo}
        >
          <SearchIcon style={{ fontSize: "1.2rem" }} />
        </button>
      </div>
      {showSuggestions && suggestions.length >= 1 && (
        <div
          className={` fixed py-2 px-2 w-[12rem] md:w-[42rem] ml-4 md:ml-24 mt-12 border  rounded-lg shadow-lg ${
            !theme
              ? "bg-black border-gray-800 text-white"
              : "bg-white border-gray-200 text-black"
          }`}
        >
          <ul>
            {suggestions.map((s, index) => (
              <li
                key={index}
                className={`flex py-2 md:px-4 ${
                  !theme ? "hover:bg-gray-800" : "hover:bg-gray-200"
                } ${
                  index === selectedSuggestionIndex
                    ? !theme
                      ? "bg-gray-800"
                      : "bg-gray-200"
                    : ""
                }`}
                onClick={() => handleSearchBasedOnSuggestion(s)}
              >
                <span className="hidden md:flex md:mr-3">
                  <SearchIcon style={{ fontSize: "1.2rem" }} />
                </span>{" "}
                {s}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default SearchBar;
