import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import "./App.css";
import Footer from "./components/footer/Footer";
import ListaCategorias from "./components/categorias/listacategorias/ListaCategorias";
import DeletarTema from "./components/categorias/deletarcategoria/DeletarCategoria";
import FormCategoria from "./components/categorias/formcategoria/FormCategoria";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListaCategorias />} />
            <Route path="/deletar/:id" element={<DeletarTema />} />
            <Route path="/cadastrarcategoria" element={<FormCategoria />} />
            <Route path="/editarcategoria/:id" element={<FormCategoria />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
