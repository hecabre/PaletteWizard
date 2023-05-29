import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ColorForm from "../pages/ColorForm";
import WordForm from "../pages/WordForm";
import RandomColor from "../pages/RandomColor";
import { Toaster } from "react-hot-toast";
import Navbar from "../components/Navbar";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/random" />} />
        <Route path="/Random" element={<RandomColor />} />
        <Route path="/Word" element={<WordForm />} />
        <Route path="/Color" element={<ColorForm />} />
      </Routes>
      <Toaster position="bottom-right" reverseOrder={false} />
    </BrowserRouter>
  );
}

export default App;
