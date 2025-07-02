import { useEffect, useState } from "react";
import CardProdutos from "../cardprodutos/CardProdutos";
import { DNA } from "react-loader-spinner";
import { buscar } from "../../../../service/Service";
import type { Produto } from "../../../../models/Produto";

function ListaProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  async function buscarProdutos() {
    try {
      await buscar("/produtos", setProdutos, {}); // Sem headers
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  }

  useEffect(() => {
    buscarProdutos();
  }, []);

  return (
    <>
      {produtos.length === 0 ? (
        <DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperClass="dna-wrapper mx-auto"
        />
      ) : (
        <div className="flex justify-center w-full my-4">
          <div className="container flex flex-col mx-2">
            <div
              className="container mx-auto my-4 
              grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {produtos.map((produto) => (
                <CardProdutos key={produto.id} produto={produto} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ListaProdutos;
