import { Link } from "react-router-dom";
import type { Produto } from "../../../../models/Produto";

interface CardProdutosProps {
  produto: Produto;
}

function CardProdutos({ produto }: CardProdutosProps) {
  return (
    <div className="border-slate-900 border flex flex-col rounded overflow-hidden justify-between shadow-md">
      {/* Cabeçalho com imagem e nome */}
      <div className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4">
        <img
          src={produto.foto}
          className="h-12 w-12 object-cover rounded"
          alt={produto.nome}
        />
        <h3 className="text-lg font-bold text-white uppercase">
          {produto.nome}
        </h3>
      </div>

      {/* Corpo com dados */}
      <div className="p-4 bg-slate-100 text-slate-800 flex flex-col gap-1">
        <p>
          <strong>Preço:</strong>{" "}
          {produto.preco.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <p>
          <strong>Categoria:</strong>{" "}
          {produto.categoria?.nome ?? "Sem categoria"}
        </p>
      </div>

      {/* Botões */}
      <div className="flex">
        <Link
          to={`/editarproduto/${produto.id}`}
          className="w-full text-white bg-indigo-400 
            hover:bg-indigo-800 flex items-center justify-center py-2 transition-colors"
        >
          Editar
        </Link>
        <Link
          to={`/deletarproduto/${produto.id}`}
          className="text-white bg-red-400 
            hover:bg-red-700 w-full flex items-center justify-center py-2 transition-colors"
        >
          Deletar
        </Link>
      </div>
    </div>
  );
}

export default CardProdutos;
