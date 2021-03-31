import { Escola } from "../../entities/Escola";
import { EscolasRepository } from "../../repositories/EscolasRepository";

class ListEscolasByRankingUseCase {
  constructor(private escolasRepository: EscolasRepository) {}

  async execute(): Promise<Escola[]> {
    const escolas = await this.escolasRepository.listByRanking();
    return escolas;
  }
}

export { ListEscolasByRankingUseCase };
