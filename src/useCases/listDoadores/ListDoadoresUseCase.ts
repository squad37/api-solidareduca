import { Doador } from "../../entities/Doador";
import { DoadoresRepository } from "../../repositories/DoadoresRepository";

class ListDoadoresUseCase {
  constructor(private doadoresRepository: DoadoresRepository) {}

  async execute(): Promise<Doador[]> {
    const doadores = await this.doadoresRepository.list();
    return doadores;
  }
}

export { ListDoadoresUseCase };
