import { Aluno } from "../../entities/Aluno";
import { AlunosRepository } from "../../repositories/AlunosRepository";

class ListAlunosUseCase {
  constructor(private alunosRepository: AlunosRepository) {}

  async execute(): Promise<Aluno[]> {
    const alunos = await this.alunosRepository.list();

    if (alunos.length === 0) {
      throw new Error("Nenhum aluno cadastrado!");
    }

    return alunos;
  }
}

export { ListAlunosUseCase };
