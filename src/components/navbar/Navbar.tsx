import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full flex justify-center py-4 bg-slate-800 text-white">
      <div className="container flex justify-between items-center text-lg px-4 gap-4">
        {/* Logo */}
        <Link to="/home">
          <img
            src="https://ik.imagekit.io/eduardotosta/image.png?updatedAt=1751458756036"
            alt="Logo da Loja Games"
            className="h-10 w-auto"
          />
        </Link>

        {/* Barra de pesquisa com botão */}
        <div className="flex items-center flex-1 max-w-md mx-4 gap-2">
          <input
            type="text"
            placeholder="Pesquisar produtos..."
            className="flex-1 px-4 py-2 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            className="p-3 rounded-md hover:opacity-90"
            style={{ backgroundColor: "#67E8F9" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
              />
            </svg>
          </button>
        </div>

        {/* Navegação */}
        <nav className="flex items-center gap-6">
          <Link to="/produtos" className="hover:underline">
            Produtos
          </Link>
          <Link to="/categorias" className="hover:opacity-80">
            Categorias
          </Link>
          <Link to="/cadastrarcategoria" className="hover:opacity-80">
            Cadastrar categoria
          </Link>

          {/* Ícone de usuário */}
          <Link to="/perfil" className="hover:opacity-80">
            <img
              src="https://ik.imagekit.io/eduardotosta/image.png?updatedAt=1751459015140"
              alt="Perfil"
              className="h-8 w-8 rounded-full"
            />
          </Link>

          {/* Ícone de carrinho */}
          <Link to="/carrinho" className="hover:opacity-80">
            <img
              src="https://ik.imagekit.io/eduardotosta/imagens_games/image.png?updatedAt=1750960327912"
              alt="Carrinho de compras"
              className="h-8 w-8"
            />
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
