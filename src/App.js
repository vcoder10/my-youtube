import { useSelector } from "react-redux";
import Body from "./components/Body";
import Head from "./components/Head";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import WatchPage from "./pages/WatchPage";
import MainContainer from "./pages/MainContainer";
//import SearchResult from "./pages/SearchResult";
// import ChannelDetail from "./pages/ChannelDetail";
// import CategoryVideos from "./pages/CategoryVideos";
// import Live from "./pages/Live";
import { Suspense, lazy } from "react";
// import themeContext from "./utils/themeContext";
// import { useState } from "react";
const SearchResult = lazy(() => import("./pages/SearchResult"));
const WatchPage = lazy(() => import("./pages/WatchPage"));
const CategoryVideos = lazy(() => import("./pages/CategoryVideos"));
const Live = lazy(() => import("./pages/Live"));
const ChannelDetail = lazy(() => import("./pages/ChannelDetail"));

function App() {
  const theme = useSelector((store) => store.app.theme);
  //const [theme, setTheme] = useState(true);

  return (
    // <themeContext.Provider value={{ theme, setTheme }}>
    <Router>
      <div className={`${!theme ? "bg-black" : "bg-white"}`}>
        <Head />
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<MainContainer />} />
            <Route
              path="/watch"
              element={
                <Suspense fallback=<h1>Loading</h1>>
                  <WatchPage />
                </Suspense>
              }
            />
            <Route
              path="/channel/:channelId"
              element={
                <Suspense fallback=<h1>Loading</h1>>
                  <ChannelDetail />
                </Suspense>
              }
            />

            <Route
              path="/category/:q"
              element={
                <Suspense fallback=<h1>Loading</h1>>
                  <CategoryVideos />
                </Suspense>
              }
            />
            <Route
              path="/searchResult/:searchQuery"
              element={
                <Suspense fallback=<h1>Loading</h1>>
                  <SearchResult />
                </Suspense>
              }
            />
            <Route
              path="/live"
              element={
                <Suspense fallback=<h1>Loading</h1>>
                  <Live />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </div>
    </Router>
    // </themeContext.Provider>
  );
}

export default App;
