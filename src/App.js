import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Formation from "./components/Formation";
import MoreAbout from "./components/MoreAbout";
import ThreeScene from "./components/ThreeScene";

export const fontStyle = {
  '-webkit-text-stroke-width': '0.5px',
  '-webkit-text-stroke-color': '#7360DF',
  color: '#FFFFFF00'
}

function App() {
  return (
    <div>
      <BrowserRouter>
      <ThreeScene/>
      <NavBar/>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/projetos" element={<Projects/>} />
          <Route path="/formacao" element={<Formation/>}/>
          <Route path="/mais-sobre" element={<MoreAbout/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
