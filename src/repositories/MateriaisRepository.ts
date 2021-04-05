import { Repository, EntityRepository, getRepository } from "typeorm";

import { Material } from "../entities/Material";

@EntityRepository(Material)
class MateriaisRepository {
  private repository: Repository<Material>;

  constructor() {
    this.repository = getRepository(Material);
  }

  async findById(id: string): Promise<Material> {
    const material = await this.repository.findOne({ id });
    return material;
  }

  async list(): Promise<Material[]> {
    const material = await this.repository.find();
    return material;
  }
}

export { MateriaisRepository };
