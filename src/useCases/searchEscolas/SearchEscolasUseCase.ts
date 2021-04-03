import { Escola } from "../../entities/Escola";
import { EscolasRepository } from "../../repositories/EscolasRepository";

class SearchEscolasUseCase {
  constructor(private escolasRepository: EscolasRepository) {}

  async execute(nome: string, uf: string): Promise<Escola[]> {
    // Se os 2 filtros vier em branco, retorna todas as escolas.
    if (nome === "" && uf === "") {
      const escola = await this.escolasRepository.list();

      if (escola.length === 0) {
        throw new Error("Nenhuma escola encontrada.");
      }

      return escola;
    }

    // Realiza filtro apenas pelo nome
    if (nome !== "" && uf === "") {
      const escola = await this.escolasRepository.searchByNome(nome);

      if (escola.length === 0) {
        throw new Error("Nenhuma escola encontrada.");
      }

      return escola;
    }

    // Realiza filtro apenas pelo UF
    if (nome === "" && uf !== "") {
      const escola = await this.escolasRepository.searchByUf(uf);

      if (escola.length === 0) {
        throw new Error("Nenhuma escola encontrada.");
      }

      return escola;
    }

    // Realiza filtro pelo nome e pelo UF
    if (nome !== "" && uf !== "") {
      const escola = await this.escolasRepository.searchByNomeAndUf(nome, uf);

      if (escola.length === 0) {
        throw new Error("Nenhuma escola encontrada.");
      }

      return escola;
    }

    throw new Error("Nenhuma escola encontrada");
  }
}

export { SearchEscolasUseCase };
