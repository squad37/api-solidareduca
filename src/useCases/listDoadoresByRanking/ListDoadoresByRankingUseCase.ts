import { Doador } from "../../entities/Doador";
import { DoadoresRepository } from "../../repositories/DoadoresRepository";

class ListDoadoresByRankingUseCase {
  constructor(private doadoresRepository: DoadoresRepository) {}

  async execute(): Promise<Doador[]> {
    const doadores = await this.doadoresRepository.listByRanking();
    return doadores;
  }
}

export { ListDoadoresByRankingUseCase };
