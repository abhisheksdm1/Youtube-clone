import "./App.css";
import Header from "./Components/Header";
import RecommendedVideo from "./Components/RecommendedVideo";
import SearchBar from "./Components/SearchBar";
import SideBar from "./Components/SideBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Header />
        <div style={{ display: "flex" ,flex:'0.2' }}>
          <SideBar />
          <Routes>
          <Route
            path="/"
            element={
              <div className="app_page">
                <RecommendedVideo />
              </div>
            }
          ></Route>
          <Route
            path="/search/:searchTeam"
            element={
              <div className="app_page">
                <SearchBar />
              </div>
            }
          ></Route>
          <Route
            path="/Trending"
            element={<h1>hello</h1>
            }
          ></Route>
        </Routes>
        </div>
        
      </Router>
    </>
  );
}

export default App;
