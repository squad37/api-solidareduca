import { Escola } from "../../entities/Escola";
import { EscolasRepository } from "../../repositories/EscolasRepository";

class ListEscolasByRankingUseCase {
  constructor(private escolasRepository: EscolasRepository) {}

  async execute(): Promise<Escola[]> {
    const escolas = await this.escolasRepository.listByRanking();

    if (escolas.length === 0) {
      throw new Error("Nenhuma escola encontrada!");
    }

    return escolas;
  }
}

export { ListEscolasByRankingUseCase };
