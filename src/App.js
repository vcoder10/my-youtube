import { Provider } from "react-redux";
import Body from "./components/Body";
import Head from "./components/Head";
import "./index.css";
import store from "./utils/store";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // createBrowserRouter,
  // RouterProvider,
} from "react-router-dom";
import WatchPage from "./pages/WatchPage";
import MainContainer from "./pages/MainContainer";
import SearchResult from "./pages/SearchResult";
import ChannelDetail from "./pages/ChannelDetail";
import CategoryVideos from "./pages/CategoryVideos";

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <Body />,
//     children: [
//       {
//         path: "/",
//         element: <MainContainer />,
//       },
//       {
//         path: "/watch",
//         element: <WatchPage />,
//       },
//       {
//         path: "/searchResult",
//         element: <SearchResult />,
//       },
//       {
//         path: "/channel",
//         element: <ChannelDetail />,
//       },
//     ],
//   },
// ]);
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
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
            </Route>
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
