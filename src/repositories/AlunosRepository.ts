import { Repository, EntityRepository, getRepository } from "typeorm";

import { Aluno } from "../entities/Aluno";

interface ICreateAlunoDTO {
  nome: string;
  email: string;
  cpf: string;
  cep: string;
  uf: string;
  endereco: string;
  nome_responsavel: string;
  id_escola: string;
}

@EntityRepository(Aluno)
class AlunosRepository {
  private repository: Repository<Aluno>;

  constructor() {
    this.repository = getRepository(Aluno);
  }

  async create(aluno: ICreateAlunoDTO): Promise<void> {
    const createAluno = this.repository.create(aluno);
    await this.repository.save(createAluno);
  }

  async findById(id: string): Promise<Aluno> {
    const aluno = await this.repository.findOne({ id });
    return aluno;
  }

  async findByCpf(cpf: string): Promise<Aluno> {
    const aluno = this.repository.findOne({ cpf });
    return aluno;
  }

  async findByEmail(email: string): Promise<Aluno> {
    const aluno = this.repository.findOne({ email });
    return aluno;
  }

  async findByEscola(id_escola: string): Promise<Aluno[]> {
    const alunos = await this.repository.find({
      where: { id_escola },
      order: {
        nome: "ASC",
      },
    });

    return alunos;
  }

  async selectSenha(email: string): Promise<string> {
    const aluno = await this.repository
      .createQueryBuilder()
      .select("senha")
      .addSelect("Aluno.senha")
      .where({ email })
      .getOne();

    return aluno.senha;
  }

  async list(): Promise<Aluno[]> {
    const alunos = await this.repository.find();
    return alunos;
  }
}

export { AlunosRepository };
