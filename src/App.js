import "./App.css";
import { AppContext, Context } from "./Context/Contextapi";
import Header from "./Components/Header";
import Feed from "./Components/Feed";
import SearchResult from "./Components/SearchResult";
import VideoDetails from "./Components/VideoDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useContext } from "react";
function App() {
  
  return (
    <AppContext>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/"  element={<Feed />} />
            <Route
              path="/searchResult/:searchQuery"
              element={<SearchResult />}
            />
            <Route path="/video/:id" element={<VideoDetails />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AppContext>
  );
}

export default App;
