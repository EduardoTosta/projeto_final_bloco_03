import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import "./App.css";
import Footer from "./components/footer/Footer";
import ListaCategorias from "./components/categorias/listacategorias/ListaCategorias";
import DeletarTema from "./components/categorias/deletarcategoria/DeletarCategoria";
import FormCategoria from "./components/categorias/formcategoria/FormCategoria";
import ListaProdutos from "./components/produtos/produtos/listaprodutos/ListaProdutos";
import FormProduto from "./components/produtos/produtos/formprodutos/FormProdutos";
import DeletarProduto from "./components/produtos/produtos/deletarproduto/DeletarProduto";

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
            <Route path="/produtos" element={<ListaProdutos />} />
            <Route path="/cadastrarproduto" element={<FormProduto />} />
            <Route path="/editarproduto/:id" element={<FormProduto />} />
            <Route path="/deletarproduto/:id" element={<DeletarProduto />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
