import { RotatingLines } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import type { Categoria } from "../../../models/Categoria";
import { useState, type ChangeEvent } from "react";
import { cadastrar } from "../../../service/Service";

function FormCategoria() {
  const navigate = useNavigate();

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const [isLoading, setIsLoading] = useState(false);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  async function enviarFormulario(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    try {
      await cadastrar("/categorias", categoria, setCategoria);
      alert("Categoria cadastrada com sucesso!");
      navigate("/categorias"); // Navega para lista de categorias (ajuste a rota se necessário)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      alert("Erro ao cadastrar a categoria.");
    }

    setIsLoading(false);
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center my-8">Cadastrar categoria</h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={enviarFormulario}>
        <div className="flex flex-col gap-2">
          <label htmlFor="descricao">Descrição da Categoria</label>
          <input
            type="text"
            placeholder="Descreva aqui sua categoria"
            name="nome"
            className="border-2 border-slate-700 rounded p-2"
            value={categoria.nome || ""}
            onChange={atualizarEstado}
          />
        </div>
        <button
          className="rounded text-slate-100 bg-indigo-400 hover:bg-indigo-800 w-1/2 py-2 mx-auto flex justify-center"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="24"
              visible={true}
            />
          ) : (
            "Cadastrar"
          )}
        </button>
      </form>
    </div>
  );
}

export default FormCategoria;
