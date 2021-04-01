import { Escola } from "../../entities/Escola";
import { EscolasRepository } from "../../repositories/EscolasRepository";

class ListEscolasUseCase {
  constructor(private escolasRepository: EscolasRepository) {}

  async execute(): Promise<Escola[]> {
    const escolas = await this.escolasRepository.list();

    return escolas;
  }
}

export { ListEscolasUseCase };
