
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navigation from './components/Navigation';
import Week1 from './components/Week1';
import Week2 from './components/Week2';
import Week3 from './components/Week3';
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <div id="wrap">
        <Navigation />
        <Routes>
          <Route path="/" element={<Week1 />} index />
          <Route path="/state" element={<Week2 />} index />
          <Route path="/effect" element={<Week3 />} index />
        </Routes>
      </div>
    </BrowserRouter> 
   
  )
}

export default App
