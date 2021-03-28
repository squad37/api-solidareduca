import { Repository, EntityRepository, getRepository } from "typeorm";

import { Escola } from "../entities/Escola";

@EntityRepository(Escola)
class EscolasRepository {
  private repository: Repository<Escola>;

  constructor() {
    this.repository = getRepository(Escola);
  }

  async list(): Promise<Escola[]> {
    const escolas = await this.repository.find();
    return escolas;
  }
}

export { EscolasRepository };
