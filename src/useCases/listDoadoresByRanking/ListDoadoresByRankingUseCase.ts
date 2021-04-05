import { Doador } from "../../entities/Doador";
import { DoadoresRepository } from "../../repositories/DoadoresRepository";

class ListDoadoresByRankingUseCase {
  constructor(private doadoresRepository: DoadoresRepository) {}

  async execute(): Promise<Doador[]> {
    const doadores = await this.doadoresRepository.listByRanking();

    if (doadores.length === 0) {
      throw new Error("Nenhum doador cadastrado!");
    }

    return doadores;
  }
}

export { ListDoadoresByRankingUseCase };
