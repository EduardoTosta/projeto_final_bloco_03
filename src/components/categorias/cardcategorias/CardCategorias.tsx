import { Link } from "react-router-dom";
import type { Categoria } from "../../../models/Categoria";

interface CardCategoriasProps {
  categoria: Categoria;
}

function CardCategorias({ categoria }: CardCategoriasProps) {
  return (
    <div className="border flex flex-col rounded-2xl overflow-hidden justify-between shadow-md">
      <header className="py-2 px-6 bg-slate-800 text-white font-bold text-2xl">
        Categoria
      </header>

      <p className="p-8 text-3xl bg-slate-200 h-full break-words">
        {categoria.nome}
      </p>

      <div className="flex">
        <Link
          to={`/editarcategoria/${categoria.id}`}
          className="w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 
                     flex items-center justify-center py-2 transition-colors"
        >
          Editar
        </Link>

        <Link
          to={`/deletar/${categoria.id}`}
          className="w-full text-slate-100 bg-red-400 hover:bg-red-700 
                     flex items-center justify-center py-2 transition-colors"
        >
          Deletar
        </Link>
      </div>
    </div>
  );
}

export default CardCategorias;
