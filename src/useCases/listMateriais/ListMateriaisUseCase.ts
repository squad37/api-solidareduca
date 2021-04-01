import { Material } from "../../entities/Material";
import { MateriaisRepository } from "../../repositories/MateriaisRepository";

class ListMateriaisUseCase {
  constructor(private materiaisRepository: MateriaisRepository) {}

  async execute(): Promise<Material[]> {
    const materiais = await this.materiaisRepository.list();

    return materiais;
  }
}

export { ListMateriaisUseCase };
