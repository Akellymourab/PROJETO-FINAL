import Produto from "./components/Produto";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "../src/components/Produto/style.css"
import "./estilo.css"
import Produtos from "./pages/Produtos";

export default function App()
{
  return(
    <div>
      <BrowserRouter>

        <Routes>
          <Route path="/produtos" element={<Produtos/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}