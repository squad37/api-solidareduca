import { Repository, EntityRepository, getRepository } from "typeorm";

import { Escola } from "../entities/Escola";

@EntityRepository(Escola)
class EscolasRepository {
  private repository: Repository<Escola>;

  constructor() {
    this.repository = getRepository(Escola);
  }

  async patchPontos(id: string): Promise<void> {
    const escola = await this.findOne(id);
    escola.pontos += 1;

    await this.repository.save(escola);
  }

  async findOne(id: string): Promise<Escola> {
    const escola = await this.repository.findOne({ id });
    return escola;
  }

  async list(): Promise<Escola[]> {
    const escolas = await this.repository.find({
      order: {
        pontos: "DESC",
      },
    });
    return escolas;
  }
}

export { EscolasRepository };
