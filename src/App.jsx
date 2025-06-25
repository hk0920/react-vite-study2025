import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "./components/Navigation";
import Week1 from "./pages/week1";
import Week2 from "./pages/week2";
import Week3 from "./pages/week3";
import "./app.css";

export const useExternalCss = (urls) => {
  useEffect(() => {
    const links = [];

    urls.forEach((url) => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = url;
      document.head.prepend(link);
      links.push(link);
    });

    return () => {
      links.forEach((link) => {
        document.head.removeChild(link);
      });
    };
  }, [urls]);
};

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
