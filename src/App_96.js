import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import BlogsStaticPage_96 from "./pages/BlogsStaticPage_96.js";
import HomePage_96 from "./pages/HomePage_96";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/card_96" element={<BlogsStaticPage_96 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
