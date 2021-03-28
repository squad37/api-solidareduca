import { getCustomRepository } from "typeorm";

import { Material } from "../../entities/Material";
import { MaterialRepository } from "../../repositories/MaterialRepository";

class ListMaterialUseCase {
  constructor(private materialRepository: MaterialRepository) {}

  async execute(): Promise<Material[]> {
    const materiais = await this.materialRepository.list();

    return materiais;
  }
}

export { ListMaterialUseCase };