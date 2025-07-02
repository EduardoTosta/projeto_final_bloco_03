import { useState, useEffect, type ChangeEvent } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import type { Categoria } from "../../../models/Categoria";
import { atualizar, cadastrar, consultar } from "../../../service/Service";
// ajuste o caminho se necessário

function FormCategoria() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  const { id } = useParams<{ id: string }>();

  async function buscarCategoriaPorId(id: string) {
    try {
      await consultar(`/categorias/${id}`, setCategoria);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
    } catch (error: any) {
      alert("Categoria não encontrada!");
      retornar();
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarCategoriaPorId(id);
    } else {
      setCategoria({
        id: 0,
        nome: "",
        produto: [], // <-- essa é a propriedade que está faltando
      });
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
      try {
        await atualizar(`/categorias`, categoria, setCategoria);
        alert("Categoria atualizada com sucesso");
        // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
      } catch (error: any) {
        alert("Erro ao atualizar a Categoria");
      }
    } else {
      try {
        await cadastrar(`/categorias`, categoria, setCategoria);
        alert("Categoria cadastrada com sucesso");
        // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
      } catch (error: any) {
        alert("Erro ao cadastrar a Categoria");
      }
    }

    setIsLoading(false);
    retornar();
  }

  function retornar() {
    navigate("/categorias");
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="my-8 text-4xl text-center text-black">
        {id === undefined ? "Cadastrar Categoria" : "Editar Categoria"}
      </h1>

      <form className="flex flex-col w-1/2 gap-4" onSubmit={gerarNovaCategoria}>
        <div className="flex flex-col gap-2 text-black">
          <label htmlFor="nome">Categoria</label>
          <input
            type="text"
            placeholder="Categoria"
            name="nome"
            value={categoria.nome}
            className="p-2 border-2 rounded border-slate-700 bg-indigo-50 text-black"
            required
            onChange={atualizarEstado}
          />
        </div>
        <button
          className="flex justify-center w-1/2 py-2 mx-auto rounded text-slate-100 bg-indigo-800  hover:bg-indigo-500"
          type="submit"
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
            <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
          )}
        </button>
      </form>
    </div>
  );
}

export default FormCategoria;
