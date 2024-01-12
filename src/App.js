import { useSelector } from "react-redux";
import Body from "./components/Body";
import Head from "./components/Head";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WatchPage from "./pages/WatchPage";
import MainContainer from "./pages/MainContainer";
import SearchResult from "./pages/SearchResult";
import ChannelDetail from "./pages/ChannelDetail";
import CategoryVideos from "./pages/CategoryVideos";
import Live from "./pages/Live";

function App() {
  const theme = useSelector((store) => store.app.theme);
  return (
    <Router>
      <div className={`${!theme ? "bg-black" : "bg-white"}`}>
        <Head />
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<MainContainer />} />
            <Route path="/watch" element={<WatchPage />} />
            <Route path="/channel/:channelId" element={<ChannelDetail />} />

            <Route path="/category/:q" element={<CategoryVideos />} />
            <Route
              path="/searchResult/:searchQuery"
              element={<SearchResult />}
            />
            <Route path="/live" element={<Live />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
