import { Repository, EntityRepository, getRepository } from "typeorm";

import { Doador } from "../entities/Doador";

interface ICreateDoadorDTO {
  nome: string;
  email: string;
  cpf: string;
  cep: string;
  uf: string;
  endereco: string;
}

@EntityRepository(Doador)
class DoadoresRepository {
  private repository: Repository<Doador>;

  constructor() {
    this.repository = getRepository(Doador);
  }

  async create(doador: ICreateDoadorDTO): Promise<void> {
    const createDoador = await this.repository.create(doador);
    await this.repository.save(createDoador);
  }

  async patchPontos(id: string): Promise<void> {
    const doador = await this.repository.findOne({ id });
    doador.pontos += 1;

    await this.repository.save(doador);
  }

  async findById(id: string): Promise<Doador> {
    const doador = await this.repository.findOne({ id });
    return doador;
  }

  async findByCpf(cpf: string): Promise<Doador> {
    const doador = await this.repository.findOne({ cpf });
    return doador;
  }

  async findByEmail(email: string): Promise<Doador> {
    const doador = await this.repository.findOne({ email });
    return doador;
  }

  async selectSenha(email: string): Promise<string> {
    const doador = await this.repository
      .createQueryBuilder()
      .select("senha")
      .addSelect("Doador.senha")
      .where({ email })
      .getOne();

    return doador.senha;
  }

  async list(): Promise<Doador[]> {
    const doadores = await this.repository.find({ order: { nome: "ASC" } });
    return doadores;
  }

  async listByRanking(): Promise<Doador[]> {
    const doadores = await this.repository.find({
      order: {
        pontos: "DESC",
        nome: "ASC",
      },
    });

    return doadores;
  }
}

export { DoadoresRepository };
