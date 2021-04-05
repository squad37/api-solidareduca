import { Material } from "../../entities/Material";
import { MateriaisRepository } from "../../repositories/MateriaisRepository";

class ListMateriaisUseCase {
  constructor(private materiaisRepository: MateriaisRepository) {}

  async execute(): Promise<Material[]> {
    const materiais = await this.materiaisRepository.list();

    if (materiais.length === 0) {
      throw new Error("Nenhum material encontrado!");
    }

    return materiais;
  }
}

export { ListMateriaisUseCase };
