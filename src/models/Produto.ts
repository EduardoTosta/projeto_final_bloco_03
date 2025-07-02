import type { Categoria } from "./Categoria";

export interface Produto {
  id: number;
  nome: string;
  preco: number; // BigDecimal em Java pode ser representado por number
  foto: string;
  categoria: Categoria; // referência à categoria
}
