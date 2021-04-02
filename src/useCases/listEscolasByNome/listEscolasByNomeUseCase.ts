import { Escola } from "../../entities/Escola";
import { EscolasRepository } from "../../repositories/EscolasRepository";

class ListEscolasByNomeUseCase {
  constructor(private escolasRepository: EscolasRepository) {}

  async execute(nome:string): Promise<Escola[]> {
    const escolabynome = await this.escolasRepository.listByNome(nome);
    
    return escolabynome;
  }
}

export { ListEscolasByNomeUseCase };
