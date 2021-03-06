import { Repository, EntityRepository, getRepository, ILike } from "typeorm";

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

  async soma10Pontos(id: string): Promise<void> {
    const escola = await this.findOne(id);
    escola.pontos += 10;

    await this.repository.save(escola);
  }

  async findOne(id: string): Promise<Escola> {
    const escola = await this.repository.findOne({ id });
    return escola;
  }

  async list(): Promise<Escola[]> {
    const escolas = await this.repository.find({
      order: {
        nome: "ASC",
      },
    });
    return escolas;
  }

  async listByRanking(): Promise<Escola[]> {
    const escolas = await this.repository.find({
      order: {
        pontos: "DESC",
        nome: "ASC",
      },
    });
    return escolas;
  }

  async searchByNome(nome: string): Promise<Escola[]> {
    const escola = await this.repository.find({
      where: {
        nome: ILike(`%${nome}%`),
      },
    });
    return escola;
  }

  async searchByUf(uf: string): Promise<Escola[]> {
    const escola = await this.repository.find({
      where: {
        uf: ILike(`%${uf}%`),
      },
    });
    return escola;
  }

  async searchByNomeAndUf(nome: string, uf: string): Promise<Escola[]> {
    const escola = await this.repository.find({
      where: {
        nome: ILike(`%${nome}%`),
        uf: ILike(`%${uf}%`),
      },
    });
    return escola;
  }
}

export { EscolasRepository };
