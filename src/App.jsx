import './App.css'
import { Home } from './pages/Home/Home'
import { Instalaciones } from './pages/Instalaciones/Instalaciones';
import { BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/Instaciones" element={<Instalaciones/>}></Route>
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
