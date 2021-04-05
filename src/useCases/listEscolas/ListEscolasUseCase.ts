import { Escola } from "../../entities/Escola";
import { EscolasRepository } from "../../repositories/EscolasRepository";

class ListEscolasUseCase {
  constructor(private escolasRepository: EscolasRepository) {}

  async execute(): Promise<Escola[]> {
    const escolas = await this.escolasRepository.list();

    if (escolas.length === 0) {
      throw new Error("Nenhuma escola encontrada!");
    }

    return escolas;
  }
}

export { ListEscolasUseCase };
