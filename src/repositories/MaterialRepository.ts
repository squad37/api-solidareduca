import { Repository, EntityRepository, getRepository } from "typeorm";

import {  Material } from "../entities/Material";

@EntityRepository(Material)
class MaterialRepository {
  private repository: Repository<Material>;

  constructor() {
    this.repository = getRepository(Material);
  }

  async list(): Promise<Material[]> {
    const material = await this.repository.find();
    return material;
  }
}

export { MaterialRepository };