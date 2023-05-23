import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ColorForm from "../pages/ColorForm";
import WordForm from "../pages/WordForm";
import RandomColor from "../pages/RandomColor";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/random" />} />
        <Route path="/random" element={<RandomColor />} />
        <Route path="/word" element={<WordForm />} />
        <Route path="/color" element={<ColorForm />} />
      </Routes>
      <Toaster position="bottom-right" reverseOrder={false} />
    </BrowserRouter>
  );
}

export default App;
