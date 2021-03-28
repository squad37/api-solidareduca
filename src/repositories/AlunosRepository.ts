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
  repository: Repository<Aluno>;

  constructor() {
    this.repository = getRepository(Aluno);
  }

  async create(aluno: ICreateAlunoDTO): Promise<void> {
    const createAluno = this.repository.create(aluno);
    await this.repository.save(createAluno);
  }

  async findByCpf(cpf: string): Promise<Aluno> {
    const aluno = this.repository.findOne({ cpf });
    return aluno;
  }

  async findByEmail(email: string): Promise<Aluno> {
    const aluno = this.repository.findOne({ email });
    return aluno;
  }

  async list(): Promise<Aluno[]> {
    const alunos = this.repository.find();
    return alunos;
  }
}

export { AlunosRepository };
