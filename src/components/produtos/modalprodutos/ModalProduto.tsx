import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./ModalProdutos.css";
import FormProduto from "../formprodutos/FormProdutos";

function ModalProduto() {
  return (
    <>
      <Popup
        trigger={
          <button className="border rounded px-4 py-2 hover:bg-white hover:text-indigo-800">
            Novo Produto
          </button>
        }
        modal
      >
        <FormProduto />
      </Popup>
    </>
  );
}

export default ModalProduto;
