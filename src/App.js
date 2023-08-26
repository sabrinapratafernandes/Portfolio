import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";

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
          static">
    <BrowserRouter>
      <NavBar/>
      <Routes>
          <Route path="/pagina-inicial" element={<Main/>} />
          <Route path="/projetos" element={<Projects/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
