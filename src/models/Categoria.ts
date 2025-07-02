import type { Produto } from "./Produto";

export interface Categoria {
  id: number;
  nome: string;
  produto: Produto[]; // lista de produtos que pertencem a essa categoria
}
