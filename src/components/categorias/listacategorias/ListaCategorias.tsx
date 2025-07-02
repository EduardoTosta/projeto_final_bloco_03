import { useEffect, useState } from "react";
import { buscar } from "../../../service/Service";
import { DNA } from "react-loader-spinner";
import CardCategorias from "../cardcategorias/CardCategorias";
import type { Categoria } from "../../../models/Categoria";

function ListaCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  async function buscarCategorias() {
    try {
      await buscar("/categorias", setCategorias, {}); // Sem headers
    } catch (error) {
      console.error("Erro ao buscar categorias:", error);
    }
  }

  useEffect(() => {
    buscarCategorias();
  }, []);

  return (
    <>
      {categorias.length === 0 ? (
        <DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperClass="dna-wrapper mx-auto"
        />
      ) : (
        <div className="flex justify-center w-full my-4">
          <div className="container flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categorias.map((categoria) => (
                <CardCategorias key={categoria.id} categoria={categoria} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ListaCategorias;
