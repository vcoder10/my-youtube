import { Provider } from "react-redux";
import Body from "./components/Body";
import Head from "./components/Head";
import "./index.css";
import store from "./utils/store";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";
import SearchResult from "./components/SearchResult";
import ChannelDetail from "./components/ChannelDetail";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
      {
        path: "/searchResult",
        element: <SearchResult />,
      },
      {
        path: "/channel",
        element: <ChannelDetail />,
      },
    ],
  },
]);
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
