import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUS from '../src/Pages/AboutUS'
import News from "./Pages/News";
import OurStories from "./Pages/OurStories";
import Donation1 from "./Pages/Donation1";
import Donation2 from "./Pages/Donation2";
import Donation3 from "./Pages/Donation3";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUS />} />
        <Route path="/news" element={<News />} />
        <Route path="/stories" element={<OurStories />} />
        <Route path="/donation1" element={<Donation1 />} />
        <Route path="/donation2" element={<Donation2 />} />
        <Route path="/donation3" element={<Donation3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
