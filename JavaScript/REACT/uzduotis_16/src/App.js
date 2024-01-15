import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Navigation from "./components/navigation/Neavigation";
import Posts from "./components/posts/Posts";
import Users from "./components/users/Users";
import Photos from "./components/photos/Photos";
function App() {
  return (
    <div className="App" style={{ display: "flex", width: 98 + "dvw" }}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/users" element={<Users />} />
          <Route path="/photos" element={<Photos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
