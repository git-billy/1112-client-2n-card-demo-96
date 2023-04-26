import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import BlogsStaticPage_96 from "./pages/BlogsStaticPage_96.js";
import BlogsLocalJsonPage_96 from "./pages/BlogsLocalJsonPage_96.js";
import BlogsNodeServerPage_96 from "./pages/BlogsNodeServerPage_96.js";
import BlogsSupabasePage_96 from "./pages/BlogsSupabasePage_96.js";
import HomePage_96 from "./pages/HomePage_96";

import ProductsStaticPage_xx from './pages/midprep_xx/ProductsStaticPage_xx';
import ProductsNodeServerPage_xx from './pages/midprep_xx/ProductsNodeServerPage_xx';
import ProductsNodeServerContextPage_xx from './pages/midprep_xx/ProductsNodeServerContextPage_xx';

import Navbar from "./components/NavbarResp_96";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/card_96" element={<BlogsStaticPage_96 />}></Route>
        <Route path="/local_96" element={<BlogsLocalJsonPage_96 />}></Route>
        <Route path="/node_96" element={<BlogsNodeServerPage_96 />}></Route>
        <Route path="/supabase_96" element={<BlogsSupabasePage_96 />}></Route>
        <Route path='/midp_static_xx' element={<ProductsStaticPage_xx />} />
        <Route path='/midp_node_xx' element={<ProductsNodeServerPage_xx />} />
        <Route
          path='/midp_node_context_xx'
          element={<ProductsNodeServerContextPage_xx />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
