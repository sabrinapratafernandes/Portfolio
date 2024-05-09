import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Formation from "./components/Formation";
import MoreAbout from "./components/MoreAbout";

export const fontStyle = {
  '-webkit-text-stroke-width': '1px',
  '-webkit-text-stroke-color': '#F9DFDC',
  color: '#FFFFFF00'
}

function App() {
  return (
    <div className="
          flex flex-col
          justify-center 
          items-center
          w-screen
          h-screen
          bg-backg
          static
          h-lvh">
    <BrowserRouter>
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
