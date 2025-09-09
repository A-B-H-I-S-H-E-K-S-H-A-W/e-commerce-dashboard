import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/globals.css";
import Dashboard from "./pages/dashboard/dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
