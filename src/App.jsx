import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Week1 from "./components/week1";
import Week2 from "./components/week2";
import Week3 from "./components/week3";
import "./app.css";

function App() {
  return (
    <BrowserRouter>
      <div id="wrap">
        <Navigation />
        <Routes>
          <Route path="/" element={<Week1 />} index />
          <Route path="/state" element={<Week2 />} />
          <Route path="/effect" element={<Week3 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
