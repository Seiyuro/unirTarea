import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import VideoGamesAdd from "./Components/VideoGamesAdd";
import Content from "./Components/Content";
import VideoGamesHome from "./Components/VideoGamesHome";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<VideoGamesHome />} />
        <Route path="/content" element={<Content />} />
        <Route path="/addGame" element={<VideoGamesAdd />} />
        <Route path="/edit/:idEdit" element={<VideoGamesAdd isEdit />} />
      </Routes>
    </div>
  );
}

export default App;
