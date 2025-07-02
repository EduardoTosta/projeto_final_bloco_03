import ListaProdutos from "../../components/produtos/produtos/listaprodutos/ListaProdutos";
import ModalProduto from "../../components/produtos/produtos/modalprodutos/ModalProduto";

function Home() {
  return (
    <>
      <div className="bg-[#67E8F9] flex justify-center">
        <div className="container grid grid-cols-2 text-white">
          <div className="text-black flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">Seja Bem Vindo!</h2>
            <p className="text-xl">
              Aqui você encontra os melhores medicamentos!
            </p>

            <div className="flex justify-around gap-4">
              <div className="flex justify-around gap-4">
                <ModalProduto />
              </div>
            </div>
          </div>

          <div className="flex justify-center ">
            <img
              src="https://ik.imagekit.io/eduardotosta/image.png?updatedAt=1751458715479"
              alt="Imagem Página Home"
              className="w-2/3"
            />
          </div>
        </div>
      </div>
      <ListaProdutos />
    </>
  );
}

export default Home;
