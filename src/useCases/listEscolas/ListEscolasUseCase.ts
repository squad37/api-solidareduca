import { getCustomRepository } from "typeorm";

import { Escola } from "../../model/Escola";
import { EscolasRepository } from "../../repositories/EscolasRepository";

class ListEscolasUseCase {
  async execute(): Promise<Escola[]> {
    const escolasRepository = getCustomRepository(EscolasRepository);

    const escolas = await escolasRepository.find();

    return escolas;
  }
}

export { ListEscolasUseCase };
