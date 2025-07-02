import axios, { type AxiosRequestConfig } from "axios";

const api = axios.create({
  baseURL: "https://farmacia-jk1x.onrender.com/",
});

// Função GET simples, sem headers
export const consultar = async <T>(
  url: string,
  setDados: (dados: T) => void
): Promise<void> => {
  try {
    const resposta = await api.get<T>(url);
    setDados(resposta.data);
  } catch (erro) {
    console.error("Erro ao consultar dados:", erro);
  }
};

// Função GET com headers opcionais
export const buscar = async <T>(
  url: string,
  setDados: (dados: T) => void,
  header: AxiosRequestConfig = {}
): Promise<void> => {
  try {
    const resposta = await api.get<T>(url, header);
    setDados(resposta.data);
  } catch (erro) {
    console.error("Erro ao buscar dados:", erro);
  }
};

// Função DELETE com tratamento de erro e headers opcionais
export const deletar = async (
  url: string,
  header: AxiosRequestConfig = {}
): Promise<void> => {
  try {
    await api.delete(url, header);
  } catch (erro) {
    console.error("Erro ao deletar:", erro);
    throw erro; // para tratar no componente chamador, se desejar
  }
};

// Função POST (cadastrar) com tratamento de erro e headers opcionais
export const cadastrar = async <T>(
  url: string,
  dados: T,
  setDados: (dados: T) => void,
  header: AxiosRequestConfig = {}
): Promise<void> => {
  try {
    const resposta = await api.post<T>(url, dados, header);
    setDados(resposta.data);
  } catch (erro) {
    console.error("Erro ao cadastrar:", erro);
  }
};

// Função PUT (atualizar) com tratamento de erro e headers opcionais
export const atualizar = async <T>(
  url: string,
  dados: T,
  setDados: (dados: T) => void,
  header: AxiosRequestConfig = {}
): Promise<void> => {
  try {
    const resposta = await api.put<T>(url, dados, header);
    setDados(resposta.data);
  } catch (erro) {
    console.error("Erro ao atualizar:", erro);
  }
};
