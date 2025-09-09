import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/globals.css";
import Dashboard from "./pages/dashboard/dashboard";
import CreateCategory from "./pages/dashboard/CreateCategory";
import CreateSubcategory from "./pages/dashboard/CreateSubcategory";
import ListCategory from "./pages/dashboard/ListCategory";
import CreateProduct from "./pages/dashboard/CreateProduct";
import ListProduct from "./pages/dashboard/ListProduct";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/create-category" element={<CreateCategory />} />
          <Route path="/create-subcategory" element={<CreateSubcategory />} />
          <Route path="/list-category" element={<ListCategory />} />
          <Route path="/create-product" element={<CreateProduct />} />
          <Route path="/list-product" element={<ListProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
